const express = require('express');  
const app = express();   
const port = 3068;  
const cors = require('cors'); 
app.use(cors()); 
app.use(express.json()); 
const db = require('./db'); 

const mainRoutes = require('./Routes/index');   


app.use ('/krishwebsite' , mainRoutes);   






app.listen (port, () => {console.log(`Server is running on port ${port}`)});     