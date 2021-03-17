
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: 350,
    height:515,
    marginLeft:90,
    '@media  screen and (max-width: 960px)': {
      marginTop: 300,
      marginLeft:0,
  },
},

  media: {
    height: 50,
    paddingTop: "56.25%", 
   marginTop:-152,
  },
  avatar: {
    backgroundColor: " #f5f5f5 ",
    color : '#000000',
    marginTop: 12,
    marginLeft: 12,

  },
  buttonVoir: {
    marginLeft: 2,
    color: " #f5f5f5",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#4e3e8c",
    borderRadius:5,
    fontSize:12,
    marginRight:60,
    marginLeft:20,
    '&:hover': {
      background: "#ffffff",
      color: " #4e3e8c",
      marginTop:0,
  },
  },
  price: {
   marginLeft:270,
   position: "absolute",
   marginTop:45,
  },
  prix : {
   color:'#ffffff',
   fontSize:24,
  },
  tnd :{
    marginLeft:9,
    color:'#ffffff',
    fontSize:14,
  },

  Placeicon : {
    fontSize:30,
    marginRight:10,
    marginTop:10,
    color:" #fa7d39",


  },
  lieu : {
    fontSize:16,
    textTransform:"capitalize",
    marginTop:20,
  },
  place :{
    display:'flex',
  },
  title :{
   fontSize:22,
   textTransform:"capitalize",
   marginLeft:115,
   color: "#4e3e8c",


  },
  MuiCardContentroot: {
    marginTop:5,

  },
  nbh: {
    fontSize:18,
    marginRight:15,

    marginTop:18,
  },
  duree :{
    marginTop:20,

  },
  svg :{
    display: "flex",
  
  },
  mauve :{
   marginLeft:260,
  
  },
  Container : {
  position:"relative",
  },

  
  btns :{
   display:"flex"
  },
  btnreservez:{
    marginLeft: 2,
    color: " #4e3e8c",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#ffffff",
    borderRadius:5,
    fontSize:12,
    
    '&:hover': {
      background: "#4e3e8c",
      color: " #f5f5f5",
      marginTop:0,
  },
},
}));