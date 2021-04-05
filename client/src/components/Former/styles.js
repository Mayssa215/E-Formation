import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: 310,
    height:450,
    marginLeft:0,
    backgroundColor: " #f5f5f5",

    '@media  screen and (max-width: 960px)': {
      marginTop: 300,
      marginLeft:0,
    },
},
root1: {
  marginTop: "25%",
  width: 310,
  height:420,
  marginLeft:"50%",
  backgroundColor: " #f5f5f5",

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
    marginTop:12,
    marginLeft: 60,
    width:150,
    height:170,

  },
  buttonVoir: {
    color: " #f5f5f5",
    border:"2px solid",
    borderColor: "#4e3e8c",
    backgroundColor:"#4e3e8c",
    borderRadius:5,
    fontSize:12,
    marginRight:0,
    marginLeft:180,
    '&:hover': {
      background: "#ffffff",
      color: " #4e3e8c",
      marginTop:0,
  },
  },
 
 
  title1 :{
   fontSize:25,
   textTransform:"capitalize",
   marginLeft:50,
   color: "#4e3e8c",


  },
  title2 :{
    fontSize:25,
    textTransform:"capitalize",
    marginLeft:0,
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
  lieu : {
    fontSize:18,
    textTransform:"capitalize",
    marginTop:20,
  },
  place :{
    display:'flex',
  },
  Placeicon : {
    fontSize:30,
    marginRight:10,
    marginTop:15,
    color:" #fa7d39",


  },

  
  btns :{
   display:"flex"
  },
 

}));