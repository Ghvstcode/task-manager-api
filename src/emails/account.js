const nodemailer = require("nodemailer");


const password = process.env.SENDER_PASS

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'thetechtekker@gmail.com', 
      pass: password
    }
})

const welcomeEmail = function (email, name) {
    const  mailOptions = {
        from: 'thetechtekker@gmail.com',//replace with your email
        to: email,//replace with your email
        //subject: `Contact name: ${req.body.name}`,
        subject: 'welcome to the task manager',    
        text: `hello ${name}, welcome to the task mnager app, let me know how it goes`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        res.status(500).send('error') // if error occurs send error as response to client
        }
        else {
        console.log('Email sent: ' + info.response);
        }
    });
}

const cancelEmail = function (email, name) {
    const  mailOptions = {
        from: 'thetechtekker@gmail.com',//replace with your email
        to: email,//replace with your email
        //subject: `Contact name: ${req.body.name}`,
        subject: 'Goodbye',    
        text: `hello ${name}, we hate to see you go!could you rate your experience on this app to help us better`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        res.status(500).send('error') // if error occurs send error as response to client
        }
        else {
        console.log('Email sent: ' + info.response);
        res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
        }
    });
}



module.exports = {
   welcomeEmail,
   cancelEmail
}


