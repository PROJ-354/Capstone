import mongoose from 'mongoose';

const WeekSchema = mongoose.Schema(
    {
        //The name of the week, e.g. Week 3
        name: {
            type: String,
            required: true,
        },
        //If this week is a "master" week
        is_master: {
            type: Boolean,
            required: true,
            default: false,
        },
        //The ID of the student this week belongs to
        student_id: {
            type: String,
            default: null,
        },
        //The ID of the preceptor who will be grading/providing feedback on this week
        preceptor_id: {
            type: String,
            default: null,
        },
        //The ID of the instructor who created/assigned this week
        //Otherwise, the ID of the instructor who will be grading this week
        instructor_id: {
            type: String,
            default: null,
        },
        //Equivalent form: Skills assessment form
        skills_assessment: {
            //Array of the different section in this week's assessment, excluding the workplace expectations section
            section: [
                {
                    //The name of the section, e.g. Lensometry
                    name: {
                        type: String,
                        required: true,
                    },
                    //How many experiences are needed per-task in this section
                    experiences: {
                        type: Number,
                        required: true,
                        min: 1,
                        max: 3,
                    },
                    //Array of the required skills in this section
                    skills: [
                        {
                            //The name of the skill
                            name: {
                                type: String,
                                required: true,
                            },
                            //A description of the skill
                            description: {
                                type: String,
                                required: true,
                            },
                            //Array of the different experiences for this skill
                            experiences: [
                                {
                                    //The number of this experience, e.g. first experience = 1
                                    number: {
                                        type: Number,
                                        required: true,
                                    },
                                    //The date of this experience
                                    date: {
                                        type: Date,
                                        required: true,
                                        default: null,
                                    },
                                    //If the student checked off that this skill was completed
                                    student_checked: {
                                        type: Boolean,
                                        required: true,
                                        default: false,
                                    },
                                    //If the preceptor checked off that this skill was completed
                                    preceptor_checked: {
                                        type: Boolean,
                                        required: true,
                                        default: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            workplace_expectations: [{}],
        },
    },
    { timestamps: true }
);

export default Week = mongoose.model('Week', WeekSchema);
