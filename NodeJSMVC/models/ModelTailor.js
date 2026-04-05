let mongoose=require("mongoose");
let collection={
    emailid:{type:String,required:true,index:true,unique:true},
    name:String,
    contact:String,
    address:String,
    city:String,
    aadhaarNo:String,
     category:String,
     speciality:String,
     website:String,
     since:Number,
     workType:String,
     shopAddress:String,
     shopCity:String,
     otherInfo:String,
    picurl:String,
     picurl1:String, 
     picurl2:String,   
}
var ver={versionkey:false,};
let SchemaClass=mongoose.Schema;
let collectionObj=new SchemaClass(collection,ver);
let TailProfColRef=mongoose.model("tailProfiles",collectionObj);
module.exports=TailProfColRef