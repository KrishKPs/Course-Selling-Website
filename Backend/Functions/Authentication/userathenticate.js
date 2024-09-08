const jwt = require('jsonwebtoken');     
const {JWT_PASS} = require('../../config');  
const jwtpass = JWT_PASS;    

async function userauthenticate (req,res, next) {  

    const token = req.headers.authorization; 

    if (!token) {
        return res.status(400).json({msg: "Token not found"});
    }        

    try {
        const decode = jwt.verify(token, jwtpass);
        req.username = decode.username;    
        next();  

    } catch (error) {
        console.error(error); // Log the error for more details
        return res.status(400).json({ msg: "Invalid Token", error: error.message });
    }
         
 }

 module.exports = userauthenticate;      