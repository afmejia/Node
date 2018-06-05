console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Felipe'));

var filteredArray = _.uniq(['Mike',1, 1, 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.add(3, 5);
// console.log(res);

// var user = os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

// We can use template strings
// fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes.age}` );
