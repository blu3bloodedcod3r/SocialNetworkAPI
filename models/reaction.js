const { ObjectId } = require("bson");
const { model, Schema } = require("mongoose");

const reactionsSchema = new Schema(
    {
        readtionId: {
            type: ObjectId,
            default: new ObjectId
        }
    },
    {
        reactionBody: {
            type: String,
            required: true,
            validate: { max: 280}
        }
    },
    { userName: {
            type: String,
            required: true,
            ref: [userSchema]
        }
    },
    {    createdAt: {
            type: Date,
            defaut: Date.now,
            
        }
    }
)

model.exports = reactionsSchema;