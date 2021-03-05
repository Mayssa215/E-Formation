import mongoose from 'mongoose';
const formationSchema = mongoose.Schema({
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

id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Formateur'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Formation= mongoose.model('Formation', formationSchema);
export default Formation; 