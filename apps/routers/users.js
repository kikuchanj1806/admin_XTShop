const express = require('express');
const router = express.Router();

const authenController = require('../controllers/authenController');

router.post("/register", authenController.registerUser);
router.post("/login", authenController.login);

module.exports = router;