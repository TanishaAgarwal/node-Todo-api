const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoo');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '5cf76b8f4aa99f15500a8856';

// if(!ObjectID.isValid(id)){
//      console.log('invalid id');
// }

Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('invalid id');
    }
    console.log(todo);
}).catch((e) => {
    console.log(e);
});

User.findById('5cf3640ece9eb65de1c20d23').then((user) => {
    if(!user){
        return console.log('invalid id');
    }
    console.log(user);
}).catch((e) => {
    console.log(e);
});