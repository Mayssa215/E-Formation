import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: 310,
    height:420,
    marginLeft:0,
    backgroundColor:"#f5f5f5",

    '@media  screen and (max-width: 960px)': {
      marginTop: 300,
      marginLeft:0,
  },
},


root1: {
  marginTop: "40%",
  width: 310,
  height:370,
  marginLeft:-20,
  backgroundColor:"#f5f5f5",

  '@media  screen and (max-width: 1400px)': {
    marginTop: 120,
    marginLeft:-30,
},
'@media  screen and (max-width: 1300px)': {
  marginLeft:-30,
  marginTop:120,
},
'@media  screen and (max-width: 1200px)':{
marginLeft:50,
marginTop:110,
},

'@media  screen and (max-width: 1100px)': {
marginTop:100,
  marginLeft:90,
},
'@media  screen and (max-width: 960px)':{
  marginLeft:"20%",
  marginTop:90,
  width:280,
  },
  '@media  screen and (max-width: 850px)':{
    marginTop:110,
  },
  '@media  screen and (max-width: 750px)':{
    marginTop:-490,
    width:270,
    marginLeft:360,
        },
  '@media  screen and (max-width: 520px)':{
    marginTop:"-240%",
    width:360,
    marginLeft:30,
  },

},
  media: {
    height: 130,
    paddingTop: -10, 
   marginTop:0,
   marginBottom:20,
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
 
 
  title :{
   fontSize:22,
   textTransform:"capitalize",
   marginLeft:60,
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