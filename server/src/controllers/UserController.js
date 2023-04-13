/**
 * this module exports controller functions for the User resource
 */
import User from '../models/User.js';

export const getAllUsers = async (request, response, next) => {
    try {
        const allUsers = await User.find();

        return response.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (request, response, next) => {
    try {
        const { id } = request.params;
        const user = await User.findOne({ _id: id });
        if (!user) {
            return response
                .status(500)
                .json({ error: 'The provided ID does not match any users.' });
        }
        return response.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const getUserByEmail = async (request, response, next) => {
    try {
        const { email } = request.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return response
                .status(500)
                .json({ error: 'The provided email does not match any users.' });
        }
        return response.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const updateUserEmail = async (request, response, next) => {
    try {
        const { id, newEmail } = request.body;
        const filter = { _id: id };
        const update = { email: newEmail };
        const user = await User.findOneAndUpdate(filter, update, {
            returnOriginal: false,
        });
        if (!user) {
            return response
                .status(500)
                .json({ error: 'User could not be found; unable to update email.' });
        }
        return response.status(200).json({ success: 'Email updated!' });
    } catch (error) {
        next(error);
    }
};

export const getAllPreceptors = async (request, response, next) => {
    try {
        const preceptors = await User.find({ role: 'preceptor' });
        return response.status(200).json(preceptors);
    } catch (error) {
        next(error);
    }
};
