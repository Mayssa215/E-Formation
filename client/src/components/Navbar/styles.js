import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    justifyContent: "flex-end",
    backgroundColor: "#4e3e8c",
    display: "flex",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  toulBar: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 900px)": {
      justifyContent: "space-between",
    },
  },
  linksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
 
 
  title1: {
    margin: "0px 15px",
  },

 titlebar : {
   color:"primary",
   display:"inline-block",
   padding:"10px 30px",

 },

  links: {
      color:"#ffffff",
      fontSize:20,
      fontFamily:"Noto Sans KR",


    },

   
    button: {
        padding :"5px 10px",
        margin:"0px 5px",
        color:"#ffffff",
        borderRadius:"1",
        backgroundColor:" #fa7d39",
        '&:hover': {
          background: "#fa7d39",
     
  
  },

    },
    
    avatardesgin : {
      display:'flex',
      marginLeft:10,
    },
    arrow :{
  marginTop:10,
  marginLeft:5,
  color:'#ffffff',
    }, 

    btn :{
      color:'transparent',
      '&:hover': {
        background: 'transparent',
   

    },
  },

  menus: {
    marginTop:55,
    marginLeft:-40,
  },
  item :{
    fontSize:20,
    marginRight:25,
    '&:hover': {
      background: 'transparent',
 

  },
  },
  iconuser : {
    fontSize:28,
    marginRight:5,
    marginLeft:15,
  },



    logo:{
      height:50,
      backgroundColor:"#4e3e8c",
display:"flex",


    },
  
    buttonmobile: {
      padding :"5px 10px",
      margin:"0px 5px",
      color:"#ffffff",
      borderRadius:"1",
      marginLeft:50,
      marginTop:40,
      width:150,
      backgroundColor:" #fa7d39",
      '&:hover': {
        background: "#fa7d39",
   

},

  },
 

    icons:{
    fill:"#f5f5f5",

},
linkicon :{
  color:"#f5f5f5",
  padding:"10px 10px",
marginTop:10,
},
divicon:{
  display:"flex",
  marginTop:5,
},
typicon:{
 

  backgroundColor:"#4e3e8c",
  height:"100%",
paddingLeft:10,},

iconopenclose: {
  fontSize: 30,
  color: "#fa7d39",
paddingLeft:210,
},

iconmenu:{
  fontSize: 30,
  color: "#fa7d39",
paddingLeft:10,
paddingTop:10,
},


openicon: {
   marginLeft: 100,
   
   color: 'black',
   '&:hover': {
      background: 'transparent',
   },
   '@media  screen and (max-width: 960px)': {
      marginLeft: "79%",
   },
      '@media  screen and (max-width: 600px)': {
         marginLeft: "73%",
      },
      '@media screen and (max-width: 500px)': {
         marginLeft:"62%",


      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: "42%",
      },

},

    

}));