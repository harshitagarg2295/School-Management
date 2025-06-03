
const express = require('express');
const path = require('path');
const { title } = require('process');


const mongoose = require('mongoose')

const Teacher = require('./models/Teacher') //imported schema

const app = express();
const port = 3005;

// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory
app.set("views", path.join(__dirname, "templates"));

//Serve static files (CSS, images, JS, etc.) from public folder
app.use(express.static("public"));

// Serve index.html from templates
// app.get('/', (req, res) => {
//     res.sendFile('templates/index.html', { root: __dirname });
// });


// // Route to render index.ejs
app.get("/", (req, res) => {
    res.render("index");  // This will render templates/index.ejs
});

// Route to render school.ejs
app.get("/school.html", (req, res) => {
    res.render("school");
});

// Route to render mission.ejs
app.get("/mission.html", (req, res) => {
    res.render("mission");
});

// Route to render management.ejs
app.get("/management.html", (req, res) => {
    res.render("management");
});

// Route to render rules.ejs
app.get("/rules.html", (req, res) => {
    res.render("rules");
});

app.get("/academics.html", (req, res) => {
    res.render("academics");
});

app.get("/non-academics.html", (req, res) => {
    res.render("non-academics");
});

app.get("/admission.html", (req, res) => {
    res.render("admission");
});

app.get("/admin.html", (req, res) => {
    res.render("admin",{title : 'Login : Admin',login:'Admin Login'});
});

app.get("/teacher.html", (req, res) => {
    res.render("admin",{title : 'Login : Teacher',login:'Teacher Login'});
});

app.get("/student.html", (req, res) => {
    res.render("admin",{title : 'Login : Student',login:'Student Login'});
});

app.get("/contactUs.html", (req, res) => {
    res.render("contactUs");
});

app.get("/adminDashboard.html", (req, res) => {
    res.render("adminDashboard");
});


// MongoDB connect

mongoose.connect('mongodb://localhost:27017/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

app.get("/teach-menu", async (req, res) => {
  const teachers = await Teacher.find(); // all teachers
  res.render("teachers", { teachers });
});

app.post("/add-teacher", async (req, res) => { //add teacher
  const teacher = new Teacher({
    name: req.body.name,
    subject: req.body.subject,
    class: req.body.class,
    address: req.body.address,
    phone: req.body.phone
  });
  await teacher.save();
  res.redirect("/teach-menu"); // ya jaha dikhana hai
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});