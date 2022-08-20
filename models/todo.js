const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    Description:{
        type:String
    },
    Category:{
        type:String
    },
    DDate:{
       type:Date
    }
});

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;