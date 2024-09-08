const { user, course } = require("../../db");

async function purchasedcourse (req,res) {


     const courseid = req.params.courseid; 
        const username = req.username;   

        const coursedetails = await course.findOne({ _id : courseid });
        if (!coursedetails) { 
            return res.status(400).json({msg: "Course does not exist"});     
         }


        const purchasecourse = await user.updateOne ({username : username},
            
            { "$push" :
            
            {purchasedCourses: {
                    courseName : coursedetails.courseName,  
                    coursePrice : coursedetails.coursePrice,     
                    courseDescription : coursedetails.courseDescription,    
            } 
        
        } });  
        
        res.json({
            msg : "Course Purchased", 
            purchase : purchasecourse 
        })       ; 

}

module.exports = purchasedcourse; 
