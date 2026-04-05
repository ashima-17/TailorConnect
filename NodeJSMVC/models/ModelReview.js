let mongoose=require("mongoose");
let newCollection={
     contact: String,
    name:String,
    rating: Number,
    review: String,
}
var ver={versionkey:false,};
let SchemaClass=mongoose.Schema;
let collectionObj=new SchemaClass(newCollection,ver);
let ReviewColRef=mongoose.model("reviews",collectionObj);
module.exports=ReviewColRef