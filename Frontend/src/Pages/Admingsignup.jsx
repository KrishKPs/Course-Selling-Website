import { useState } from "react";

export function AdminSignup () {
    const [name, setName] = useState('');    
    const [email, setEmail] = useState('');  
    const [username, setUsername] = useState('');        
    const [password, setPassword] = useState('');    


    return (

        <>
        
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} />  
        <input type="text" placeholder="Enter your email" onChange={ (e)=>{setEmail(e.target.value)}} />  
        <input type="text" placeholder="Enter your username" onChange={ (e)=>{setUsername(e.target.value)}} /> 
        <input type="password" placeholder="Enter your password" onChange={ (e)=>{setPassword(e.target.value)}} /> 


        <button onClick={ async () => {

          const responce =  await fetch ('http://localhost:3068/krishwebsite/admin/signup',{
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    fullname : name,
                    username : username,
                    email : email,
                    password : password
                })
            })
            .then((res) => res.json()) 
            console.log(responce)
            alert(responce.msg); 
        }}> Signup </button> 

        </>
    ) ;
}