import mongoose from 'mongoose';
const favoriteSchema = mongoose.Schema({
idtraining:  {type: mongoose.Schema.ObjectId, ref : 'trainings'}, 
iduser: {type: mongoose.Schema.ObjectId, ref : 'users'},
});
const  favorite = mongoose.model('favorite', favoriteSchema);
export default favorite;