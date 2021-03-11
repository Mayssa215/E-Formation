import mongoose from 'mongoose';
const citiesSchema = mongoose.Schema({
nom:  String, 
id_gouvernorat: {type: mongoose.Schema.ObjectId, ref : 'gouvernorats'},

});
const  cities = mongoose.model('cities', citiesSchema);
export default cities; 