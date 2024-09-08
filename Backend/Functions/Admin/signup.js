const { admin } = require("../../db");
const { adminSchema } = require("../../type");


async function adminsignup(req,res){

  const person = req.body;   
    const safePerson =  adminSchema.safeParse(person);  
    
    if (!safePerson.success) { 
        return res.status(400).json({msg: "Invalid Inputs"}); 
    }    

    await admin.create({
        fullname : person.fullname,
        email : person.email,
        username : person.username,
        password : person.password,
    })   

    res.json({
        msg : "Admin Created"
    })       
}

module.exports = adminsignup; 