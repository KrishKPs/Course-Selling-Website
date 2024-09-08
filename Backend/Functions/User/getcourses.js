const { course } = require("../../db");

async function getcourse (req,res) {

      const allcourses = await course.find({});  

        res.json({
            allcourses
        })   ; 

}

module.exports = getcourse; 