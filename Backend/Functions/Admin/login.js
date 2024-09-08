const { admin } = require("../../db");
const generatejwt = require("../Authentication/generatejwt");

async function adminlogin (req,res) {

    const person = req.body;
    
    const adminexist  = await admin.findOne({  username: person.username  }) 

    if (!adminexist) {
        return res.status(400).json({msg: "Admin does not exist"});
    }    

    if (adminexist.password !== person.password) {
        return res.status(400).json({msg: "Invalid Password"});
    }        

    const token =  generatejwt(person);      

    res.json({
        msg : "Login Successful",
        token : token 
    })       


}

module.exports = adminlogin;     


