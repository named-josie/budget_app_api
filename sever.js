//Dependencies
// const express = require("express");
const app = require('./app')

// const cors = require('cors');

require("dotenv").config();

//Port

const PORT = process.env.PORT || 3010;

//Middleware

// app.use(express.json()); // returns middleware that only parses JSON
// app.use(cors());
// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to Budget App Backend!");
// });

//Listen
app.listen(PORT, () => console.log("Listening on port:", PORT));