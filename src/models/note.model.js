import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {

        Title: {
            type: String,
        },
        Descreption: {
            type: String,
        },
        color: {
            type: String,
        },
        isArchived: {
            type: Boolean,
        },
        isDeleted: {
            type: Boolean,
        },
        UserID: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default model('Notes', userSchema);
