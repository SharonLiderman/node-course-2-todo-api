//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to mongo db server');
    } 
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Users').deleteMany({name: 'Sharon'}).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // })

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID("599b5dc6ea18d33e60419487") }).then((res) => {
    //     console.log(res);
    // });

    //db.close();
    
});