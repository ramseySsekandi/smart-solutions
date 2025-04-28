'use server'

 


 

import { IContactInputs } from "@/types/mail-forms";
 

import nodemailer from 'nodemailer';
 


 

export async function sendContactMail(data:IContactInputs){
 

    try {
 

        // NODE MAILER SETUP
 

        const transporter = nodemailer.createTransport({
 

            service: 'gmail',
 

            auth: {
 

                user: process.env.SMTP_USERNAME,
 

                pass: process.env.SMTP_PASSWORD,
 

            },
 

        });
 


 

        const mailOptions = {
 

            from: data.email,
 

            to: process.env.MAIL_RECEIVER_ADDRESS,
 

            subject: data.name,
 

            text: data.message,
 

            html:'',
 

        };
 


 

        // SEND EMAIL
 

        await transporter.sendMail(mailOptions)
 

        return {
 

            success: true,
 

            error: null
 

        }
 

    } catch (error) {
 

        console.log(error)
 

    }
 

}