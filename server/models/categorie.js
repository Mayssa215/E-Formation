import mongoose from 'mongoose';
const categorieSchema = mongoose.Schema({
name:  String, 
});
const  categorie= mongoose.model('categorie', categorieSchema);
export default categorie; 