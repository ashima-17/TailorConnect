var express=require("express");
var app=express();
// const nodemailer = require("nodemailer");
var fileuploader=require("express-fileupload");
var {connectToMongoDB}=require("./config/dbConnect");
require("dotenv").config();
console.log(process.env.sec_key);

// var path=require("path");
const cors=require('cors');
var userRouter=require("./routers/signupRouter");
var customerRouter=require("./routers/CustomerRouter");
var tailorRouter=require("./routers/TailorRouter");
var aadhaarRouter=require("./routers/AadharRouter");
var reviewRouter=require("./routers/ReviewRouter")
app.use(fileuploader());
app.use(express.urlencoded({extend:true}));
//  app.use(express.json());
connectToMongoDB();
app.use(cors());




app.use("/user",userRouter);
app.use("/customer",customerRouter);
app.use("/tailor",tailorRouter);
app.use("/aadhaar",aadhaarRouter);
app.use("/review",reviewRouter);


app.listen(2007,()=>{
    console.log("Server started at port no:"+2007);
})
// app.get("/",(req,resp)=>
// {
//     resp.send("its home12 page");
// })
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "aroraashima313@gmail.com",
//         pass: "rngn eclc aaer mbym"
//     }
//     });

//    app.post("/send", async (req, res) => {
//     const { to, subject, text } = req.body;

//     const mailOptions = {
//         from: "aroraasshima313@gmail.com",
//         to: "ronak.bhatia@gmail.com",
//         subject :"hello",
//          text:"Yeh mail tumhare server se gayi hai."
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//          res.send("Mail bhej diya!");     } catch (err) {
//         console.error(err);
//        res.status(500).send("Mail nahi gaya!");
//      }
 
