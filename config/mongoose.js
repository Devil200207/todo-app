// required library
const mongoose = require('mongoose');

// connect to database
mongoose.connect(process.env.DB_URL);

// accure the connection to check if it is succesfull
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db')); 

// up and running then print the message
db.once('open',function()
{
    console.log('succesfully connected to database');
})
