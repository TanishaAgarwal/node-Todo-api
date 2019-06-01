const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongo server');
    }
    console.log('connected to mongo server');
    const db = client.db('TodoApp');

    db.collection('Users').find({
        name: 'Tani'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to connect to server', err);
    });

    db.collection('Users').find().count().then((count) => {
        console.log('Todos count : ', count);
    }, (err) => {
        console.log('unable to connect to server ', err);
    });
});