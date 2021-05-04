import mongoose from 'mongoose' ;
const adminSchema = mongoose.Schema ({
  email :{ type:String, required:true , unique:true},
  motdepasse : {type:String, required:true}, 
  resetLink: {
    data: String,
    default :'',
  }
})
const  Admin = mongoose.model('Admin', adminSchema);
export default Admin;  