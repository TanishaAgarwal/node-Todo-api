const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongo server');
    }
    console.log('connected to mongo server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5cf24bbbabf36941b5284d32")
    },{
        $set: {
            name: 'Priyanshu'
        },
        $inc: {
            age: -7
        }
    }, {
        returnOriginal: false
    }).then((result) => {
            console.log(result);
        });

});