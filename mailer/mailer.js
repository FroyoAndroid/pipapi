const nodemailer = require('nodemailer');
let transporter = null;
nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        // secure: false, // true for 465, false for other ports
        service: 'gmail',
        auth: {
            user: 'freelancernirajchauhan@gmail.com', // generated ethereal user
            pass: 'niraj9748258128' // generated ethereal password
        }
    });

});

exports.sendMail = function (email) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Pipyala Support Team" <support@pipyala.com>', // sender address
        to: email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
};