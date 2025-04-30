'use server'

import { IContactInputs } from "@/types/mail-forms";
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import { ContactEmail } from "@/components/email/contact-email"


export async function sendContactMail(data:IContactInputs,){
    
    const {name, email, message} = data
    try {
        // NODE MAILER SETUP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const emailHtml = await render(<ContactEmail userName={name} message={message} />)

        const mailOptions = {
            from: email,
            to: process.env.MAIL_RECEIVER_ADDRESS,
            subject: `New message from ${name}`,
            // text: message,
            html: emailHtml,
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