import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import ResetCode from '../models/ResetCode.js';
import nodemailer from 'nodemailer';

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
            return res.status(401).send('Login unsuccessful. Please double check the email or password and try again.');
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json('Login unsuccessful. Please double check the email or password and try again.');
        }
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },

            process.env.SECRET,
            { expiresIn: '5h' }
        );
        return res.status(200).json({ result: existingUser, token: token });
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
            return res.status(401).json('User already exists'); // hello
        }
        if (password !== confirmPassword) {
            return res.status(401).json('passwords do not match');
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
        return res.status(200).json({ result: userProfile, token: token });
    } catch (error) {
        next(error);
    }
};

export const sendEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        // Create date object as current date + 20 minutes
        const date = new Date();
        const expiryDate = date.getTime() + (20 * 60 * 1000);

        const existingUser = await User.findOne({
            email: email,
        });

        if (!existingUser) {
            return res.status(401).json(null);
        }

        const resetCode = await ResetCode.create({
            email: email,
            expiryDate: expiryDate
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
            to: "CompetencyTrackingTool@outlook.com", // Change to email variable
            subject: "Reset Password",
            text: "http://localhost:3000/reset/" + resetCode._id,
        });
        return res.status(200).json({ result: resetCode});
    } catch (error) {
        next(error);
    }
};

export const getCode = async (req, res, next) => {
    try {
        const { id } = req.body;
        const resetCode = await ResetCode.findOne({
            _id: id,
        });
        const currentDate = new Date();         
        // Check the expiry date
        if(currentDate > resetCode.expiryDate) {
            return res.status(401).json(null);
        } else {
        }
        return res.status(200).json({ resetCode });
    } catch (error) {
        next(error);
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        const {
            email,
            password,
            confirmPassword,
        } = req.body;

        if (password !== confirmPassword) {
            return res.status(401).json('Passwords do not match');
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const filter = { email: email };
        const update = { password: hashedPassword }; // Can replace with normal password for testing
        const existingUser = await User.findOneAndUpdate( filter, update, {
            returnOriginal: false
        });

        if (!existingUser) {
            return res.status(401).json('Internal system error');
        }

        return res.status(200).json({ result: existingUser });
    } catch (error) {
        next(error);
    }
}
