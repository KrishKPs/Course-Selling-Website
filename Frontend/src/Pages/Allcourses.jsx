import { useEffect, useState } from "react";
import { Coursecard } from "../Components/Coursecard";


export function Allcourses () { 

    const [courses , setCourses] = useState([]);     

    console.log(courses); 

     useEffect(() => {
         
        const token = localStorage.getItem("token"); 
        fetch('http://localhost:3068/krishwebsite/user/allcourses' , {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json', 
                'Authorization' : `${token}`  
            } 

        })  
        
        .then((res) => res.json()) 
        .then((data) => {
            console.log(data); 
            console.log(token); 
            setCourses(data.allcourses);    

        })    
     },[]);  


     
     

    return (
        <>
        <div className="rounded-none mt-3 grid grid-cols-2 gap-3">


    {courses.map( (course , index) => (<Coursecard key={index} course={course} />))} 
        </div>
        </>
    );   
 }   

