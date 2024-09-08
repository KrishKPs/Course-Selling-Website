const express = require('express');  
const routers = express.Router();     
const userroutes = require('./user');    
const adminroutes = require('./admin'); 

routers.use('/user', userroutes);     
routers.use('/admin', adminroutes);   


module.exports = routers;     

