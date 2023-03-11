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

//AZURE
app.use(express.static('../client/build/'));

// hello, world 👋
app.get('*', (request, response) => {
    response.sendFile(path.resolve('../client/build/index.html'));
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
        //Week.create(tempWeek1);
        //Week.create(tempWeek2);
    })
    .catch((error) => {
        console.error('database connection failed', error);
        console.error('program terminated');
    });

const tempWeek1 = {
    name: 'Week 1',
    is_master: false,
    is_last: false,
    student_id: '63ebc5878e74a2adcd75d336',
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
                    {
                        name: 'Repeat for the left lens.',
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
                        name: 'Record the results.',
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
                        name: 'Perform and record prescription transposition',
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
                        name: 'Calculate and record the spherical equivalence.',
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
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
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
                        ],
                    },
                    {
                        name: 'Practice hand hygiene.',
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
                        ],
                    },
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
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
                        ],
                    },
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
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
                        ],
                    },
                    {
                        name: 'Perform lensometry on the patients glasses and evaluate against the new prescription.',
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
                        ],
                    },
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
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
                        ],
                    },
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
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
                        ],
                    },
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
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
                        ],
                    },
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
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
                        ],
                    },
                    {
                        name: 'Process invoice, billing and payment in EMR.',
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
                        ],
                    },
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
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
                        ],
                    },
                ],
            },
            {
                name: 'Laboratory Skills',
                experiences: 2,
                skills: [
                    {
                        name: 'Address patient concerns with eyeglass fit.',
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
                        ],
                    },
                    {
                        name: 'Practice hand hygiene.',
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
                        ],
                    },
                    {
                        name: 'Adjust the temples to fit behind the patients ears properly.',
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
                        ],
                    },
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
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
                        ],
                    },
                    {
                        name: 'Clean the glasses and return them to the patient.',
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
                        ],
                    },
                    {
                        name: 'Determine if any further adjustments are required.',
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
                        ],
                    },
                ],
            },
        ],
    },
};

const tempWeek2 = {
    name: 'Week 2',
    is_master: false,
    is_last: false,
    student_id: '63ebc5878e74a2adcd75d336',
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
                        name: 'Place the right lens on the reading area of the auto-lensometer and read the lenses.',
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
                    {
                        name: 'Repeat for the left lens.',
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
                        name: 'Record the results.',
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
                        name: 'Perform and record prescription transposition',
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
                        name: 'Calculate and record the spherical equivalence.',
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
            {
                name: 'Eyeglass Fitting',
                experiences: 2,
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
                        ],
                    },
                    {
                        name: 'Practice hand hygiene.',
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
                        ],
                    },
                    {
                        name: "Ask the patient for their glasses if they wear them, as well as what they like and don't like about them.",
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
                        ],
                    },
                    {
                        name: 'Ask the patient for their glasses prescription if it was not already provided.',
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
                        ],
                    },
                    {
                        name: 'Perform lensometry on the patients glasses and evaluate against the new prescription.',
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
                        ],
                    },
                    {
                        name: "Assist with frame selection appropriate for the patient's prescription.",
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
                        ],
                    },
                    {
                        name: "Assist with lens selection appropriate for the patient's prescription.",
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
                        ],
                    },
                    {
                        name: 'Discuss and select the lens coating and a potential second pair of glasses.',
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
                        ],
                    },
                    {
                        name: 'Perform measurements for eyeglasses, including pupil distance, OC and vertex distance, as needed.',
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
                        ],
                    },
                    {
                        name: 'Process invoice, billing and payment in EMR.',
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
                        ],
                    },
                    {
                        name: 'Take payment and inform the patient of the delivery time for new glasses.',
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
                        ],
                    },
                ],
            },
            {
                name: 'Keratometry',
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
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
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
                        name: 'Align the outer canthus with the marker by moving the chin rest dial.',
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
                        name: "Align the target with the patient's eye.",
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
                        name: 'Instruct the patient to look ahead normally at the target (may be an image).',
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
                        name: 'Take at least three readings to determine an average. Record the results.',
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
                        name: 'Repeat for the other eye.',
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
                        name: 'Demonstrate proper cleaning and sterilization following the procedure.',
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
            {
                name: 'Slit Lamp',
                experiences: 1,
                skills: [
                    {
                        name: 'Greet and seat the patient.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Perform hand hygiene.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
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
                        ],
                    },
                    {
                        name: 'Disinfect the chin and forehead rests in front of the patient.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Complete and external examination of the patient, looking for any abnormalities of the external eye.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Move the table into place in front of the patient. Adjust the table as needed, and then lock it into position.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: "Instruct the patient to place their chin and forehead on the rests. Adjust the chin rest so that the patient's outer canthus is aligned with the marker on the head rest.",
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Set the magnification to a low setting (6x or 10x).',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: "Set the slit beam to view the patient's eye.",
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Unlock the base, and then turn on the power.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Instruct the patient to close their eyes while you focus your light and adjust it to the eyelid.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Instruct the patient to focus on your ear opposite the eye you are examining.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Evaluate the anterior segment in the following sequence: lid and lashes, conjunctiva, cornea and tear film, anterior chamber, iris and crystalline lens.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Repeat for the other eye.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Record the results.',
                        description: 'filler',
                        experiences: [
                            {
                                number: 1,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Laboratory Skills',
                experiences: 4,
                skills: [
                    {
                        name: 'Address patient concerns with eyeglass fit.',
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
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Practice hand hygiene.',
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
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Adjust the temples to fit behind the patients ears properly.',
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
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Adjust the nose pads to fit the patient properly.',
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
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Clean the glasses and return them to the patient.',
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
                            {
                                number: 4,
                                date: null,
                                student_checked: false,
                                preceptor_checked: false,
                            },
                        ],
                    },
                    {
                        name: 'Determine if any further adjustments are required.',
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
                            {
                                number: 4,
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
