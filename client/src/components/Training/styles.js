
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: 350,
    height:555,
    marginLeft:0,
 
  },
  MuiCardContentroot:{
    padding :0,
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
    marginLeft: 210,
    color: " #f5f5f5",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#4e3e8c",
    borderRadius:5,
    fontSize:12,
    '&:hover': {
      background: "#4e3e8c",
      color: " #f5f5f5",
      marginTop:0,
  },
  },
  price: {
   marginLeft:275,
   position: "absolute",
   marginTop:45,
  },
  prix : {
   fontFamily:'Helevtica',
   color:'#ffffff',
   fontSize:24,
  },
  tnd :{
    marginLeft:4,
    color:'#ffffff',
    fontSize:14,
  },

  Placeicon : {
    fontSize:40,
    marginLeft: 30,
    marginRight:30,
    marginTop:5,
  },
  lieu : {
    fontSize:18,
    textTransform:"capitalize",
  },
  title :{
   fontSize:22,
   fontFamily:'Helvetica',
   textTransform:"capitalize",
   marginLeft:105,
   color: "#fa7d39",


  },
  MuiCardContentroot: {
    marginTop:5,

  },
  nbh: {
    fontSize:18,
    marginRight:15,
    marginLeft:50,
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
  formatdate : {
    display:"block",
  },
  date : {
    marginLeft:118,
  },
  icons :{
    display:"flex",
    marginTop:20,

  },
  items :{
    display:"flex",
    marginLeft:20,
  }
}));