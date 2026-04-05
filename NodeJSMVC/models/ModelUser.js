let mongoose=require("mongoose");
let colDesign={
    emailid:{type:String,required:true,index:true,unique:true},
    password:String,
    userType:String,
    //   status:boolean
     dos:String,
}
var ver={versionkey:false,};
let SchemaClass=mongoose.Schema;
let collectionObj=new SchemaClass(colDesign,ver);
let UserColRef=mongoose.model("users",collectionObj);
module.exports=UserColRef