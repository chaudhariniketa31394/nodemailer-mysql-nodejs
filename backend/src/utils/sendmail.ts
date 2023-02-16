import nodemailer from "nodemailer";
import {Request,Response} from 'express'
import { sendError, sendSuccess } from "../helper/response";
export const sendEmail = async (req:Request,res:Response,authuser:any,mailObj:any) => {
  console.log("authuser@@@@@@inside mail send",authuser)
  const transporter = nodemailer.createTransport({
    host: authuser[0].SMTPHost,
    secure: authuser[0].smtpsecure == 'SSL'? true : false,
    port: authuser[0].SMTPPort, 
    auth: {
      user: authuser[0].username,
      pass: authuser[0].password,
    }
  });
console.log("transportertransporter",transporter)
  const options = {
    from: authuser[0].username,
    to: mailObj.email,
    // replyTo: reply_to,
    subject: mailObj.subject,
    html:'<h1>,</h1><p>You have successfully created.</p>'
  };


  transporter.verify(function (error, success) {
    if (error) {
      console.log("error in verify smtp",error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  // Send Email
  transporter.sendMail(options, (err:any, info:any) => {
    if (err) {
      console.log("errrrr",err)
        sendError(req,res,500,err)
    } else {
      console.log("info",info)
      sendSuccess(req,res,'email sent successfully',info);
    }
  });
};

export default sendEmail;