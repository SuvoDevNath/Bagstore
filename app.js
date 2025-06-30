const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
// const expressSession=require("express-flash");

//chatgpt
const session = require("express-session");

//chatgpt
const flash=require("connect-flash");

// const userModel = require("./models/user-model");
// const productModel = require("./models/product-model");

require('dotenv').config();


const ownersRouter=require("./routes/ownersRouter")
// const bcrypt = require("bcrypt");
const productsRouter=require("./routes/productsRouter")
const usersRouter=require("./routes/usersRouter");
const indexRouter=require("./routes/index");


const db =require('./config/mongoose-connection')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "your_jwt_secret_key_here",  // hardcoded secret string
  })
);

app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


// ------Main Route--------
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);



app.listen(3000);