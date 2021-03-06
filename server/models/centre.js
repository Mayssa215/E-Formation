import mongoose from 'mongoose';

const centreSchema = mongoose.Schema({
    nomcentre: String,
    
     formationdecentre: [{type: mongoose.Schema.ObjectId, ref : 'Training'}]


    });


const Centre = mongoose.model('Centre', centreSchema);
export default Centre;