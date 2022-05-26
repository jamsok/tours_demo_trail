const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./Route/tourRouter");
const userRouter = require("./Route/userRouter");

const app = express();
app.use(express.static(`${__dirname}/public`));
app.use(express.json()); //middleware to read json

// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
// }
app.use(morgan("dev")); //logger middleware

//ROUTES
app.use("/tours", tourRouter);
app.use("/user", userRouter);

module.exports = app;
