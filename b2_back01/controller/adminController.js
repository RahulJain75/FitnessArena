const bcrypt = require("bcrypt")
const Admin = require("../Modal/AdminModal")
const jwt = require('jsonwebtoken');
const tls = require('tls');
const nodemailer = require('nodemailer');

async function adminlogin(req) {
    return new Promise((resolve, reject) => {
        const { email, password } = req.body;
        Admin.findOne({ email })
            .then((doc) => {
                if (!doc) {
                    resolve("Admin not exist");
                } else {
                    // Compare password directly
                    if (password === doc.password) {
                        let data = {
                            id: doc._id,
                            name: doc.name,
                        };
                        const token = jwt.sign(data, '34567890-87654344gbngyumn78k78');
                        const fname= doc.adminName.split(" ");
                        
                        resolve([token, fname[0]]);
                    } else {
                        resolve("password incorrect");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
}


module.exports = {
    adminlogin
}