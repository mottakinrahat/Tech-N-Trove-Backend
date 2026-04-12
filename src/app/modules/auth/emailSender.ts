import nodemailer from "nodemailer";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const emailSender=async(email:string,html:string)=>{
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL, 
    pass:process.env.APP_PASSWORD, 
  },
  tls:{
    rejectUnauthorized:false
  }
});

  const info = await transporter.sendMail({
    from:'"PH Health Care"<rahatchowdhury661@gmail.com>', 
    to:email,
    subject: "Reset Your Password",
    html,
  });

  console.log("Message sent:", info.messageId);
}
export default emailSender;