import mongoose from "mongoose";

const PreceptorEvaluationSchema = mongoose.Schema({
  is_master: {type: Boolean},
  //The month, 1 or 2 since there are 2 different evaluations
  month: { type: Number, min: 1, max: 2 },
  //assessment form
  performance_assessment: [{
    category: {type: String},
    //name of the skill
    skill_name: { type: String },
    //description of the given rating
    rating_description: {type: [String]},
    //chosen rating
    skill_rating: {type: Number}
}],
  //Preceptor comment box
  comments: { type: String },
  //has this been looked at since it was sent to the preceptor? notifcation purposes
  notify: { type: String },
  //has this been completed and submitted to the instructor?
  complete: { type: Boolean, required: true },
  //omg this stuff makes no sense wat it for?
  student_id: { type: String },
  preceptor_id: { type: String },
  instructor_id: { type: String }
});
const PEval = mongoose.model("PEval", PreceptorEvaluationSchema);
export default PEval;
