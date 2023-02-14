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

//DELETE a week
