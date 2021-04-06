import mongoose from 'mongoose' ;
const userSchema = mongoose.Schema ({
  firstname : {type: String, required:true, trim: true },
  lastname : { type:String , required:true , trim:true},
  phone : { type: String , required:true , minlength:8},
  cin : { type: Number , required:true, minlength:8 },
  city : {type: String, required:true, trim: true },
  gouvernorate : {type: String, required:true, trim: true },
  email :{ type:String, required:true , unique:true},
  image: String,
  password : {
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