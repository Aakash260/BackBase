const jwt=require('jsonwebtoken')
const User=require('../models/UserSchema.js')
const Authenticate=async(req,res,next)=>{
try {
    const token=req.cookies.user;
    const verifytoken=jwt.verify(token,process.env.VITE_SECRET_KEY)
    const rootuser=await User.findOne({_id:verifytoken._id,"tokens.token":token})
    
    if(!rootuser){
        throw new Error('User not Found')
    }

    req.token=token;
    req.rootuser=rootuser;
    req.userId=rootuser._id;
    next()
} catch (error) {
    res.status(401).send('Unauthorized token')
}
}

module.exports=Authenticate