const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

//router object
const  router =express.Router();

//routes
//POST || LOGIN USER
router.post('/api/v1/login',loginController )

//POST || REGISTER USER
router.post('/api/v1/register',registerController )

module.exports=router