const sgMail = require("@sendgrid/mail");

const sendMail = (msg) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  sgMail
    .send(msg)
    .then((response) => console.log("Email sent successfully..."))
    .catch((error) => console.log(error));
};

module.exports = sendMail;
