const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const ErrorHandler = require('./middleware/error');
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload({useTempFiles: true}));

// config
dotenv.config({
    path:".env"
})

// Route imports
const user = require('./routes/UserRoute');
const post = require('./routes/PostRoute');

app.use('/api/law',user)
app.use('/api/law',post)
// it's for errorHandeling
app.use(ErrorHandler)

module.exports = app;