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
  //the student_id will be added to the month to ensure that more than 1 eval per student per month is not completed
  unique: {type: String, unique: true},
  //Preceptor comment box
  comments: { type: String },
  //has this been looked at since it was sent to the preceptor? notifcation purposes
  notify: { type: String },
  //has this been completed and submitted to the instructor?
  complete: { type: Boolean},
  //omg this stuff makes no sense wat it for?
  student_id: {  type: mongoose.Schema.Types.ObjectId, ref: 'User'  },
  preceptor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  instructor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
const PEval = mongoose.model("PEval", PreceptorEvaluationSchema);
export default PEval;
