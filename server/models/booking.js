import mongoose from 'mongoose';
const bookingSchema = mongoose.Schema({
idtraining:  {type: mongoose.Schema.ObjectId, ref : 'trainings'}, 
phone: String,
iduser: {type: mongoose.Schema.ObjectId, ref : 'users'},
status:String,
cin:{type: String , minlength:8} , 
});
const  booking = mongoose.model('booking', bookingSchema);
export default booking; 