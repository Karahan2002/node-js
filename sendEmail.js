var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'you mail',
    pass: 'password of your mail account'
  }
});

var mailOptions = {
  from: 'mail address',
  to: 'mail address',
  subject: 'Sending Email using Node.js',
  text: 'The Email has been sent succesfully!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
