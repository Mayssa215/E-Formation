import mongoose from 'mongoose';
const categorieSchema = mongoose.Schema({
nom:  String, 
idsformer: [{ type: mongoose.Schema.ObjectId, ref: 'Former' }],
idscentre: [{ type: mongoose.Schema.ObjectId, ref: 'Centre' }],

});
const  categorie= mongoose.model('categorie', categorieSchema);
export default categorie; 