var router = require('express').Router();
const nodemailer = require('nodemailer');
    
let testEmailAccount = nodemailer.createTestAccount();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asti.company1@gmail.com',
        pass: 'asti2015074'
    }
});


router.post('/mail', function (req, res, next) {
    res.json(1);
    var body = req.body;
    let result = transporter.sendMail({
        from: '"Форма сайта" <asti.company1@gmail.com>',
        to: "sancej176@mail.ru",
        subject: "Асти компани",
        text: "This message was sent from Node js server.",
        html: "Новый пользователь: " + body.name + ", номер телефона: " + body.phone
    });
});
  

module.exports = router;
