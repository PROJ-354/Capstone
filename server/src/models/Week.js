import mongoose from 'mongoose';

/**
 * Model for a Week in the practicum
 * Replaces the Skills Assessment form and the Self-Reflection form
 *
 * If this week is a "master" week, meaning it can be copied from, is_master
 * will be set to true
 *
 * When a week is being assigned, the corresponding master week will be duplicated
 * and any empty information will be filled in
 */
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
        //If this week is the last week in the practicum
        is_last: {
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
                        max: 4,
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
            //An array of the workplace expectations part of the Skills Assessment form
            workplace_expectations: [
                {
                    //The name of the expectation, e.g. Punctuality
                    name: {
                        type: String,
                        required: true,
                    },
                    //A description of the expectation, e.g. Ready to start on time
                    description: {
                        type: String,
                        required: true,
                    },
                    //The mark the preceptor gave from 1-4 where 1 is never and 4 is always
                    mark: {
                        type: Number,
                        min: 1,
                        max: 4,
                    },
                },
            ],
            //Comments/feedback the preceptor has left
            preceptor_feedback: {
                type: String,
            },
        },
        //Equivalent form: Self-Relfection
        self_reflection: {
            //If applicable, the student's plan to complete any outstanding competencies
            plan_to_complete_outstanding_competencies: {
                type: String,
            },
            //If applicable, if the student cannot complete the outstanding competencies, what is their plan to demonstrate that they are proficient in them
            how_to_demonstrate_if_no_completed: {
                type: String,
            },
            //Which procedures did the student experience in the most recent week
            which_procedures_experienced: {
                type: String,
            },
            //What were the student's strengths and challenges related to these experiences
            strengths_challenges: {
                type: String,
            },
            //What lessons did the student learn from their most recent experiences
            lessons_learned: {
                type: String,
            },
        },
    },
    { timestamps: true }
);

export default Week = mongoose.model('Week', WeekSchema);
