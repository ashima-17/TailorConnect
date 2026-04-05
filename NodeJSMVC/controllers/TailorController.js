var path = require("path");
var cloudinary = require("cloudinary").v2;
var TailProfColRef = require("../models/ModelTailor");
var RevColRef = require("../models/ModelReview");
var {genAi}=require("../config/genai");

cloudinary.config({
    cloud_name:'dmrvmcaz9',
    api_key:'429181772125419',
    api_secret:'o6Fs5UzeOPVZDUK3VJDpHrnFIqQ'
});
async  function doTailorSignup(req,resp)
 {

    let fileName="nopic.jpg";
     let fileName1="nopic.jpg";
       let fileName2="nopic.jpg"
    if(req.files!=null)
    {
    //  fileName=req.files.profilepic.name;
    //   fileName1=req.files.aadhaarFile.name
    // let uploadsFolderPath=path.join(__dirname,"..","uploads",fileName);
    //    let uploadsFolderPath1=path.join(__dirname,"..","uploads",fileName1);

    //   await req.files.profilepic.mv(uploadsFolderPath);
     
    // //****************Sending to cloudinary server******************* */
    //     await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
    //         var fileNameUrlOnServer=picUrlResult.url;   //will give u the url of ur pic on cloudinary server
    //        // console.log(fileNameUrlOnServer);
    //         fileName=fileNameUrlOnServer;
     if (req.files.profilepic) {
            fileName = req.files.profilepic.name;

            let uploadsFolderPath = path.join(__dirname, "..", "uploads", fileName);

           await   req.files.profilepic.mv(uploadsFolderPath);

            await cloudinary.uploader.upload(uploadsFolderPath).then(function (picUrlResult) {
                var fileNameUrlOnServer = picUrlResult.secure_url; 
                fileName = fileNameUrlOnServer;
            });
        }
         if (req.files.aadhaarFile) {
            fileName1 = req.files.aadhaarFile.name;

            let uploadsFolderPath1 = path.join(__dirname, "..", "uploads", fileName1);

            await  req.files.aadhaarFile.mv(uploadsFolderPath1);
             await cloudinary.uploader.upload(uploadsFolderPath1).then(  function (picUrlResult1) {
                var fileNameUrlOnServer = picUrlResult1.secure_url;
                fileName1 = fileNameUrlOnServer;
            

            });

    }
            
     if (req.files.aadhaarFileBack) {
            fileName2 = req.files.aadhaarFileBack.name;

            let uploadsFolderPath2 = path.join(__dirname, "..", "uploads", fileName2);

               await req.files.aadhaarFileBack.mv(uploadsFolderPath2);
             await cloudinary.uploader.upload(uploadsFolderPath2).then(  function (picUrlResult2) {
                var fileNameUrlOnServer = picUrlResult2.secure_url;
                fileName2 = fileNameUrlOnServer;
                  

            });

    }
            
   

}   
     
    
   
    
     

   
      req.body.since = Number(req.body.since);
    if (isNaN(req.body.since)) {
        return resp.status(400).json({ status: false, msg: "Enter valid year" });
    }
    
    
     req.body.dos=new Date().toString();
    req.body.picurl=fileName;
     req.body.picurl1=fileName1;
     req.body.picurl2=fileName2;
     

    let objTailProfColRef=new TailProfColRef(req.body);
    objTailProfColRef.save().then((doc)=>{
        console.log(doc)
        resp.status(200).json({status:true,msg:"record saved",doc:doc})

    }).catch((err)=>{
        resp.status(200).json({status:false,msg:err.message})
    })
}
   

    
    async function doTailorSearch(req,resp)
{
    await TailProfColRef.findOne({emailid:req.body.emailid}).then((doc)=>
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

//  async function doTailorUpdate(req,resp)
// {
    
//    let fileName="nopic.jpg";
//    let fileName1="nopic.jpg"
//        if(req.files&&req.files.profilepic)
//        {
//         fileName=req.files.profilepic.name;
//         // fileName1=req.files.aadhaarFile.name
//        let uploadsFolderPath=path.join(__dirname,"..","uploads",fileName);
//         // uploadsFolderPath=path.join(__dirname,"..","uploads",fileName1);
//       await req.files.profilepic.mv(uploadsFolderPath);
//         // req.files.aadhaarFile.mv(uploadsFolderPath);
//        //****************Sending to cloudinary server******************* */
//            await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
//                var fileNameUrlOnServer=picUrlResult.url;   //will give u the url of ur pic on cloudinary server
//               // console.log(fileNameUrlOnServer);
//                fileName=fileNameUrlOnServer;
//             //    fileName1=fileNameUrlOnServer;
//                  req.body.picurl=fileName;
//                 //  req.body.picurl1=fileName1;
               
//          });
//          console.log(" profile pic File uploaded succeswsfully");

   
//      }
//       if(req.files&&req.files.aadhaarFile)
//        {
       
//          fileName1=req.files.aadhaarFile.name
      
//            let uploadsFolderPath1=path.join(__dirname,"..","uploads",fileName1);
       
//        await  req.files.aadhaarFile.mv(uploadsFolderPath1);
//        //****************Sending to cloudinary server******************* */
//            await cloudinary.uploader.upload(uploadsFolderPath1).then(function(picUrlResult1){
//                var fileNameUrlOnServer=picUrlResult1.url;   //will give u the url of ur pic on cloudinary server
//               // console.log(fileNameUrlOnServer);
               
//                 fileName1=fileNameUrlOnServer;
                
//                   req.body.picurl1=fileName1;
               
//          });
//          console.log(" Aadhaar File uploaded succeswsfully");
//        }
//       await TailProfColRef.findOneAndUpdate({emailid:req.body.emailid},{$set:req.body}).then((doc)=>
//     {
//         resp.status(200).json({status:true,msg:"Record updated",doc:doc})
       
//      }).catch((err)=>
//     {
//       resp.status(200).json({status:false,msg:err.message});
   
//     })
   

// }


async function doTailorUpdate(req, resp) {
    // console.log("Update hit ✅");
    
    let fileName="nopic.jpg";
     let fileName1="nopic.jpg"
     let fileName2="nopic.jpg"
    if (req.files && req.files.profilepic) {
         fileName = req.files.profilepic.name;
        let uploadsFolderPath = path.join(__dirname, "..", "uploads", fileName);
        await req.files.profilepic.mv(uploadsFolderPath);  
        await cloudinary.uploader.upload(uploadsFolderPath).then(function (picUrlResult) {
            var fileNameUrlOnServer = picUrlResult.secure_url;  
            fileName = fileNameUrlOnServer;
            req.body.picurl = fileName;
        });
        console.log("Profile pic updated successfully");
    }

    
    if (req.files && req.files.aadhaarFile) {
         fileName1 = req.files.aadhaarFile.name;
        let uploadsFolderPath1 = path.join(__dirname, "..", "uploads", fileName1);
        await req.files.aadhaarFile.mv(uploadsFolderPath1);  
        await cloudinary.uploader.upload(uploadsFolderPath1).then(function (picUrlResult1) {
            var fileNameUrlOnServer = picUrlResult1.secure_url;  
            fileName1 = fileNameUrlOnServer;
            req.body.picurl1 = fileName1;
        });
        console.log("Aadhaar file  front updated successfully");
    }
    if (req.files && req.files.aadhaarFileBack) {
         fileName2 = req.files.aadhaarFileBack.name;
        let uploadsFolderPath2 = path.join(__dirname, "..", "uploads", fileName2);
        await req.files.aadhaarFileBack.mv(uploadsFolderPath2);  
        await cloudinary.uploader.upload(uploadsFolderPath2).then(function (picUrlResult2) {
            var fileNameUrlOnServer = picUrlResult2.secure_url;  
            fileName2 = fileNameUrlOnServer;
            req.body.picurl2 = fileName2;
        });
        console.log("Aadhaar file Back updated successfully");
    }

    await TailProfColRef.findOneAndUpdate({ emailid: req.body.emailid }, { $set: req.body }).then((doc) => {
        resp.status(200).json({ status: true, msg: "Record updated", doc: doc })
    }).catch((err) => {
        resp.status(200).json({ status: false, msg: err.message });
    })
}
// -----------------------------------------------------------
// async function doTailorUpdate(req,resp)
// {
//     let profilepic="nopic.jpg";
//     let aadhaarFile="nopic.jpg";

//     if(req.files!=null)
//     {
//         if(req.files.profilepic)
//         {
//             profilepic=req.files.profilepic.name;
//             let uploadsFolderPath=path.join(__dirname,"..","uploads",profilepic);
//             req.files.profilepic.mv(uploadsFolderPath);

//             await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
//                 profilepic=picUrlResult.url;
//                 req.body.profilepic=profilepic;   // 🔥 MAIN FIX
//             });
//         }

//         if(req.files.aadhaarFile)
//         {
//             aadhaarFile=req.files.aadhaarFile.name;
//             let uploadsFolderPath=path.join(__dirname,"..","uploads",aadhaarFile);
//             req.files.aadhaarFile.mv(uploadsFolderPath);

//             await cloudinary.uploader.upload(uploadsFolderPath).then(function(picUrlResult){
//                 aadhaarFile=picUrlResult.url;
//                 req.body.aadhaarFile=aadhaarFile;   // 🔥 MAIN FIX
//             });
//         }
//     }

//     await TailProfColRef.findOneAndUpdate(
//         {emailid:req.body.emailid},
//         {$set:req.body}
//     ).then((doc)=>
//     {
//         resp.status(200).json({status:true,msg:"Record updated",doc:doc})
//     }).catch((err)=>
//     {
//         resp.status(200).json({status:false,msg:err.message});
//     })
// }
// -------------------------------------------
async function doSearchCity(req,resp)
{
     const cities = await TailProfColRef.distinct("shopCity", { shopCity: { $ne: "" } });
   resp.status(200).json({ status: true, cities:cities });


}
async function doSearchSpeciality(req,resp)
{
   
  await TailProfColRef.distinct("speciality", { category: req.body.category }).then((doc) => {
    if (doc != null) {
      resp.status(200).json({ status: true, speciality: doc });
    } else {
      resp.status(200).json({ status: false });
    }
  }).catch((err) => {
    resp.status(200).json({ status: false, msg: err.message });
  });
}
// async function doFindFullRecord(req,resp)
// {
//     await TailProfColRef.find( {shopCity:req.body.shopCity,category:req.body.category,speciality:req.body.speciality}).then((doc)=>
//     {
//         if(doc.length>0)
//              {
//             let tailorsWithRating = [];

//             for (let i = 0; i < doc.length; i++)
//             {
//                 const reviews = await revcolref.find({ contactno: doc[i].contactno });

//                 let avgRating = "No ratings yet";
//                 if (reviews.length > 0)
//                 {
//                     const total = reviews.reduce((sum, rev) => sum + rev.rating, 0);
//                     avgRating = (total / reviews.length).toFixed(1);
//                 }

//                 tailorsWithRating.push({ ...doc[i].toObject(), avgRating });
//             }
//         }
//         //  resp.status(200).json({status:true,msg:"Record updated ",doc:doc})
//          resp.status(200).json({status:true, msg:"Record Found✅", doc:doc})
//           else
//              resp.status(200).json({status:false,msg:"Record doesn't found❌"});
        
    
//     }).catch((err)=>
//     {
//         resp.status(200).json({status:false,msg:err.message});
    
//     })

// }
async function doFindFullRecord(req, resp)
{
    await TailProfColRef.find({ shopCity: req.body.shopCity, category: req.body.category, speciality: req.body.speciality }).then(async (doc) =>
    {
        if (doc.length > 0)
        {
            let tailorsWithRating = [];

            for (let i = 0; i < doc.length; i++)
            {
                const reviews = await RevColRef.find({ contact: doc[i].contact });

                let avgRating = "No ratings yet";
                if (reviews.length > 0)
                {
                    const total = reviews.reduce((sum, rev) => sum + rev.rating, 0);
                    avgRating = (total / reviews.length).toFixed(1);
                }

               tailorsWithRating.push({ ...doc[i].toObject(), avgRating });
            }

            resp.status(200).json({ status: true, msg: "Record Found✅", doc: tailorsWithRating });
        }
        else
        {
            resp.status(200).json({ status: false, msg: "Record doesn't found❌" });
        }

    }).catch((err) =>
    {
        resp.status(200).json({ status: false, msg: err.message });
    });
}
  









module.exports = { doTailorSignup,doTailorSearch,doTailorUpdate,doSearchCity,doSearchSpeciality,doFindFullRecord};
