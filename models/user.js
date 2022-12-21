const { Schema, model } = require('mongoose');
const Thought = require('./thought');


const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            vaildate: true

        },
        thoughts: {
            type: Number,
            _id:  [{ref: 'thought'}]
        },
        friends: {
            type: Number,
            _id: [{ref:'user'}]
        }
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;