import mongoose from 'mongoose';
const opinionSchema = mongoose.Schema({
idtraining:  {type: mongoose.Schema.ObjectId, ref : 'trainings'}, 
comment: String,
iduser: {type: mongoose.Schema.ObjectId, ref : 'users'},
createdAt: {
    type: Date,
    default: new Date()
},
ratingvalue :Number,
});
const  opinion = mongoose.model('opinion', opinionSchema);
export default opinion; 