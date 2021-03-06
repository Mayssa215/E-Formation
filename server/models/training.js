import mongoose from 'mongoose';
const trainingSchema = mongoose.Schema({
nomformation:  String, 
coach: String,
categorie: String, 
date: Date,
horaire: String,
lieu: String,
prix: String,
Nombredeplace: String,
description : String,
selectedFile: String,

id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Former'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Training= mongoose.model('Training', trainingSchema);
export default Training; 