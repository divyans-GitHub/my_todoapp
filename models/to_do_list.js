// requiring mongoose to create schema
const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: date,
        required: true
    }
});

// defining collection 
const ToDoList = mongoose.model('to_do_list' ,toDoSchema );

module.exports = ToDoList;
