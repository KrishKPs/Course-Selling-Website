import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function CoursePage () {
    const {courseid} = useParams(); 
    const [data, setData] = useState({
        courseName: '',
        coursePrice: 0,
        courseDescription: '',
        courseDetails: {
            courseSyllabus: '',
            courseInstructor: '',
            courseDuration: '',
            courseLanguage: '',
            courseLevel: ''
        }
    });
    

    useEffect(() => {
        // Define an async function to handle the fetch call
        const fetchCourseData = async () => {
            try {
                const response = await fetch(`http://localhost:3068/krishwebsite/user/courseid/${courseid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${localStorage.getItem("token")}`
                    }
                });
                
                const result = await response.json();
                setData(result.course);
                console.log(result.course.courseDetails);
                console.log(result);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchCourseData();
    }, [courseid]);
    return (

        <>
        <h1> {data.courseName}</h1>
        <h2> {data.courseDetails.courseSyllabus}</h2>
        <button onClick={ async () => {

            const responce = await fetch(`http://localhost:3068/krishwebsite/user/enrollcourse/${courseid}`, {
                method : 'POST', 
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : `${localStorage.getItem('token')}`
                },  
                body : JSON.stringify({}) , 


            })
            .then((res) => res.json()) 
            .catch((err) => console.log(err));     
               console.log(responce);   
               alert(responce.msg);           
        }}> Enroll Now</button>     
        
        </>
    );
}