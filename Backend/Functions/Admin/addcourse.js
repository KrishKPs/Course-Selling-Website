const { course } = require("../../db");
const { courseSchema } = require("../../type");

async function addcourse(req,res){

    const cource = req.body ; 

    const safecourse = courseSchema.safeParse(cource); 
    
    if (!safecourse.success) { 
        return res.status(400).json({msg: "Please enter valid course details"});      
    }

    await course.create({

        courseName : cource.courseName,    
        coursePrice : cource.coursePrice, 
        courseDescription : cource.courseDescription,     
        courseDetails : {

            courseSyllabus : cource.courseDetails.courseSyllabus,   
            courseInstructor : cource.courseDetails.courseInstructor, 

            courseDuration : cource.courseDetails.courseDuration,  
            courseLanguage : cource.courseDetails.courseLanguage,         
            courseLevel : cource.courseDetails.courseLevel,  
             
           courseRequirnments : cource.courseDetails.courseRequirnments,   

        }

    })

    res.json({
        msg : "Course Added"
    }) 
    }


    module.exports = addcourse;  
