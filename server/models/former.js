import mongoose from 'mongoose';

const formerSchema = mongoose.Schema({
    firstname: {type: String , required:true },
    lastname:  {type: String , required:true },
    tel: { type: String , required:true , minlength:8},
    sexe:  {type: String , required:true },
    Numbreofexperience:{type: String , required:true },
    description:{type: String, required:true},
    cin: {type: String , minlength:8} , 
    namespeciality:  {type: String , required:true },
    selectedFile: String,
    selectedFileimage: String,
    email:{ type:String, required:true , unique:true},
    motdepasse : {type:String, required:true},
    createdAt: {
    type: Date,
    default: new Date()
    },
    idspeciality: [{ type: mongoose.Schema.ObjectId, ref: 'categorie' }],

    training: [{ type: mongoose.Schema.ObjectId, ref: 'Training' }],
    Role :{
        type: String, 
        default: "formateur",
    },
    resetLink: {
        data: String,
        default :'',
      }




});


const Former = mongoose.model('Former', formerSchema);
export default Former;