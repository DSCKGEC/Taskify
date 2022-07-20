const express = require('express')
const router = new express.Router();

//** Login Route */
router.get('/login', (req, res) => {
    res.send('This is the Login Page')
})
//** SignUp Route */
router.get('/signup', (req, res) => {
    res.send('This is the Sign Up Page')
})
//**DashBoard Route */
router.get('/dashboard', (req, res) => {
    res.send('This is the dashboard Page')
})
module.exports = router;