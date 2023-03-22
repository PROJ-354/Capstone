import Schedule from "../models/Schedule.js";
import User from '../models/User.js';

// this controller returns a schedule object with a specified studentID in the request parameters
export const getScheduleByStudentId = async (request, response, next) => {
    try {
        const schedule = await Schedule.find({ student_id: request.params.studentID });
        response.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

// this controller updates a specific week in a specfified Schedule
export const updateWeek = async (request, response, next) => {
    try {
        // get relevant data
        const studentID = request.params.studentID
        const weekData = request.body.weeks;
        const weekNumber = request.body.weekNumber;

        // find the schedule linked to the authenticated user
        const schedule = await Schedule.findOne({ student_id: studentID });

        // update a specified week in the schedule with the new week data
        schedule.weeks[weekNumber] = weekData

        // update the scheule in the database
        const updatedSchedule = await Schedule.findOneAndUpdate({ student_id: studentID }, schedule)

        // wow! a response!
        response.status(200).json({ message: `successfully updated week number ${weekNumber + 1}` });
    } catch (error) {
        next(error);
    }
}

//
export const sumbitSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow' });
    } catch (error) {
        next(error);
    }
}

//
export const unsumbitSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow' });
    } catch (error) {
        next(error);
    }
}

//
export const approveSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow' });
    } catch (error) {
        next(error);
    }
}

//
export const unapproveSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow' });
    } catch (error) {
        next(error);
    }
}