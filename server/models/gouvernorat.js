import mongoose from 'mongoose';
const gouvernoratSchema = mongoose.Schema({
nom:  String, 
id_city: {type: mongoose.Schema.ObjectId, ref : 'cities'},
});
const  gouvernorat = mongoose.model('gouvernorat', gouvernoratSchema);
export default gouvernorat; 