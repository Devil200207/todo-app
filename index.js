const express = require('express');

const app = express();

const port  = 8000;

app.listen(port,function(err)
{
    if(err)
    {
        console.lof(`error in running the server: ${err}`);
    }

    console.log(`server is running on port: ${port}`);
});