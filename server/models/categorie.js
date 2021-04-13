import mongoose from 'mongoose';
const categorieSchema = mongoose.Schema({
nom:  String, 
});
const  categorie= mongoose.model('categorie', categorieSchema);
export default categorie; 