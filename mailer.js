// 1- import nodemailer ............
const nodemailer = require('nodemailer');

// 2. Configure email and send it .........
async function sendMail(){
    // 1.create an emal transporter here .
    // 2.SMTP (Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'nazim.nn459@gmail.com',
            pass:'',
        },
    });

    // Configure email content 
    const mailOptions = {
        form: 'nazim.nn459@gmail.com',
        to: 'puneetgautam437@gmail.com',
        subject: 'Welcome to Nodejs App',
        text: 'Hi puneet kaise ho !!!!',
    };

    //3.send the emal 

    try{
        const result = await transporter.sendMail(
            mailOptions
        );
        console.log("Email sent successfully!");
    }catch(err){
        console.log('email send faild with error' +err);
    }

}
sendMail();

