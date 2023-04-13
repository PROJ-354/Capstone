/**
 * this module declares a mongoose schematic of a Schedule and,
 * exports a mongoose model of a Schedule
 *
 * upon schedule creation
 *  > a schedule can only be created once a student is created
 *  > a schedule's student_id attribute gets set to student
 *  > 8 objects are created in the *weeks* attribute
 *
 * PUT
 *  > students can preform PUT requests to modify their scheduled & actual hours
 *  > preceptors can preform PUT requests to modify a student scheduled & actual hours
 *  > an admin can preform PUT requests to modify anything
 *
 * GET:
 *  > a student should be able to GET their schedule
 *  > a preceptor should be able to GET schedules that they are associated with
 *  > an instructor should be able to GET schedules that they are associated with
 *  > an admin should be able to GET any schedule
 */
import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
    /**
     * an array of week objects...
     * 8 weeks should be created once this model is created. either in the controller or in a mongoose middleware (schema.post)
     * indexes: 0-7 ...
     */
    weeks: [
        {
            sunday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            monday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            tuesday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            wednesday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            thursday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            friday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },
            saturday: {
                scheduledHours: { type: Number, default: 0 },
                actualHours: { type: Number, default: 0 },
            },

            total_scheduled_hours: { type: Number, default: 0 }, // the sum of all schedueled hours in *this* week
            total_actual_hours: { type: Number, default: 0 }, // the sum of all actual     hours in *this* week
        },
    ],

    // metadata :o
    is_approved: { type: Boolean, default: false }, // flag that the preceptor (or admin) can set
    is_sumbitted: { type: Boolean, default: false }, // flag that (presumably) gets checked by the student
    total_scheduled_hours: { type: Number, default: 0 }, // the sum of all scheduled hours in all the weeks
    total_actual_hours: { type: Number, default: 0 }, // the sum of all actual    hours in all the weeks
    due_date: { type: Date, required: false },

    // relationships
    student_email: { type: String, required: false },
    student_id: { type: String, required: false }, // the student that this schedule belongs to
    preceptor_id: { type: String, required: false }, // the preceptor that is in charge of approving this schedule
    instructor_id: { type: String, required: false }, // i dont know if this should be here
});

export default mongoose.model('Schedule', ScheduleSchema);
