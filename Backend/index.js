const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())
app.use(cors());

const port = process.env.port || 5000;


let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'ipocryptos@gmail.com', // Your Gmail email address
    pass: 'ixbw rudr efft hedl', // Your Gmail app password or an app-specific password
  },
})


const sendEmail = async (Name, Email, Message, res) => {
  try {

    const mailOptions = {
      from: Email,
      to: "ai@stainmind.com",
      subject: `${Name}`,
      html: `<h2>Message</h2>
              <p>${Message}</p>`
    }

    await transporter.sendMail(mailOptions)

    return {
      status: True
    };
  } catch (error) {
    return {
      status: "Failed",
      message: error.message,
    };
  }
}

// Create a user
app.post("/sendMail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await sendEmail(name, email, message);

    if (response.status) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred');
  }
});


app.listen(port, () => {
  console.log(`Inote-book listening at http://localhost:${port}`)
})

