import mongoose from 'mongoose';
const categSchema = mongoose.Schema({
nom:  String, 
});
const  CategMod= mongoose.model('CategMod', categSchema);
export default CategMod; 