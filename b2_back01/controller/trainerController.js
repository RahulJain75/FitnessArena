const bcrypt = require("bcrypt")
const Trainer = require("../Modal/TrainerModal")
const jwt = require('jsonwebtoken');
const tls = require('tls');
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            rejectUnauthorized: false,
            minVersion: "TLSv1.2"
        },
        auth: {
            user: "sahilpreetsaini15@gmail.com",
            pass: "lyky vqqa sefj qczp"
            ,
        },
    }
);

function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    console.log(ans);
    return ans;
}

//randomStr(20, '12345abcde');


async function signup(req) {
    return new Promise((resolve, reject) => {
        const {Name,userName,dateOfBirth , age , phone,  email, password} = req.body;
        console.log(req.body)
        let hashPassword = bcrypt.hashSync(password, 10);
        console.log(hashPassword + "hashPassword")
        const newTrainer = new Trainer({
            Name,
            userName,
            dateOfBirth,
            age,
            phone,
            email,
            password: hashPassword
        });
        console.log(newTrainer)

        //const User
        Trainer.findOne({ email }).then((d) => {
            if (d) {
                console.log(d, 'iiuhihhi')
                resolve("Trainer already exist")
            }
            else {
                newTrainer.save()
                    .then((savedTrainer) => {
                        console.log('Trainer saved:', savedTrainer);
                        resolve(newTrainer)
                    })
                    .catch((error) => {
                        console.error('Error saving Trainer:', error);
                        reject(false)
                    });
            }

        })
    })
}



async function login(req) {
    return new Promise((resolve, reject) => {
        const { email, password } = req.body;
        Trainer.findOne({ email }).then((doc) => {
            if (!doc) {
                resolve("Trainer not exist")
            }
            //compare password 
            bcrypt.compare(password, doc.password, function (err, res) {
                if (res) {
                    // resolve( "login successfull")
                    let data = {
                        id: doc._id,
                        name: doc.name,
                    }
                    const token = jwt.sign(data, '34567890-87654344gbngyumn78k78');
                    const fname = doc.Name.split(" ");
                    resolve([token,fname[0]])
                }
                else {
                    resolve("password incorrect")
                }
            });

        })
            .catch((err) => {
                console.log(err)
            })

    })
}

async function forget(req) {
    return new Promise((resolve, reject) => {
        const { email } = req.body;
        Trainer.findOne({ email }).then((doc) => {
            if (!doc) {
                console.log('failed')
                resolve("email does not exist");
            }
            else {
                let otpToken = randomStr(4, '0123456789');
                Trainer.updateOne({ email }, { otpToken: otpToken })
                    .then((doc) => {
                        console.log('otp Saved', doc)
                        {
                            resolve(doc)
                        }
                    }).catch((err) => { console.log(err, "otpsave error") }
                    )
                let mailDetails = {
                    from: 'sahilpreetsaini15@gmail.com',
                    to: req.body.email,
                    subject: "otp",
                    text: otpToken
                };
                mailTransporter.sendMail(mailDetails, function (err, data) {
                    if (err) {
                        console.log('Error Occurs', err);
                    } else {
                        console.log(otpToken, 'Email sent successfully');
                    }
                });
                console.log('not failed')
                resolve("Email sent successfully")
            }
        })
            .catch((err) => {
                console.log(err)
            })
    })
}

//update password
async function updatePassword(req) {
    const { email, password, otpToken } = req.body;
    let hashPassword = bcrypt.hashSync(password, 10);
    return new Promise((resolve, reject) => {
        const { email, otpToken } = req.body;
        console.log({ email, otpToken }, req.body)
        Trainer.findOne({ email: email }).then((doc) => {
            if (!doc) {
                console.log('failed')
                resolve("email does not exist");
            }
            else {
                Trainer.findOne({ otpToken: otpToken }).then((doc) => {
                    if (!doc) {
                        console.log('failed')
                        resolve("OTP does not match");
                    } else {
                        console.log('updatePassword is sucess')
                        Trainer.updateOne({ email }, { password: hashPassword }).then((doc) => {
                            console.log({ doc })
                        })
                            .catch((err) => {
                                console.log({ err })
                            })
                        resolve("Password updated successfully")
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })

            }
        })
            .catch((err) => {
                console.log(err)
            })
    })
}




//change password

async function changePassword(req) {
    const { email, password, otpToken } = req.body;

    try {
        const hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword);

        const trainerEmail = await Trainer.findOne({ email: email });
        const trainerOtp = await Trainer.findOne({ otpToken: otpToken });
        if (!trainerEmail) {
            console.log('trainerEmail not found');
            return "trainerEmail is not valid";
        }
        else if (!trainerOtp) {
            console.log('trainerOtp not found');
            return "trainerOtp is not valid";
        }
        await Trainer.updateOne({ email }, { password: hashPassword });
        console.log('Password updated successfully');
        return "Password updated successfully";
    }
    catch (error) {
        console.error(error);
        return "An error occurred";
    }
}


module.exports = {
    signup,
    login,
    forget,
    updatePassword,
    changePassword
}