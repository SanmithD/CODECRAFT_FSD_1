import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    role: {
        type: String,
        enum: ["admin","user"],
        default: "user"
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},{ timestamps: true });

export const userModel = mongoose.model('User', userSchema);