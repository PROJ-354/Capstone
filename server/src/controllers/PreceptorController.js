import PEval from '../models/PreceptorEvaluationModel.js';

//get evals that match a preceptor ID
export const getEvals = async (req, res) => {
    //CHANGE PRECEPTOR_ID TO DYNAMIC USER_ID when we have auth
    const evals = await PEval.find({ preceptor_id: '2345' });
    res.status(200).json(evals);
};

//get master evaluation
export const getMasterEval = async (req, res) => {
    const masterEval = await PEval.findOne({ is_master: true });
    res.status(200).json(masterEval);
};

//create an eval and store it to DB
export async function createEval(req, res) {
    const data = req.body;
    try {
        await PEval.create(data);
    } catch (err) {
        console.log(err);
    }
    return res;
}

//delete an evaluation
export async function deleteEval(req, res) {
    const evalId = req.params.evalId;
    const evaluation = await PEval.findByIdAndDelete(evalId);
    res.json(evaluation);
}

//get an evaluation
export async function getEval(req, res) {
    const { evalId } = req.params;
    const evaluation = await PEval.findById(evalId);
    res.status(200).json(evaluation);
}

//edit an evaluation
export async function editEval(req, res) {
    const id = req.body._id;

    try {
        await PEval.findByIdAndUpdate({ _id: id }, { ...req.body });
    } catch (err) {
        console.log(res.json({ msg: err.message }));
    }
    res.status(200).json({ test: 'test' });
}
