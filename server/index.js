/**
 * this module is the entry point of the application
 */
// import libraries
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Week from './src/models/Week.js';

// import middleware
import errorHandler from './src/middleware/errorHandler.js';

// configure environemnt variables
dotenv.config({ path: './.env' });

// import routers
import weekRoutes from './src/routes/weekRoutes.js';
import UserRouter from './src/routes/UserRouter.js';
import authRouter from './src/routes/authRouter.js';
import preceptorRoutes from './src/routes/PreceptorRoutes.js';
import scheduleRouter from './src/routes/scheduleRouter.js';

// create an instance of express (i think)
const app = express();

// initialize middleware
app.use(express.json()); // enables express to parse json payloads
app.use(cors()); // enables cross origin requests

// initialize routers
// app.use(yourRouterHere);
app.use('/api/weeks', weekRoutes);
app.use(UserRouter);
app.use(authRouter);
app.use('/preceptor', preceptorRoutes);
app.use(scheduleRouter);

// initialize error handling middleware
app.use(errorHandler);

// hello, world 👋
app.get('/', (request, response) => {
    response.status(200).json({
        message: 'a poison to erase my existance!',
    });
});

// 🐸
mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGOOSE_URI)
    .then((connection) => {
        app.listen(process.env.PORT, () => {
            console.log('database connection successful!');
            console.log(`listening @ http://localhost:${process.env.PORT}!`);
        });
        //Week.create(tempWeek);
    })
    .catch((error) => {
        console.error('database connection failed', error);
        console.error('program terminated');
    });

const tempWeek = {
    name: 'Week 1',
    is_master: false,
    is_last: false,
    student_id: null,
    preceptor_id: null,
    instructor_id: null,
    skills_assessment: {
        section: [
            {
                name: 'Lensometry',
                experiences: 3,
                skills: [
                    {
                        name: 'Explain the procedure to the patient.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Ask the patient for their glasses if they wear them.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Place the right lens on the reading area of the lensometer and read the lenses.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'If the glasses are progressive or bifocal, read the lenses accordingly.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 2,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                            {
                                number: 3,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
