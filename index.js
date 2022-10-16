const express = require('express');
const { appendFile } = require('fs');

const App = express();

// creating middlewares-

const middleware1 = (req,res,next) => {
    console.log("My first middleware");
    next();
}

const middleware2 = (req,res,next) => {
    console.log("My second middleware");
    next();
}

// accessing all routes-
App.use(middleware1);

// making routes-

App.get( '/' , (req,res) => {
    res.send("<h1>First page</h1>");
} );

App.get( '/about' , (req,res) => {
    res.send("<h1>Second page</h1>");
} );

// accesing only 2 routes(contact,details)-

App.get( '/contact' , middleware2 , (req,res) => {
    res.send("<h1>Third page</h1>");
} );

App.get( '/details' , middleware2 , (req,res) => {
    res.send("<h1>Fourth page</h1>");
} );

App.listen(9000,() => {
    console.log("Server is created by Priyanshi Sharma");
})