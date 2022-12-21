const { model, Schema } = require("mongoose");
const User = require('./user');

const reactionSchema = new Schema(
    {
        readtionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        }
    },
    {
        reactionBody: {
            type: String,
            required: true,
            validate: { max: 280 }
        }
    },
    { userName: {
            type: String,
            required: true
        }
    },
    {    createdAt: {
            type: Date,
            defaut: Date.now,
        }
    }
)

model.exports = reactionSchema;