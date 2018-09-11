var express = require('express');
var bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((docs) => {
        res.send({ docs });
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:todoId', (req, res) => {
    var todoId = req.params.todoId;

    if (!ObjectId.isValid(todoId)) {
        console.log('Todo Id not Valid');
        return res.status(404).send();
    }

    Todo.findById(todoId).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Server Started on port 3000');
});

module.exports = { app };
