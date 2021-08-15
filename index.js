const express = require('express');
const app = express();

const port = 700;

app.get('/' , function(req , res){
    return res.end("<h1>server is runnuing</h1>");
});

//http://localhost:64008/?code=9962b4c8d2cafed18154&state=d98254d47e0744feb2944fef19794a58
app.listen(port , function(err){
    if(err){
        console.log(`error in loading express server ${err}`);
    }
    console.log(`express server is up and running on port :${port}`);
});