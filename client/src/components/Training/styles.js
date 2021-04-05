import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 30,
    width: 350,
    height:515,
    marginLeft:0,
    '@media  screen and (max-width: 1200px)': {
    
      marginLeft:48,
      marginRight:-35,
    },
    '@media  screen and (max-width: 960px)': {
      
      marginLeft:10,
      marginRight:-90,
  },
  '@media  screen and (max-width: 850px)':{
    marginRight:-90,
    marginLeft:-20,
    
  },
  '@media  screen and (max-width: 750px)':{
width:300,
marginRight:-90,
marginLeft:-20,
  },
  '@media  screen and (max-width: 520px)':{
marginLeft:10,
width:350,
  },
},
root1: {
  marginTop: 30,
  width: 350,
  height:515,
  marginLeft:180,
  position:"relative",
  '@media screen and (max-width: 1400px)':{
    width:315,
    marginLeft:"60%",
  },
  '@media screen and (max-width: 1100px)': {
    marginLeft:"40%",
  
  },
  '@media  screen and (max-width: 900px)': {
   marginTop:-1600,
width:500,
marginLeft:60,
  
},
"@media screen and (max-width: 800px)": {
  marginLeft: 50,
height:570,
marginTop:-1650,

},
'@media  screen and (max-width: 600px)': {
  marginTop:-1730,
width:410,
marginLeft:0,
height:515,
 
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
   '@media screen and (max-width: 1400px)': {
    marginLeft:260,
     
    
  },
   '@media screen and (max-width: 1100px)': {
    marginLeft:265,
     
    
  },
  '@media screen and (max-width: 800px)': {
    marginLeft:"650%",
     
    
  },
  '@media screen and (max-width: 600px)': {
    marginLeft:360,
     
    
  
  },
},
  prix : {
   color:'#ffffff',
   fontSize:24,
   marginLeft:5,
   
  },
  tnd :{
    marginLeft:8,
    color:'#ffffff',
    fontSize:14,
    '@media screen and (max-width: 1400px)': {
      marginLeft:5,
       
      
    },
     '@media screen and (max-width: 1100px)': {
      marginLeft:5,
       
      
    },
    '@media screen and (max-width: 900px)': {
      marginLeft:6,
       
      
    }
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
   marginLeft:10,
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
   '@media screen and (max-width: 1400px)': {
    marginLeft:248,
     
    
  },
  '@media screen and (max-width: 1100px)': {
    marginLeft:250,
     
    
  },
   '@media screen and (max-width: 900px)': {
    marginLeft:242,
     
    
  },
  '@media screen and (max-width: 800px)': {
    marginLeft:"635%",
     
    
  },
  '@media screen and (max-width: 600px)': {
    marginLeft:342,
     
    
  }
  
  },
  Container : {
  position:"relative",
  },

  
  btns :{
   display:"flex"
  },
  btnreservez:{
    marginLeft: 100,
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
  "@media  screen and (max-width: 800px)": {
    
    marginLeft:"40%", 
       },
       "@media  screen and (max-width: 600px)": {
    
        marginLeft:"35%", 
           },
},
}));