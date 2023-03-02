const sendMail = require("../config/sendMail");
const db = require("../models/index");
const User = db["User"];

const toAllusers = async (req, res) => {
  let allUsers = await User.findAll();

  if (!allUsers) res.status(400).json({ message: "No users found" });

  let emails = [];

  for (const user of allUsers) {
    emails.push(user.email);
  }
  const msg = {
    to: emails,
    from: {
      name: "Kwizera",
      email: "kwizerapacifique19@gmail.com",
    },
    subject: req.body.subject,
    text: req.body.text,
    html: `<h1>Here goes the email</h1>
            <p>${req.body.text}</p>`,
  };
  sendMail(msg);

  return res.json({ message: "email sent" });
};

module.exports = toAllusers;
