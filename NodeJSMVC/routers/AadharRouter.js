// var genai=require("../config/genai");
var aadhaarController=require("../controllers/AadhaarController")
var app=require("express");
var router=app.Router();
router.post("/extractaadhaarfront",aadhaarController.doExtractAadharFront);
router.post("/extractaadhaarback",aadhaarController.doExtractAadharBack);
module.exports=router;