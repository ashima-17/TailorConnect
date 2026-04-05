var userController=require("../controllers/signlogController");
var app=require("express");
var router=app.Router();
router.post("/signup",userController.doSignup);
router.post("/login",userController.doLogin);
module.exports=router;