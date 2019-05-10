const express = require('express');
const app = express();
const path = require('path');
const dateformat = require('dateformat')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/formatted',function(req,res){
    res.write(dateformat(new Date(),req.param('format').toString()))
    res.end()    
})

app.get('/datetime',function(req,res){
    res.write(dateformat(new Date(),'dd-mmm-yyyy hh:MM:ss TT'))
    res.end()
})

app.get('/date',function(req,res){
    res.write(dateformat(new Date(),'dd-mmm-yyyy'))
    res.end()
})

app.get('/time',function(req,res){
    res.write(dateformat(new Date(),'hh:MM:ss TT'))
    res.end()
})
app.listen(process.env.PORT || 4000, function(port){
    if(process.env.PORT == undefined){
        console.log("Your node js server is running on Port no : 4000");
    }else{
        console.log(`Your node js server is running on Port no : ${process.env.PORT}`);
    }
});