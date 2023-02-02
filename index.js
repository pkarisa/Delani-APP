//imports of the packages to be used
const express =require('express');
const mongoose =require('mongoose')

//create an express app
const app =express();

app.get('/',function(req,res){
    res.send('hello world/ may node start')
    })
    app.listen(3000);