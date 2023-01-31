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

//CREATE a new master week
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

//CREATE a new week based on a master week

//UPDATE a week

//DELETE a week
