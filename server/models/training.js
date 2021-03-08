import mongoose from 'mongoose';
const trainingSchema = mongoose.Schema({
nomformation:  String, 
coach: String,
categorie: String, 
date: Date,
horaire: String,
lieu: String,
prix: Number,
Nombredeplace: Number,
description : String,
selectedFile: String,
idcategorie : {type: mongoose.Schema.ObjectId, ref : 'Categorie'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Former'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Training= mongoose.model('Training', trainingSchema);
export default Training; 