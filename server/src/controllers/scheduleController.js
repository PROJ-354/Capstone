import e from 'express';
import Schedule from '../models/Schedule.js';
import User from '../models/User.js';

// this controller returns a schedule object with a specified studentEmail in the request parameters
export const getScheduleByStudentId = async (request, response, next) => {
    try {
        const schedule = await Schedule.findOne({
            student_email: request.params.studentEmail,
        });
        return response.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
};

// this controller updates a specific week in a specfified Schedule
export const updateWeek = async (request, response, next) => {
    try {
        // get relevant data
        const studentEmail = request.params.studentEmail;
        // console.log(studentEmail)
        const weekData = request.body.weeks;
        const weekNumber = request.body.weekNumber;

        // find the schedule linked to the authenticated user
        const schedule = await Schedule.findOne({ student_email: studentEmail });

        // update a specified week in the schedule with the new week data
        schedule.weeks[weekNumber] = weekData;

        // // update the scheule in the database
        const updatedSchedule = await Schedule.findOneAndUpdate(
            { student_email: studentEmail },
            schedule
        );

        // wow! a response!
        return response
            .status(200)
            .json({ message: `successfully updated week number ${weekNumber + 1}` });
    } catch (error) {
        next(error);
    }
};

//
export const sumbitSchedule = async (request, response, next) => {
    try {
        // get relevant data
        const studentEmail = request.params.studentEmail;

        const schedule = await Schedule.findOneAndUpdate(
            { student_email: studentEmail },
            { is_sumbitted: true }
        );

        response.status(200).json({ message: 'successfully sumbitted the schedule!' });
    } catch (error) {
        next(error);
    }
};

// preceptors can unsubmit
export const unsumbitSchedule = async (request, response, next) => {
    try {
        // get relevant data
        const studentEmail = request.params.studentEmail;

        // TODO: prevent unsumbissions if
        // a. it is already sumbitted
        // b. it is passed a due date
        const schedule = await Schedule.findOne(
            { student_email: studentEmail },
            { is_sumbitted: false }
        );

        response.status(200).json({ message: 'successfully unsumbitted the schedule!' });
    } catch (error) {
        next(error);
    }
};

//
export const approveSchedule = async (request, response, next) => {
    try {
        // get relevant data
        const studentEmail = request.params.studentEmail;

        const schedule = await Schedule.findOneAndUpdate(
            { student_email: studentEmail },
            { is_approved: true }
        );

        return response
            .status(200)
            .json({ message: 'successfully approved the schedule!' });
    } catch (error) {
        next(error);
    }
};

//
export const unapproveSchedule = async (request, response, next) => {
    try {
        // get relevant data
        const studentEmail = request.params.studentEmail;

        const schedule = await Schedule.findOneAndUpdate(
            { student_email: studentEmail },
            { is_approved: false }
        );

        // console.log(schedule)

        response.status(200).json({ message: 'successfully unapproved the schedule!' });
    } catch (error) {
        next(error);
    }
};
