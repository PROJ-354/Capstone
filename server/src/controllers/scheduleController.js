import Schedule from "../models/Schedule.js";

// this controller returns a schedule object with a specified studentID in the request parameters
export const getScheduleByStudentId = async (request, response, next) => {
    try {
        const schedule = await Schedule.find({ student_id: request.params.studentID});
        response.status(200).json(schedule);
    } catch (error) {
        next(error);
    }
}

// this controller updates a specific week in a specfified Schedule
export const updateWeek = async (request, response, next) => {
    try {
        const { studentID, weekNumber} = request.params;
        const newWeekData = request.body;

        const schedule = await Schedule.find({ student_id: request.params.studentID});
        
        // schedule.weeks[weekNumber] = request.body or smth like that

        response.status(200).json({ message: 'mreow'});
    } catch (error) {
        next(error);
    }
}

//
export const sumbitSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow'});
    } catch (error) {
        next(error);
    }
}

//
export const unsumbitSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow'});
    } catch (error) {
        next(error);
    }
}

//
export const approveSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow'});
    } catch (error) {
        next(error);
    }
}

//
export const unapproveSchedule = async (request, response, next) => {
    try {
        response.status(200).json({ message: 'mreow'});
    } catch (error) {
        next(error);
    }
}