import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Reset from '../models/Reset.js';
import nodemailer from 'nodemailer';

export const login = async (req, res, next) => {
    try {
        console.log(req.body); // checking to see if req body is null
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(500).json('User does not exist');
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(500).json('password is not valid');
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },

            process.env.SECRET,
            { expiresIn: '5h' }
        );
        res.status(200).json({ result: existingUser, token: token });
    } catch (error) {
        next(error);
    }
};

export const register = async (req, res, next) => {
    try {
        const {
            role,
            sait_id,
            firstName,
            lastName,
            secretCode,
            email,
            password,
            confirmPassword,
        } = req.body;

        const existingUser = await User.findOne({
            email: email,
        });
        if (existingUser) {
            res.status(500).json('User already exists'); // hello
        }
        if (password !== confirmPassword) {
            res.status(500).json('passwords do not match');
        }

        //code for validating access code for students and preceptors here

        const hashedPassword = await bcrypt.hash(password, 12);

        const userProfile = await User.create({
            role: role,
            sait_id: role !== 'preceptor' ? sait_id : 'not assigned',
            /**if a student registering then saitid exists, if preceptor saitid field is not assigned */
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { email: email, id: userProfile._id },
            process.env.SECRET,
            { expiresIn: '5h' }
        );
        res.status(200).json({ result: userProfile, token: token });
    } catch (error) {
        next(error);
    }
};

export const sendEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        // Create date object as current date + 1 hour
        const date = new Date(Date.now() + 1);

        const existingUser = await User.findOne({
            email: email,
        });

        if (!existingUser) {
            return res.status(200).json('Email does not match our records');
        }

        const resetCode = await Reset.create({
            email: email,
            expiryDate: date
        });

        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: "CompetencyTrackingTool@outlook.com",
                pass: "_6B$9wrmnZNgGBh",
            },
        });

        const info = await transporter.sendMail({
            from: "CompetencyTrackingTool@outlook.com",
            to: "ryan.p.delorme@gmail.com", // Change to email variable
            subject: "Reset Password",
            text: "localhost:42069/reset/:" + resetCode._id,
        });
        res.status(200).json({ result: resetCode});
    } catch (error) {
        next(error);
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        const {
            email,
            password,
            confirmPassword,
        } = req.body;

        const existingUser = await User.findOne({
            email: email,
        });
        if (!existingUser) {
            return res.status(500).json('Email does not match records');
        }
        if (password !== confirmPassword) {
            return res.status(200).json('passwords do not match');
        }

        //code for validating access code for students and preceptors here

        const hashedPassword = await bcrypt.hash(password, 12);

        existingUser.set

        const userProfile = await User.create({
            role: role,
            sait_id: role !== 'preceptor' ? sait_id : 'not assigned',
            /**if a student registering then saitid exists, if preceptor saitid field is not assigned */
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { email: email, id: userProfile._id },
            process.env.SECRET,
            { expiresIn: '5h' }
        );
        res.status(200).json({ result: userProfile, token: token });
    } catch (error) {
        next(error);
    }
}
