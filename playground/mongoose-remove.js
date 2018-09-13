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

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

/* Todo.findOneAndRemove({ _id: '5b99f9f90ea8c708cc5b0561' }).then((todo) => {
    console.log(todo);
}).catch((e) => {
    console.log(e);
}); */

Todo.findByIdAndRemove('5b99f9920ea8c708cc5b0560').then((todo) => {
    console.log(todo);
}).catch((e) => {
    console.log(e);
});


