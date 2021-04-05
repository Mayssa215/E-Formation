import mongoose from 'mongoose';

const centreSchema = mongoose.Schema({
    name: { type: String , required:true },
    namespeciality:{ type: String , required:true },
    selectedFileimage: String,
    nomcities:{ type: String , required:true },
    nomgouvernorat:{ type: String , required:true },
    phonenumber:  { type: String , required:true , minlength:8},
    adresseexact:{type: String, required:true},
    description: {type: String, required:true},
    email:{ type:String, required:true , unique:true},
    motdepasse : {type:String, required:true, min:8},
    createdAt: {
        type: Date,
        default: new Date()
    },
    idcities:{type: mongoose.Schema.ObjectId, ref : 'cities'},
    idgouvernorat:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},
     formationdecentre: [{type: mongoose.Schema.ObjectId, ref : 'Training'}],
     idspeciality: [{ type: mongoose.Schema.ObjectId, ref: 'categorie' }],
     Role :{
        type: String, 
        default: "centre",
    },
    resetLink: {
        data: String,
        default :'',
      }
    });

const Centre = mongoose.model('Centre', centreSchema);
export default Centre;