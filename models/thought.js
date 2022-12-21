const { Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');
const User = require('./user');

const thoughtSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamps: true,
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          getters: true,
        },
    }
);

const Thought = model('thought', thoughtSchema)

module.exports = Thought;