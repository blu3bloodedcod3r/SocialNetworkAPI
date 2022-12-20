const { Schema, model} = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema( 
    {
        thoughtText: {
            type: String,
            required: true,
            validate: {
                min: 1,
                max: 280
            }
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamps: {createdAt: true},
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

module.exports = thoughtSchema;