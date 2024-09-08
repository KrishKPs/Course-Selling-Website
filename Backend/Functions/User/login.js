const { user } = require("../../db");
const generatejwt = require("../Authentication/generatejwt");


async function login (req,res) {

     const person = req.body;    

     const userexist  = await user.findOne({  username : person.username  })

        if (!userexist) {
            return res.status(400).json({msg: "User does not exist"});
        }    

        if (userexist.password !== person.password) {
            return res.status(400).json({msg: "Invalid Password"});
        }   
        
      const token =  generatejwt(person);

        res.json({
            msg : "Login Successful",
            token : token 
        })   


}
module.exports = login;  
