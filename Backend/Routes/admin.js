const express = require('express');  
const router = express.Router();      
const adminsignup = require('../Functions/Admin/signup');
const adminlogin = require('../Functions/Admin/login');
const adminauthenticate = require('../Functions/Authentication/adminathenticate');
const addcourse = require('../Functions/Admin/addcourse');

router.use(express.json()); 


router.post('/signup' , adminsignup ); 
router.post ('/login' , adminlogin); 
router.post ('/addcourse' , adminauthenticate , addcourse)


module.exports = router; 
