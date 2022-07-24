const express = require('express')
const router = new express.Router();

//** Login Route */
router.get('/login', (req, res) => {
    // res.send('This is the Login Page')
    res.status(200).render("login")
})
//** SignUp Route */
router.get('/signup', (req, res) => {
    // res.send('This is the Sign Up Page')
    res.status(200).render("signup")
})
//**DashBoard Route */
router.get('/signup/dashboardd', (req, res) => {
    res.status(200).render("dashboardd")
})

router.get('/dashboardd', (req, res) => {
    res.status(200).render("dashboardd")
})


module.exports = router;