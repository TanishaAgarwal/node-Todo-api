const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        require: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


var todo = new Todo({
    text: "  the the  "
});

todo.save().then((res) => {
    console.log(res);
}, (e) => {
    console.log(e);
});


var Users = mongoose.model('Users', {
    email:{
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

var person = new Users({
    email: "tanisjajnnnfs"
});

person.save().then((res) => {
    console.log(res);
}, (e) => {
    console.log(e);
});

/*var newTodo = new Todo({
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
});*/