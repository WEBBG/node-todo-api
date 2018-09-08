//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');


    /* db.collection('Todos').findOneAndUpdate({ 
        _id: new ObjectID('5b9304927017ce3e485910f3')
    }, {
        $set: {
            completed: true,
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }); */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b90dcc6f7f39e2a00b4847d')
    }, {
            $set: {
                name: 'Artur Quintas',
                location: 'Braga - Portugal'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        });

    //client.close();
});