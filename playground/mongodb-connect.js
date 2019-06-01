//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongo server');
    }
    console.log('connected to mongo server');
    const db = client.db('TodoApp');

    


    //client.close();






    /*db.collection('Todos').insertOne({
        text: 'Something to do yeahh',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('unable to connect to todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Tanisha',
        age: 19,
        location: 'Hoshiarpur'
    }, (err, result) => {
        if(err){
            return console.log('unable to connect to todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/

    

});