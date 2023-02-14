import mongoose from 'mongoose';
import Week from '../models/Week.js';

//GET a single week
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

//GET a master week
export const getMasterWeek = async (req, res) => {
    //The name of the week to get
    const { name } = req.params;

    //Find the week
    const week = await Week.findOne({ name, is_master: true });

    //If no week is returned, respond with an error
    if (!week) {
        res.status(404).json({ error: 'No such master week' });
    } else {
        res.status(200).json({ week });
    }
};

//GET all master weeks
export const getAllMasterWeeks = async (req, res) => {
    //Find the weeks
    const weeks = Week.find({ is_maste: true });
};

//CREATE a new master week

//CREATE a new week based on a master week
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

//UPDATE a week
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

    //Filters for determining which data to change
    const arrayFilters = {
        arrayFilters: [],
    };

    //The data to update the old data with
    const newData = {
        $set: {},
    };

    //Loop through the provided request body
    req.body.map(async (entry) => {
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
        // newData.$set = {
        //     'skills_assessment.section.$[section].skills.$[skills].experiences.$[experience].student_checked':
        //         entry.checked,
        //     'skills_assessment.section.$[section].skills.$[skills].experiences.$[experience].date':
        //         entry.date === null ? null : Date.parse(entry.date),
        // };

        newData.$set = {
            'skills_assessment.section.$[section].skills.$[skills].experiences.$[experience].student_checked':
                entry.checked,
        };

        //Update the object
        await Week.findOneAndUpdate({ _id: id }, newData, arrayFilters);
    });

    //Get the week so we can return it
    week = await Week.findOne({ _id: id });
    res.status(200).json(week);
};

//DELETE a week
