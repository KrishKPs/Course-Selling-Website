const { user } = require("../../db");
const { userSchema } = require("../../type");

async function signup (req,res) {

     const person = req.body; 
     const safePerson =  userSchema.safeParse(person);  
     
     if (!safePerson.success) { 
         return res.status(400).json({msg: "Invalid Inputs"}); 
     }

     await user.create({

        fullname : person.fullname,
        username : person.username,
        email : person.email,
        password : person.password,
        purchasedCourses : [], 

     })

     res.json ({
        msg : "User Created"     
     })

}

module.exports = signup; 