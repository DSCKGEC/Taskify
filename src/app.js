const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
require("dotenv").config();
require("../src/db/conn");
const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;


app.use("/static", express.static(static_path));
app.use(express.json());
app.use(urlencoded({ extended: false }));


app.set("view engine", "ejs");
app.set("views", views_path);

app.get("/", (req, res) => {
    res.status(200).render("index.ejs");
});

app.get("/signup", (req, res) => {
    res.status(200).render("signup.ejs");
});

// In Future this dashboard will be rendered after authentication of users 
app.get("/dashboard", (req, res) => {
    res.status(200).render("dashboard/dashboard.ejs");
});




//* listen
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});