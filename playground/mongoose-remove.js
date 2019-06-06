const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoo');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5cf8e1bfd72275e4a469ce0f'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5cf8e1bfd72275e4a469ce0f').then((todo) => {
    console.log(todo);
});