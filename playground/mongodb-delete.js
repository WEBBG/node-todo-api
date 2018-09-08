//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    /* db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todos');
    }); */

    /* db.collection('Todos').deleteOne({ text: 'Start new job in october 1' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todo');
    }); */

    /* db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete todo');
    }); */

    db.collection('Users').deleteMany({name: 'Maria Garcia'});

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b90dc8e96a82b205ceb2d5c')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});