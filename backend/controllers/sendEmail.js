nodemailer = require("nodemailer");


const Email = (options) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    transporter.sendMail(options, function (error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send({ code: 200, Status: "message sent" })
        }
    })
}
const mailOptions = ({ firstName, lastName, email, message, phone }) => {
    const options = {
        from: firstName,
        to: process.env.USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${firstName} ${lastName}</p>
                     <p>Email: ${email}</p>
                     <p>Phone: ${phone}</p>
                     <p>Message: ${message}</p>`,
    }
    Email(options)
};


// }).catch(err => console.log(err))


export default mailOptions 