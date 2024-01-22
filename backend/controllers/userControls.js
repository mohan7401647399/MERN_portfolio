// const userRouter = require("express").Router(),
//   User = require("../Models/Auth.model"),
//   nodemailer = require("nodemailer");

// userRouter.post("/contact", (req, res) => {


//   try {
//     const { firstName, lastName, email, message, phone, } = req.body;
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.USER,
//         pass: process.env.PASS
//       }
//     });
//     const mailOptions = {
//       from: firstName,
//       to: process.env.USER,
//       subject: "Contact Form Submission - Portfolio",
//       html: `<p>Name: ${firstName} ${lastName}</p>
//                  <p>Email: ${email}</p>
//                  <p>Phone: ${phone}</p>
//                  <p>Message: ${message}</p>`,
//     };

//     transporter.sendMail(mailOptions, (error) => {
//       if (error) {
//         res.send(error)
//       } else {
//         res.send({ code: 200, Status: "message sent" })
//       }
//     });

//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       error: error,
//     });
//   }
// });

// module.exports = userRouter;





const userRouter = require("express").Router(),
  User = require("../Models/Auth.model"),
  nodemailer = require("nodemailer");

// userRouter.post("/contact",async (req, res) => {
userRouter.post("/contact", (req, res) => {
  
  try {
    const { firstName, lastName, email, message, phone } = req.body;
    // await User.create({firstName, lastName, email, message, phone})
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });
    const mailOptions = {
      from: firstName,
      to: process.env.USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
                 <p>Email: ${email}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>
                 <h4>{req.body} </h4>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.send(error)
      } else {
        res.send({ code: 200, Status: "message sent" })
      }
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
});

module.exports = userRouter;
