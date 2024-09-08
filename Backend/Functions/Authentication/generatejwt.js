
const jwt = require('jsonwebtoken');     
const { JWT_PASS } = require('../../config');    

const jwtpass = JWT_PASS; 

function generatejwt(person){

    return jwt.sign({username : person.username}, jwtpass);    
}

module.exports = generatejwt;    
