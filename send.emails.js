const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (req, res) => {
//     const { subject, message } = req.body;
//     const users = await User.findAll();
//     if (users.length === 0) {
//       return res.status(400).json({ message: "No users found" });
//     }
//     const emails = users.map(user => user.email);
  
//     const msg = {
//       to: emails,
//       from: 'mukakalisajeanne@gmail.com',
//       subject: 'Hello from sendgrid',
//       text: 'Hello from sendgrid',
//       html: '<h1>Hello from sendgrid</h1>',
//     };
//     try {
//       await sgMail.send(msg);
//       return res.json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error sending email' });
//     }
//   };
  
    const msg = {
      to: ['kwizerapacifique19@gmail.com', 'boriskirenga5@gmail.com', 'j.mukakalis@alustudent.com'],
      from: {
        name: 'Jeanne Mukakalisa',
        email: 'mukakalisajeanne@gmail.com',
      },
      subject: 'Hello from sendgrid',
      text: 'Hello from sendgrid',
      html: '<h1>Hello from sendgrid</h1>',
    };

    sgMail
      .send(msg)
      .then((response) => console.log('Email sent successfully...'))
      .catch((error) => console.log(error.msg));
