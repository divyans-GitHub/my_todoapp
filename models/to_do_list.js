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
    dueDate:{
        type: Date,
        required: true
    }
});

// defining collection 
const ToDoList = mongoose.model('ToDoList' ,toDoSchema );
// first thing is name of collection in DB and second one is name of schema


module.exports = ToDoList;
