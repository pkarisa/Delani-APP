//imports of the packages to be used-first step
const express =require('express');
const mongoose =require('mongoose')

//connect app to mongodb
const connectionString ='mongodb://localhost:27017';
//create an express app(third step)
const app =express();

app.get('/',function(req,res){
    res.send('hello world/ may node start')
    })
    app.listen(3000);
    console.log('server is running')