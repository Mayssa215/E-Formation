import mongoose from 'mongoose';
const trainingSchema = mongoose.Schema({
nomformation:  String, 
coach: String, 
firstdate: Date,
lastdate:Date,
horaire: String,
prix: Number,
nomcities:String,
duree:Number,
Nombredeplace: String,
programme: String,
description : String,
objectifsformation: String,
prerequis: String,
selectedFile: String,
createdAt: {
    type: Date,
    default: new Date()
},
idcities:{type: mongoose.Schema.ObjectId, ref : 'cities'},
idgouvernorat:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},

idcategorie:{type: mongoose.Schema.ObjectId, ref : 'categorie'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Former'},
id_formateur: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Training= mongoose.model('Training', trainingSchema);
export default Training; 