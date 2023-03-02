// const app = require("./server.js");
// const db = require("./models/index.js");
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// app.listen(5000, () => {
//   console.log("-->Be advised, the server is up and running!");
// });

// (async () => {
//   try {
//     await db.sequelize
//       .sync({ force: false, alter: true })
//       .then(() => console.log("Successfully connected to the db"));
//   } catch (error) {
//     console.log("Error connecting to the db", error.message);
//   }
// })();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
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
