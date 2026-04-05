var reviewController=require("../controllers/ReviewController");
var {validateToken2}=require("../config/validatetoken");
var app=require("express");
var router=app.Router();
router.post("/tailorreview",validateToken2,reviewController.doSaveReview);
 router.post("/tailornamesearch",validateToken2,reviewController.doSearchTailor);
module.exports=router;