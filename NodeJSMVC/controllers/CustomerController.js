var path=require("path");
var cloudinary=require('cloudinary').v2;
 var CustProfColRef=require("../models/Model Customer")
 cloudinary.config(
 {
     cloud_name:'dmrvmcaz9',
     api_key:'667462472788368',
     api_secret:'D2snVwNeotWR6sfV4OpokL6Ka18'
 })
 async  function doCustomerSignup(req,resp)
 {
console.log("**********");
    //emailid,pwd,mobile,pic

    //let pt=path(__dirname)
    //let uploadsFolderPath=__dirname+"/uploads/"+"me.png";
    //let uploadsFolderPath=path.join(__dirname,"..","uploads","me.png");
    let fileName="nopic.jpg";
    if(req.files!=null)
    {
     fileName=req.files.profilepic.name;
    // let uploadsFolderPath=path.join(__dirname,"..","uploads",fileName);
    let uploadsFolderPath="/tmp/"+fileName;
    await req.files.profilepic.mv(uploadsFolderPath);
    //****************Sending to cloudinary server******************* */
        await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
            var fileNameUrlOnServer=picUrlResult.url;   //will give u the url of ur pic on cloudinary server
           // console.log(fileNameUrlOnServer);
            fileName=fileNameUrlOnServer;
      });
    
    }
     req.body.picurl=fileName;
     req.body.dos=new Date().toString();
   

    let objCustProfColRef=new CustProfColRef(req.body);
    objCustProfColRef.save().then((doc)=>{
        console.log(doc)
        resp.status(200).json({status:true,msg:"record saved",doc:doc})

    }).catch((err)=>{
        resp.status(200).json({status:false,msg:err.message})
    })
   

    }
     async function doCustomerUpdate(req,resp)
    {
        let fileName="nopic.jpg";
    if(req.files&&req.files.profilepic)
    {
     fileName=req.files.profilepic.name;
    // let uploadsFolderPath=path.join(__dirname,"..","uploads",fileName);
    let uploadsFolderPath="/tmp/"+fileName;
     await req.files.profilepic.mv(uploadsFolderPath);
    //****************Sending to cloudinary server******************* */
        await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
            var fileNameUrlOnServer=picUrlResult.url;   //will give u the url of ur pic on cloudinary server
           // console.log(fileNameUrlOnServer);
            fileName=fileNameUrlOnServer;
              req.body.picurl=fileName;
            
      });
      console.log("File uplosded succeswsfully");

  }
   await CustProfColRef.findOneAndUpdate({emailid:req.body.emailid},{$set:req.body}).then((doc)=>
 {
     resp.status(200).json({status:true,msg:"Record updated",doc:doc})
    
  }).catch((err)=>
 {
   resp.status(200).json({status:false,msg:err.message});

 })

    }
 async function doCustomerFind(req,resp)
{
    await CustProfColRef.findOne({emailid:req.body.emailid}).then((doc)=>
{
    if(doc!=null)
    //  resp.status(200).json({status:true,msg:"Record updated ",doc:doc})
     resp.status(200).json({status:true,msg:"Record found ",doc:doc})
      else
         resp.status(200).json({status:false,msg:"Invalid id"})
    

}).catch((err)=>
{
    resp.status(200).json({status:false,msg:err.message});

})

}

 
 module.exports={doCustomerSignup,doCustomerUpdate,doCustomerFind}