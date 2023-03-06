/**
 * this module exports controller functions for the User resource
 */
import User from '../models/User.js';

export const getAllUsers = async (request, response, next) => {
    try {
        const allUsers = await User.find();
        response.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (request, response, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (request, response, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (request, response, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

export const getAllPreceptors = async (request, response, next) => {
    try {
        const preceptors = await User.find({ role: 'Preceptor' });
        return response.status(200).json(preceptors);
    } catch (error) {
        next(error);
    }
};
