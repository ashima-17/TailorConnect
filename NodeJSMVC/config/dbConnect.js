let mongoose=require("mongoose");
function connectToMongoDB()
{
    
    //    let url="mongodb://localhost:27017/2026jan";
       let url="mongodb+srv://AshimaArora:Admin123@cluster0.m0t966e.mongodb.net/2026jan";

    mongoose.connect(url).then(()=>
    {
        console.log("Connected to MongoDB");
    }).catch((err)=>
    {
        console.log(err);

    })
}
module.exports={connectToMongoDB}