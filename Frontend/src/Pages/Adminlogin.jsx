import { useState } from "react";

export function Adminlogin () {

    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');    


    return (

        <>
    <input type="text" placeholder="Enter your username" onChange={ (e) => { setUsername(e.target.value)}}/> 
    <input type="password" placeholder="Enter your password" onChange={ (e)=> {setPassword(e.target.value)}} />  

    <button onClick={async () => {

        const responce = await fetch ('http://localhost:3068/krishwebsite/admin/login', {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            },   
            body : JSON.stringify({
                username : username,
                password : password , 
            })
        })
        const data = await responce.json(); 
        if (data.token) {
            localStorage.setItem('token', data.token); 
            alert('Login Successfull'); 
        }   
        else {
            alert('Invalid Credentials'); 
        }   
    }}>  Login </button>
        
        </>
    );
}