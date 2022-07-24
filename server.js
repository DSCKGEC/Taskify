const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000

// ** Routes
const userRoutes = require('./src/routes/user-routes')

//**  Set Views
app.set('view engine', 'ejs')

const staticPath = path.join(__dirname, 'static');

app.use(express.static(staticPath))
// app.use('/user', userRoutes)
app.use('', userRoutes)

app.get('', function (req, res) {
    res.render("index")
});

// app.get('', function (req, res) {
//     res.render("dashboardd")
// });

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})