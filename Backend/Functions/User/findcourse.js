const { course } = require("../../db");

async function findcourse (req,res) {

    const _id = req.params._id;
    const courseexist = await course.findOne({ _id: _id });   
    
    if (!courseexist) {
        return res.status(400).json({msg: "Course does not exist"});
    }   

    res.json({
        msg : "Course Found",
        course : courseexist
    })       


}
module.exports = findcourse; 
