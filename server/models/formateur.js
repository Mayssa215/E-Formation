import mongoose from 'mongoose';

const formateurSchema = mongoose.Schema({
    nom: String,
    prenom: String,
     formations: [{type: mongoose.Schema.ObjectId, ref : 'Formation'}]





 
    });


const Formateur = mongoose.model('Formateur', formateurSchema);
export default Formateur;