/**
 * this module declares a mongoose schematic of a User and,
 * exports a mongoose model of a User
 */
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'a first name is required']
    },

    lastName: {
        type: String,
        required: [true, 'a last name is required']
    },

    email: {
        type: String,
        required: [true, 'an email name is required']
    },

    password: {
        type: String,
        required: [true, 'a password is required']
    },

    role: {
        type: String,
        required: [true, 'a role  is required'] // todo: validate roles
    },

    sait_id: {
        type: String,
        required: [true, 'a sait is required']
    }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
