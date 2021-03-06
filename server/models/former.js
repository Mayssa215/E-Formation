import mongoose from 'mongoose';

const formerSchema = mongoose.Schema({
    nomformateur: String,
    prenom: String,
     formations: [{type: mongoose.Schema.ObjectId, ref : 'Training'}]





 
    });


const Former = mongoose.model('Former', formerSchema);
export default Former;