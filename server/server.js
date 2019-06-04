const bodyParser = require('body-parser');
const express = require('express');

const {mongoose} = require('./db/mongoo');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
       res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });  
});
app.listen(3000, () => {
    console.log('server is running on port 3000');
});