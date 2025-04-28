import jwt from "jsonwebtoken"

export const adminAuth=(req,res,next)=>{
    const token=req.cookies.adminToken;

    if(!token){
        return res.status(403).json({ message: ' Unauthorized: No token provided ' });
    }

    jwt.verify(token,'your_jwt_secret_key',(err,decoded)=>{
        if(err){
            return res.status(403).json({ message:' Unauthorized:Inavlid token '})
        }

        req.adminEmail=decoded.email;
        next();
    })
}