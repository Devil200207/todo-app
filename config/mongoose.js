// required library
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb+srv://chinmay:chinmay@cluster0.ywncej6.mongodb.net/?retryWrites=true&w=majority');

// accure the connection to check if it is succesfull
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db')); 

// up and running then print the message
db.once('open',function()
{
    console.log('succesfully connected to database');
})
