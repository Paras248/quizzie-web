// package imports
require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// file imports
const teacher = require("./routes/teacher");
const test = require("./routes/test");

// express middlewares

app.use(
    cors({
        withCredentials: true,
        credentials: "include",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

// custom middlewares
app.use("/api", teacher);
app.use("/api", test);

module.exports = app;
