var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');
const nodemailer = require('nodemailer');
    
let testEmailAccount = await nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asti.company1@gmail.com',
        pass: 'asti2015074'
    }
});


router.post('/mail', function (req, res, next) {
    let result = await transporter.sendMail({
        from: '"Node js" <asti.company1@gmail.com>',
        to: "sancej176@mail.ru",
        subject: "Message from Node js",
        text: "This message was sent from Node js server.",
        html: "This <i>message</i> was sent from <strong>Node js</strong> server."
    });
    res.json(1);
});
  

module.exports = router;
