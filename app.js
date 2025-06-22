const express = require("express");
const app = express();
const userModel = require("./models/user-model");
const productModel = require("./models/product-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ownersRouter=require("./routes/ownersRouter")
const usersRouter=require("./routes/usersRouter")
const productsRouter=require("./routes/productsRouter")

const db =require('./config/mongoose-connection')
 
const cookieParser = require("cookie-parser");
const path = require("path");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


// ------Main Route--------
app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);




app.listen(3000);