const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'cooked food'
});

var secondTodo = new Todo({
    text: 'platform projects',
    completed: true,
    completedAt: 28
});

newTodo.save().then((result) => {
    console.log('saved todo ', result);
}, (e) => {
    console.log('unable to save todo');
});

secondTodo.save().then((result) => {
    console.log('saved todo ', result);
}, (e) => {
    console.log('unable to save todo');
});