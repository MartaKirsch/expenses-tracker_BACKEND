const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.register);

router.post('/checkIfUsernameExists', userController.checkIfUsernameExists);

router.post('/checkIfEmailIsUsed', userController.checkIfEmailIsUsed);

router.post('/checkLogInData', userController.checkLogInData);

router.post('/load', userController.load);


router.get('/isLoggedIn', userController.isLoggedIn);
router.get('/logOut', userController.logOut);

module.exports = router;
