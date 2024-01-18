const userRouter = require("express").Router(),
  User = require("../Models/Auth.model"),
  nodemailer = require("nodemailer");

// userRouter.post('/contact', (req, res) => {
//   try {
//     User.create(req.body)
//       .then((response) => {
//         if (response._id) {
//           return res.status(200).json({
//             success: true,
//             message: "New user created",
//             data: response
//           })
//         } else {
//           throw new Error({ message: "Something went wrong" })
//         }
//       }).catch((err) => {
//         return res.status(402).json({
//           success: false,
//           error: err.message,
//           message: "New user error"
//         })
//       })
//   } catch (error) {
//     res.status(500).send({
//       message: "New user save error",
//       error: error.message
//     })
//   }
// })

userRouter.post("/contact", (req, res) => {

  try {
    // const newUser = new User(req.body)
    // newUser.save().then(user => {
    //   console.log(user);
    const { firstName, lastName, email, message, phone, } = req.body;

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
                 <p>Message: ${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.send(error)
      } else {
        res.send({ code: 200, Status: "message sent" })
      }
    });
    // }).catch(err => console.log(err))

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
});

module.exports = userRouter;