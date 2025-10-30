//set a utillity to send otp to use email usine nodemailer

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
    {
        service:process.env.EMAIL_SERVICE,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        }
    }
);