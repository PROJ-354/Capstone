import PEval from '../models/PreceptorEvaluation.js';

//get evals that match a preceptor ID
export const getEvals = async (req, res) => {
    const user = req.params.userId;
    const evals = await PEval.find({ preceptor_id: user }).populate({path: 'student_id', select: 'firstName lastName'});
    
    if(!evals){
        res.status(404).json({error: 'Error getting evaluations'})
    }else{
        res.status(200).json(evals);
    }
    }


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
        res.status(200).json({msg: "evaluation created succesfully"});
    } catch (err) {
       res.status(400).json({error: 'There is already an evaluation request for this student for this period.  Did you select the incorrect period?'});
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
    const evaluation = await PEval.findById(evalId).populate({path: 'student_id', select: 'firstName lastName'});
    // const evaluation = await PEval.findById(evalId);
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
    return res.status(200).json({ test: 'test' });
}
