var tailorController=require("../controllers/TailorController");
var app=require("express");
var {validateToken2}=require("../config/validatetoken");

var router=app.Router();
router.post("/tailorprofilesignup",validateToken2,tailorController.doTailorSignup);
router.post("/tailorprofilesearch",validateToken2,tailorController.doTailorSearch);
router.post("/tailorprofileupdate",validateToken2,tailorController.doTailorUpdate);
router.post("/getcities",validateToken2,tailorController.doSearchCity);
router.post("/getspeciality",validateToken2,tailorController.doSearchSpeciality);
router.post("/tailorfullrecord",validateToken2,tailorController.doFindFullRecord);
module.exports=router;