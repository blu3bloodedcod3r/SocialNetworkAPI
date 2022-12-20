const { Schema, model} = require('mongoose');
const thoughtSchema = require('./thought');


const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            typre: String,
            required: true,
            unique: true,
            vaildate: true

        },
        thoughts: {
            type: String,
            _id:  [{ref: thoughtSchema}]
        },
        friends: {
            type: String,
            _id: [{reference:'user'}]
        }
    }
);

const User = model('user', userSchema);

module.exports = User;