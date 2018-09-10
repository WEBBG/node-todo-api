const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b9594aea317bf251cce32f2';
var userId = '5b9452351452552cf4420082';

if (!ObjectId.isValid(id)) {
    console.log('Todo Id not Valid');
}

if (!ObjectId.isValid(userId)) {
    console.log('User Id not Valid');
}


/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        console.log('Id not found');
    }
    console.log('Todo by Id: ', todo);
}).catch((e) => console.log(e)); */

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

