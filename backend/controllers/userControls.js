
const userRouter = require("express").Router(),
  User = require("../Models/Auth.model"),
  nodemailer = require("nodemailer");

userRouter.post("/contact", (req, res) => {
   
    // const { firstName, lastName, email, message, phone } = req.body;  
  
  try {
  const output = `<p>Name: ${req.body.firstName} ${req.body.lastName}</p>
                 <p>Email: ${req.body.email}</p>
                 <p>Phone: ${req.body.phone}</p>
                 <p>Message: ${req.body.message}</p>
                 <h4>{req.body} </h4>`
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
      text: hi,
       html: output
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
