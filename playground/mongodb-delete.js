const {MongoClient, ObjectID} = require('mongodb');
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('unable to connect to mongo server');
    }
    console.log('connected to mongo server');
    const db = client.db('TodoApp');

    //deleteMany
    //db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
       // console.log(result);
    //});
    //deleteOne
    //db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //   console.log(result);
   // });
    //findOneAndDelete
    db.collection('Users').findOneAndDelete( {_id: new ObjectID("5cf178aea75ff42f61fde0cb")}).then((result) => {
        console.log(result);
   });

});