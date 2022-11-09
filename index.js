require('dotenv').config();

// express seted up

const express = require('express');

// connecting to database
const db = require('./config/mongoose');

// using schema of todo
const Todo = require('./models/todo')

// app set
const app = express();

// setting path
const path = require('path');

// setting port on which server will run
const port  = process.env.PORT;

app.use(express.static('assest'));

// setting ejs as view engine
app.set('view engine','ejs');

// setting views directory for view
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

app.post('/create-task',function(req,res)
{
   Todo.create({
      Description: req.body.Description,
    Category:req.body.Category,
    DDate:req.body.DDate
   },function(err,newTodo)
   {
     if(err)
     {
        console.log(`error in making new todo: ${err}`);
        return;
     }
        res.redirect('back');
   });
});

app.get('/',function(req,res)
{
   Todo.find({},function(err,task)
   {
      if(err)
      {
         console.log(`error in fetching data from data base: ${err}`)
         return;
      }
      
      return res.render('home',{
         title:"Todo list",
         task: task
      });

   });
});

app.get('/delete-but',function(req,res)
{ 
   let id = req.query.id;
   Todo.findByIdAndDelete(id,function(err)
   {
      if(err)
      {
         console.log(`error in deleting task: ${err}`);
         return;
      }

      return res.redirect('back');
   });
});


app.listen(port,function(err)
{
    if(err)
    {
        console.lof(`error in running the server: ${err}`);
    }

    console.log(`server is running on port: ${port}`);
});