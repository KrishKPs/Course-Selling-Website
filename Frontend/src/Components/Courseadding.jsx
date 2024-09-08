import { useState } from "react";

export function Courseadding () {

    const [name, setName] = useState('');    
    const [description, setDescription] = useState('');      
    const [price, setPrice] = useState('');      
    const [syllabus, setSyllabus] = useState('');        
    const [instructor, setInstructor] = useState('');    
    const [duration, setDuration] = useState('');    
    const [level, setLevel] = useState('');  
    const [language, setLanguage] = useState('');    
    const [requirnment, setRequirnment] = useState('');     

    return (
        <>
        
        <h1>Add New Courses  </h1>

        <input type="text" placeholder="Enter Course Name" onChange={(e)=>{setName(e.target.value)}} />    
        <input type="text" placeholder="Enter Course Description" onChange={(e)=>{setDescription(e.target.value)}} />    
        <input type="text" placeholder="Enter Course Price" onChange={(e)=>{setPrice(e.target.value)}}/> 

        <h2> Enter Additional Details </h2>  

        <input type="text" placeholder="Enter Course Syllabus" onChange={(e)=>{setSyllabus(e.target.value)}}/> 
        <input type="text" placeholder="Enter Course Instructor"onChange={(e)=>{setInstructor(e.target.value)}} />  
        <input type="text" placeholder="Enter Course Duration" onChange={(e)=>{setDuration(e.target.value)}}/>  
        <input type="text" placeholder="Enter Course Level"onChange={(e)=>{setLevel(e.target.value)}} />    
        <input type="text" placeholder="Enter Course Language" onChange={(e)=>{setLanguage(e.target.value)}}/>   
        <input type="text" placeholder="Enter Course Requirnment"onChange={(e)=>{setRequirnment(e.target.value)}} /> 


        <button onClick={async () => {

            const responce = await fetch ('http://localhost:3068/krishwebsite/admin/addcourse', {
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `${localStorage.getItem('token')}`    
                },
                body : JSON.stringify({
                    courseName : name,
                    coursePrice : Number(price),
                    courseDescription : description,
                    courseDetails : {
                        courseSyllabus : syllabus,
                        courseInstructor : instructor,
                        courseDuration : duration,
                        courseLanguage : language,
                        courseLevel : level,
                        courseRequirnments : requirnment
                    }
                })
            })

            .then((res) => res.json())   
            console.log(responce)    
            alert(responce.msg)
            .catch ((err) => console.log(err));  
        }}>  Add Course </button>

        </>
    );
}