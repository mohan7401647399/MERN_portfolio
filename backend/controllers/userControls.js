
const userRouter = require("express").Router(),
  User = require("../Models/Auth.model"),
  nodemailer = require("nodemailer");

userRouter.post("/contact", (req, res) => {

<<<<<<< HEAD
  //  const { firstName, lastName, email, message, phone } = req.body;  

  try {
    const { firstName, lastName, email, message, phone } = req.body;
=======
    //  const { firstName, lastName, email, message, phone } = req.body;  
  
  try {
  const { firstName, lastName, email, message, phone } = req.body;
>>>>>>> 84e77a20de81e704614f8a1010ccb1d1f67401c9
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
<<<<<<< HEAD
      html: `<p>Name: ${firstName} ${lastName}</p>
=======
       html: `<p>Name: ${firstName} ${lastName}</p>
>>>>>>> 84e77a20de81e704614f8a1010ccb1d1f67401c9
                 <p>Email: ${email}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>
                 <h4>${req.body} </h4>`
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
