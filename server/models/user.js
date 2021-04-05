import mongoose from 'mongoose' ;
const userSchema = mongoose.Schema ({
  nom : {type: String, required:true, trim: true },
  prenom : { type:String , required:true , trim:true},
  telephone : { type: String , required:true , minlength:8},
  cin : { type: Number , required:true, minlength:8 },
  villeu : {type: String, required:true, trim: true },
  gouvernoratu : {type: String, required:true, trim: true },
  email :{ type:String, required:true , unique:true},
  image: String,
  motdepasse : {
    type: String,
     required:true, 
     minlength: 8,
    },
  Role :{
    type: String, 
    default: "client",
},
resetLink: {
  data: String,
  default :'',
}
})
const  User= mongoose.model('User', userSchema);
export default User;