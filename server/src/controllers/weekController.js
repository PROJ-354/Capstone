import mongoose from 'mongoose';
import Week from '../models/Week.js';
import User from '../models/User.js';

//GET a single week by the week's ID
export const getWeek = async (req, res) => {
    //The ID of the week to get
    const { id } = req.params;

    //Check if the provided ID is a valid ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    //Find the week
    const week = await Week.findOne({ _id: id });

    //If no week is returned, respond with an error
    if (!week) {
        res.status(404).json({ error: 'No such week' });
    } else {
        res.status(200).json({ week });
    }
};

//ADD a new master week
export const addMasterWeek = async (req, res) => {};

//ADD a new week based on a master week's ID
export const createWeek = async (req, res) => {
    //The name of the master weak to copy from
    const { name } = req.params;

    //Find the week
    const week = await Week.findOne({ name, is_master: true });

    //If no week is returned, stop and respond with an error
    if (!week) {
        return res.status(404).json({ error: 'No such master week' });
    }

    //Duplicate the master and change is_master to false
};

//UPDATE a week based on it's ID
export const updateWeek = async (req, res) => {
    const { id } = req.params;

    //Check if the provided id is a valid object id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    let week = await Week.findOne({ _id: id });
    if (!week) {
        return res.status(404).json({ error: 'No such week' });
    }

    //Set the preceptor's ID in the checklist
    await Week.updateOne({ _id: id }, { preceptor_id: req.body.preceptorId });

    //Filters for determining which data to change
    const arrayFilters = {
        arrayFilters: [],
    };

    //The data to update the old data with
    const newData = {
        $set: {},
    };

    //Loop through the provided request body
    req.body.data.map(async (entry) => {
        //Reset the filters and new data
        arrayFilters.arrayFilters = [];
        newData.$set = [];

        //Add filters for each array we need to go through
        arrayFilters.arrayFilters.push({
            'section.name': entry.section,
        });

        arrayFilters.arrayFilters.push({
            'skills.name': entry.skill,
        });

        arrayFilters.arrayFilters.push({
            'experience.number': entry.experience,
        });

        //Add the data to change
        newData.$set = {
            'skills_assessment.section.$[section].skills.$[skills].experiences.$[experience].student_checked':
                entry.checked,
            'skills_assessment.section.$[section].skills.$[skills].experiences.$[experience].date':
                entry.date === '' ? null : Date.parse(entry.date),
        };

        //Update the object
        await Week.updateOne({ _id: id }, newData, arrayFilters);
    });

    //Get the week so we can return it
    week = await Week.findOne({ _id: id });
    res.status(200).json(week);
};

//SUBMIT a week to a preceptor
export const submitWeek = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    const week = await Week.findById(id);

    if (!week.preceptor_id) {
        return res.status(400).json({ error: 'No preceptor has been selected' });
    }

    await Week.updateOne({ _id: id }, { submitted_to_preceptor: true });
    res.status(200).json({ message: 'Checklist submitted successfully' });
};

//DELETE a week
export const deleteWeek = async (req, res) => {};

//GET all of a user's weeks
export const getUsersWeeks = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid id' });
    }

    const user = await User.findById(id);
    const filter = {};
    switch (user.role) {
        case 'student':
            filter.student_id = id;
            break;
        case 'preceptor':
            filter.preceptor_id = id;
            filter.submitted_to_preceptor = true;
            filter.submitted_to_instructor = false;
            break;
        case 'instructor':
            filter.instructor_id = id;
            filter.submitted_to_instructor = true;
            break;
        default:
            break;
    }

    const weeks = await Week.find(filter);

    if (!weeks) {
        res.status(404).json({ error: 'No weeks found for that user' });
    } else {
        res.status(200).json(weeks);
    }
};

export const giveUserWeeks = async (userId) => {
    const masterWeeks = await Week.find({ is_master: true });

    const modifiedWeeks = masterWeeks.map((week) => {
        week.student_id = userId;
    });

    const userWeeks = modifiedWeeks.map(async (week) => {
        await Week.create(week);
    });

    return userWeeks;
};
