const zod = require('zod'); 

const userSchema = zod.object({ 

    fullname : zod.string(),     
    username : zod.string(),     
    email : zod.string().email(),     
    password : zod.string().min(6),     

})

const adminSchema = zod.object({

    fullname : zod.string(),     
    email : zod.string().email(),     
    username : zod.string(),     
    password : zod.string().min(6),          
})

const courseSchema = zod.object({

    courseName : zod.string(),   
    coursePrice : zod.number(),      
    courseDescription : zod.string(),        

})
module.exports = {

    userSchema : userSchema,     
    adminSchema : adminSchema,  
    courseSchema : courseSchema,     
    
}