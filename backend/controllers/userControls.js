
const userRouter = require("express").Router(),
  User = require("../Models/Auth.model"),
  nodemailer = require("nodemailer")
// bcrypt = require("bcryptjs")

userRouter.post("/contact", async (req, res) => {

  const { firstName, lastName, email, message, phone } = req.body;
  try {
    // if (req.body) {
    // const hashedPassword = bcrypt.hashSync(password, 10)
    try {
      const newUser = new User(req.body)
      await newUser.save().then((res) => {
        if (res._id) {
          return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: response
          })
        } else {
          throw new Error({ message: "Something went wrong" })
        }
      })
      // res.status(201).json({ message: "User created successfully" })
    } catch (error) {
      console.log(error.message);
    }
    // }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });
    var mailOptions = {
      from: firstName,
      to: process.env.USER,
      subject: "Contact Form Submission - Portfolio",
      text: 'Portfolio - Contact Form submission',
      html: `<p>Name: ${firstName} ${lastName}</p>
                 <p>Email: ${email}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.send(error)
      } else {
        res.send({ code: 200, Status: "message sent" })
      }
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
});

module.exports = userRouter;