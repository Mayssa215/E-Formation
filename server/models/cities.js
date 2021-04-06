import mongoose from 'mongoose';
const citiesSchema = mongoose.Schema({
name:  String, 
id_gouvernorate: {type: mongoose.Schema.ObjectId, ref : 'gouvernorats'},

});
const  cities = mongoose.model('cities', citiesSchema);
export default cities; 