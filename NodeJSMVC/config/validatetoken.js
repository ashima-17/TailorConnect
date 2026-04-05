var jwt=require("jsonwebtoken");
function validateToken2(req,resp,next)
{
    console.log("*****");
    const full_token=req.headers['authorization'];
    console.log(full_token);
    var ary=full_token.split(" ");
    let actualToken=ary[1];
    let TokenValidObj;
    console.log(process.env.sec_key);
    try
    {
        TokenValidObj=jwt.verify(actualToken,process.env.sec_key);
        console.log(TokenValidObj);
        if(TokenValidObj!=null)
        {
            const payload=jwt.decode(ary[1]);
            console.log(payload);
            next();
        }
    
    else
    
        resp.json({status:false,msg:"Invalid Token"});
}
catch(err)
{
    resp.json({status:false,msg:err.message});
    return;
}
}
module.exports={validateToken2}