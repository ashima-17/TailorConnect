// var path=require("path");
 var ReviewColRef=require("../models/ModelReview");
 var TailProfColRef = require("../models/ModelTailor");
 

function doSaveReview(req,resp)
{
    // req.body.dos=new Date().toString();
     
    let objReviewColRef=new ReviewColRef(req.body);
objReviewColRef.save().then((doc)=>
{
    console.log(doc);
     resp.status(200).json({status:true,msg:"review saved",doc:doc})
}).catch((err)=>
{
    resp.status(200).json({status:false,msg:err.message});

})
    
}
     
      

 async function doSearchTailor(req,resp)
{
    await TailProfColRef.findOne( {contact:req.body.contact}).then((doc)=>
{
    if(doc!=null)
    //  resp.status(200).json({status:true,msg:"Record updated ",doc:doc})
     resp.status(200).json({status:true, msg:"Tailor Found✔", name:doc.name})
      else
         resp.status(200).json({status:false,msg:"Tailor doesn't found❌"})
    

}).catch((err)=>
{
    resp.status(200).json({status:false,msg:err.message});

})

}
module.exports={doSaveReview,doSearchTailor}