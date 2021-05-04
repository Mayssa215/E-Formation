import mongoose from 'mongoose';

const centerSchema = mongoose.Schema({
    lastname : { type: String , required:true },
    namespeciality:[{type: String}],
    selectedimage: String,
    namecities:{ type: String , required:true },
    namegouvernorate:{ type: String , required:true },
    phone:  { type: String , required:true , minlength:8},
    adressexact:{type: String, required:true},
    description: {type: String, required:true},
    email:{ type:String, required:true , unique:true},
    password : {type:String, required:true, min:8},
    createdAt: {
        type: Date,
        default: new Date()
    },
    idcity:{type: mongoose.Schema.ObjectId, ref : 'cities'},
    idgouvernorate:{type: mongoose.Schema.ObjectId, ref : 'gouvernorat'},
    trainingcenter: [{type: mongoose.Schema.ObjectId, ref : 'Training'}],
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

const Center = mongoose.model('Center', centerSchema);
export default Center;