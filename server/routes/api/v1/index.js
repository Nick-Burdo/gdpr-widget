const express = require('express');
const router = express.Router();
const passport = require('passport');
const signUp = require('./auth/signUp');
const login = require('./auth/login');

/* User login. */
router.post('/login', login);

/* Sign up new user. */
router.post('/sign-up', signUp);

module.exports = router;