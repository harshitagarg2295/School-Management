// insert-data.js
const mongoose = require("mongoose");
const Teacher = require("./models/Teacher");

mongoose.connect("mongodb://localhost:27017/schoolDB")
  .then(async () => {
    await Teacher.insertMany([
      {
        name: "Harshita Garg",
        subject: "Science",
        class: "7,8",
        address: "Madhopura goli no. 6",
        phone: "9826230803"
      },
      {
        name: "Neha Sharma",
        subject: "Maths",
        class: "6,7",
        address: "Ram Nagar Colony",
        phone: "9876543210"
      },
      {
        name: "Neha Sharma",
        subject: "Maths",
        class: "6,7",
        address: "Ram Nagar Colony",
        phone: "9876543210"
      },
      {
        name: "Divya Sharma",
        subject: "Maths",
        class: "4,5",
        address: "Vijay Nagar Colony",
        phone: "9876543210"
      }
    ]);
    console.log("Data inserted");
    process.exit();
  });
