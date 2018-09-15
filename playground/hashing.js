const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc123';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$KNbIRq76ObTGdqHN0CemE.vnG4W/vl2REZrLyuzUG9HiUY1SmGrQ6';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

/* 
var data = {
    id: 5,
};

var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded' + decoded);

var message = "I am user number 11";
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 2,
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log('Data was not change!');    
} else {
    console.log('Data was changed. Do not trust!');
} */