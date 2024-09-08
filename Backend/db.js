const mongoose = require('mongoose');    
const { MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL)
.then(() => console.log('Connected to MongoDB'))     
.catch(err => console.error('Could not connect to MongoDB'));    

const userSchema = new mongoose.Schema({   
     
    fullname : String,   
    username : String,   
    email : String,  
    password : String,  
    purchasedCourses : [{

        courseName : String,     
        coursePrice : Number,        

    }],    

 })

 const adminSchema = new mongoose.Schema({   
    fullname : String, 
    email : String,  
    username : String,   
    password : String,   

 })

 const courseSchema = new mongoose.Schema({   
    courseName : String, 
    coursePrice : Number,   
    courseDescription : String,  
    courseDetails : {

        courseSyllabus : String,     
        courseInstructor : String,   
        courseDuration : String,     
        courseLanguage : String,    
        courseLevel : String,    
        courseRequirements : String,     
    } 

 })      

 const user = mongoose.model('User', userSchema);     
 const admin = mongoose.model('Admin', adminSchema);  
 const course = mongoose.model('Course', courseSchema);  


 module.exports = {
    
    user: user,
    admin : admin , 
    course : course,      

}; 