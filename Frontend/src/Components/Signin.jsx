import { useState } from "react";

export function Signin () {

    const [username, setUsername] = useState("");    
    const [password, setPassword] = useState("");    


    return (

        <>
        
        <input type="text" placeholder="Enter your username" onChange={ (e) => {setUsername(e.target.value)}}/>  
        <input type="password" placeholder="Enter your password" onChange={ (e)=>{setPassword(e.target.value)}} />  

        <button onClick={ async () => {
            const response = await fetch("http://localhost:3068/krishwebsite/user/login", {

            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },   
            body : JSON.stringify({
                username : username,
                password : password
            }) 

            

            
            })
            const data = await response.json(); 
            if (data.token) {
                localStorage.setItem("token", data.token); 
                alert(data.msg);    
            }
            else {
                alert ("Invalid Inputs") 
            }
        }} >Signin</button>  
        
        </>
    );
}