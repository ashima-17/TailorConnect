var path=require("path");
 var UserColRef=require("../models/ModelUser");
 const nodemailer = require("nodemailer");
 var jwt=require("jsonwebtoken");

function doSignup(req,resp)
{
    req.body.dos=new Date().toString();
     
    let objUserColRef=new UserColRef(req.body);
objUserColRef.save().then((doc)=>
{
    console.log(doc);
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "aroraashima313@gmail.com", // your email
          pass: "xbqzfhalahspvttm" // app password
        }
});
     
      transporter.sendMail({
        from: `Fitly Made <aroraashima313@gmail.com>`,
        to: doc.emailid,
        subject: "Welcome to Fitly Made!",
        html: `<h1>${doc.emailid}</h1><p>You signed up as <b>${doc.userType}</b>.</p>`,
      });
      
     resp.status(200).json({status:true,msg:"record saved",doc:doc})
}).catch((err)=>
{
    resp.status(200).json({status:false,msg:err.message});

})


}
 async function doLogin(req,resp)
{
    await UserColRef.findOne( {emailid:req.body.emailid,password:req.body.password}).then((doc)=>
{
    if(doc!=null)
    {
        let jtoken=jwt.sign({emailid:req.body.emailid},process.env.sec_key,{expiresIn:"15m"});
        console.log(jtoken);
    //  resp.status(200).json({status:true,msg:"Record updated ",doc:doc})
     resp.status(200).json({status:true, msg:"Logged in successfully", userType:doc.userType,token:jtoken})
    }
      else
         resp.status(200).json({status:false,msg:"Invalid id or password"})
    

}).catch((err)=>
{
    resp.status(200).json({status:false,msg:err.message});

})

}
module.exports={doSignup,doLogin}