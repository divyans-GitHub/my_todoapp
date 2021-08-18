const express = require('express');
const app = express();

const port = 7001;


const db = require('./config/mongoose');

const ToDoList = require('./models/to_do_list');




app.set('view engine' , 'ejs');
app.set('views' , './views');

// middle ware for static files rendering
app.use(express.static('assets'));

//middleware for parsing Form;s data
app.use(express.urlencoded());


app.post('/add-to-do-task' , function(req , res){
   //console.log(req.body);
  ToDoList.create({
     description: req.body.description,
     category:req.body.category,
     dueDate:req.body.dueDate
    } , function(err , newList ){
      if(err){
          console.log("error in adding data to DataBase");
          return;
      }
      console.log("new to-do List is created" , newList);
     return res.redirect('back');
  });


});

app.get('/' , function(req , res){
   
    return res.render('home' ,{});
    // return res.end("<h1>server is runnuing</h1>");
});


app.listen(port , function(err){
    if(err){
        console.log(`error in loading express server ${err}`);
    }
    console.log(`express server is up and running on port :${port}`);
});