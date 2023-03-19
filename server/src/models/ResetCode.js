/**
 * Represents a model for password reset code, 
 * associated with an email.
 */
import mongoose from 'mongoose';

const ResetCodeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'an email is required']
    },
    expiryDate: {
        type: Date,
        required: [true, 'a date is required']
    }
}, { timestamps: true });

export default mongoose.model('ResetCode', ResetCodeSchema);
