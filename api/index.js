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
    var body = req.body;
    let result = transporter.sendMail({
        from: '"Форма сайта" <asti.company1@gmail.com>',
        to: "office@asti.by",
        subject: "Асти компани",
        text: "This message was sent from Node js server.",
        html: "Новый пользователь: " + body.name + ", номер телефона: " + body.phone + ", email: " + body.email + ", текст вопроса: " + body.message
    }, function (err, data) {
        if (err) {
            console.log(err);
        }
    });
    res.end();
});
  

module.exports = router;
