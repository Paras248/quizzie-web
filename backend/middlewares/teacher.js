const BigPromise = require("./BigPromise");
const CustomError = require("../utils/CustomError");
const jwt = require("jsonwebtoken");
const Teacher = require("../models/teacher");

exports.teacherIsLoggedIn = BigPromise(async (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");

    if (!token) {
        return next(new CustomError("Please login first to access this page", 400));
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.teacher = await Teacher.findById(decoded.id);
    next();
});
