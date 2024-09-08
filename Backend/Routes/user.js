const express = require('express');  
const router = express.Router();     
const signup = require('../Functions/User/signup');
const login = require('../Functions/User/login');
const userauthenticate = require('../Functions/Authentication/userathenticate');
const getcourse = require('../Functions/User/getcourses');
const purchasedcourse = require('../Functions/User/purchasecourse');
const findcourse = require('../Functions/User/findcourse');

router.use(express.json()); 


router.post('/signup' , signup); 
router.post('/login' , login); 
router.get('/allcourses'  ,userauthenticate, getcourse); 
router.post('/enrollcourse/:courseid' , userauthenticate, purchasedcourse); 
router.get('/courseid/:_id' , userauthenticate, findcourse); 


module.exports = router; 
