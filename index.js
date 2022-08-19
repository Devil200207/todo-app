// express seted up
const express = require('express');

// app set
const app = express();

// setting port on which server will run
const port  = 8000;

// using routes to direct url
app.use('/',require('./routes'));

// setting ejs as view engine
app.set('view engine','ejs');

// setting views directory for view
app.set('views','./views');

app.listen(port,function(err)
{
    if(err)
    {
        console.lof(`error in running the server: ${err}`);
    }

    console.log(`server is running on port: ${port}`);
});