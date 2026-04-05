var customerController=require("../controllers/CustomerController");
var app=require("express");
var {validateToken2}=require("../config/validatetoken");
var router=app.Router();
router.post("/customerprofilesignup",validateToken2,customerController.doCustomerSignup);
router.post("/customerprofileupdate",validateToken2,customerController.doCustomerUpdate);
router.post("/customerprofilesearch",validateToken2,customerController.doCustomerFind);
module.exports=router;