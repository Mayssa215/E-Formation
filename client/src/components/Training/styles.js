
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: 340,
    height:520,
    marginLeft:90,
 
  },
  MuiCardContentroot:{
    padding :0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", 
  },
  avatar: {
    backgroundColor: " #fa7d39 ",
  },
  buttonVoir: {
    marginLeft: 190,
    color: " #fa7d39",
    border:"2px solid",
    borderColor: "#fa7d39",
    borderRadius:5,

    fontSize:12,
    '&:hover': {
      background: "#fa7d39",
      color: " #ffffff",
  },
  },
  price: {
    marginLeft: 220,
    marginTop:10,
    paddingLeft:25,
   
  },
  prix : {
   fontFamily:'Roboto',
   color:'#000000',
   fontSize:16,
  },

  Placeicon : {
    fontSize:45,
    marginLeft: 10,
    marginRight:5,
  },
  nb: {
    marginLeft: 38,
    display: "flex",
  },
  voirplus :{
    marginTop: 36,
    marginLeft: "85%",
    color:"#4e3e8c",
    borderColor: "#4e3e8c",
    border:"2px solid",
    borderRadius:5,
    fontSize:12,
    '&:hover': {
      background: "#4e3e8c",
      color: " #ffffff",
  },


  }
}));