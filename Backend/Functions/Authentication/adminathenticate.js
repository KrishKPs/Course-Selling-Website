const jwt = require('jsonwebtoken');     
const {JWT_PASS} = require('../../config');  

jwtpass = JWT_PASS;  

async function adminauthenticate (req,res, next) {


       const token = req.headers.authorization; 

       if (!token) {
           return res.status(400).json({msg: "Token not found"});
       }  
       
       try {
        const decode = jwt.verify(token, jwtpass);
        req.username = decode.username;    
        next();  
            

       } catch (error) {
    
            return res.status(400).json({msg: "Invalid Token"});
          
       } 
         

        
         
     
}

module.exports = adminauthenticate;  