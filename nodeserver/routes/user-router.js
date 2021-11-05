const express = require('express');

const router = express.Router();

const usercontrol = require('../controllers/userController');

router.post('/createuser', usercontrol.createUser);
router.get('/users', usercontrol.getUsers);
router.post('/login', usercontrol.loginUser);


module.exports = router;
