import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest) {
    const { name, email, phone, service, description } = await request.json();
    
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD,
                },
            });
    
    
    // Set up email data
    const mailOptions = {
        from: email, // sender address
        to: [process.env.MAIL_RECEIVER_ADDRESS, email], // list of receivers
        subject: `New Service Request from ${name} at ${phone} requesting for ${service}`, // Subject line
        text: description, // plain text body
    };
    
    try {
        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Service request sent successfully!', success: true }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send feedback.', success: false }, { status: 500 });
    }
}