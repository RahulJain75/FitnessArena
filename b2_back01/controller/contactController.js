const Contact = require("../Modal/ContactModal")
const jwt = require('jsonwebtoken');
const tls = require('tls');
const nodemailer = require('nodemailer');

async function contact(req) {
    return new Promise((resolve, reject) => {
        const { Name, phone , email, message } = req.body;
        console.log(req.body)
        const newContact = new Contact({
            Name,
            phone,
            email,
            message
        });
        console.log(newContact)

        //const User
        Contact.findOne({ email }).then((d) => {
            if (d) {
                console.log(d, 'iiuhihhi')
                resolve("already sent a message")
            }
            else {
                newContact.save()
                    .then((savedContact) => {
                        console.log('message saved:', savedContact);
                        resolve(newContact)
                    })
                    .catch((error) => {
                        console.error('Error saving user:', error);
                        reject(false)
                    });
            }

        })
    })
}

module.exports = {
    contact
}