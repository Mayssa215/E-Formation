import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

 paper1 :{
   marginTop:100,
   width:1250,
   height:625,
   justifyContent: "center",
   borderRadius:0,

   '@media screen and (max-width: 900px)': {
    width:800,

   } , 
   '@media screen and (max-width: 800px)': {
    width:700,

   }   ,
   '@media screen and (max-width: 700px)': {
    width:600,

   } ,
   '@media screen and (max-width: 600px)': {
    width:500,

   } ,
   '@media screen and (max-width: 560px)': {
    width:500,

   } ,

 },

 avatar : {
  width:250,
  height:250,
  borderRadius:0,
 },

}));