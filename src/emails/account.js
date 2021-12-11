const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: "brijeshc@sixsigmatechnosoft.com",
//   from: "brijeshc@sixsigmatechnosoft.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "brijeshc@sixsigmatechnosoft.com",
    subject: "Thanks For Joining In!",
    text: `Welcome to the app, ${name}. Let me know if you like this Application.`,
  });
};

const sendCancleEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "brijeshc@sixsigmatechnosoft.com",
    subject: "Sorry To See You Go!",
    text: `Goodbye, ${name}. I hope to see you back in sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancleEmail,
};
