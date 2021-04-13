import mongoose from 'mongoose';
const trainingSchema = mongoose.Schema({
name:  String, 
firstdate: Date,
lastdate:Date,
hour: String,
price: Number,
namecity:String,
periode:Number,
numberplace: String,
planning: String,
description : String,
objectif: String,
skills: String,
longitude:Number,
latitude:Number,
namegouvernorate:String,
namecategorie:String,
selectedimage: String,
createdAt: {
    type: Date,
    default: new Date()
},
idcity:{type: mongoose.Schema.ObjectId, ref : 'cities'},
idgouvernorate:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},

idcategorie:{type: mongoose.Schema.ObjectId, ref : 'categorie'},
id_former: {type: mongoose.Schema.ObjectId, ref : 'Former'},
id_center: {type: mongoose.Schema.ObjectId, ref : 'Centre'},

});
const  Training= mongoose.model('Training', trainingSchema);
export default Training; 