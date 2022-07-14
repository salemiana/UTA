const { Schema, Types } = require('mongoose');
const noteSchema = new Schema(
    {
        noteId: {
            default: new Types.ObjectId(),
        },
        noteText: {
            type: String,
            trim: true,
            required: 'noteText is required'
        }
    }
)

module.exports = noteSchema;