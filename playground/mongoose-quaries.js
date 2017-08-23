const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectId} = require('mongodb');

const {User} = require('./../server/models/user');


// var id  = '599dd088988a5f39681c7d5d11';
// if (!ObjectId.isValid(id)){
//     console.log('ID is not Valid');
// }

// Todo.find({
//     _id: id
// }).then( (todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then( (todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then( (todos) => {
//     if (!todos){
//         return console.log('ID not found');
//     }
//     console.log('Todos by ID', todos);
// }).catch((e) => console.log(e));

var userId = '599c8b6273142119102d6c16';

User.findById(userId).then((user) => {
    if (!user){
        return console.log('The user not found');
    }
    console.log('User: ', user);
}, (e)=>{
    console.log(e);
}).catch((e) => console.log(e));

