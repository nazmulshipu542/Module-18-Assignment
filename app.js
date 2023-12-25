const express = require('express');
const app = new express();
const router = require('./src/Routes/api');
const bodyParser = require('body-parser');

// Security Middleware Library Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());

// Request Rate Limit
const limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

// MongoDB Database Connection
let OPTION={user:'',pass:''};
mongoose.connect(URL, OPTION, (error)=>{
    console.log("Connection success");
    console.log(error);
});

// Routing Implement
app.use('/api', router);

// Undefined Route Implement
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
});
