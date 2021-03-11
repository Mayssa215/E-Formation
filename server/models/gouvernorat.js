import mongoose from 'mongoose';
const gouvernoratSchema = mongoose.Schema({
nom:  String, 
id_ville: {type: mongoose.Schema.ObjectId, ref : 'cities'},
});
const  gouvernorat = mongoose.model('gouvernorat', gouvernoratSchema);
export default gouvernorat; 