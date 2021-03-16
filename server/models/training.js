import mongoose from 'mongoose';
const trainingSchema = mongoose.Schema({
nomformation:  String, 
coach: String, 
date: Date,
horaire: String,
lieu: String,
prix: Number,
duree:Number,
Nombredeplace: String,
description : String,
selectedFile: String,
createdAt: {
    type: Date,
    default: new Date()
},
idcities:{type: mongoose.Schema.ObjectId, ref : 'cities'},
idgouvernorat:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},
idcategorie:{type: mongoose.Schema.ObjectId, ref : 'Categorie'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Former'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Training= mongoose.model('Training', trainingSchema);
export default Training; 