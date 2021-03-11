import { makeStyles,fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   Paper: {
      padding: theme.spacing(2),
      width: 230,
      height: 520,
      marginLeft:35,
      marginRight:0,
      borderRadius:0,
      '@media  screen and (max-width: 960px)': {
         width: 750,
         height: 200,
         marginLeft: "10%",
      },
      '@media  screen and (max-width: 600px)': {
         width: 550,
         marginLeft: 50,
      },
      '@media screen and (max-width: 500px)': {
         width: 400,
         marginLeft: 15,
      },
      '@media  screen and (max-width: 320px)': {
         width: 250,
         marginLeft: 12,
         marginRight: 0,
         height: 230,

      },
   },

   div: {
      marginTop: 2,
      width: 180,
      marginLeft: 16,
      color: "#fa7d39",
      '@media  screen and (max-width: 960px)': {
         width: 140,
         marginRight: 0,
         marginLeft: 5,

      },
      '@media  screen and (max-width: 600px)': {
         marginTop: 0,
         width: 140,
         marginRight: 20,
         marginLeft: 30,
      },
      '@media  screen and (max-width: 320px)': {
      
         width: 180,
         marginLeft: 25,
          
      },
   },
   prix: {
      fontSize: 16,
      marginTop: 12,
      fontFamily:"Noto Sans KR",
  
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 16,
         marginTop: 10,

      },
      '@media  screen and (max-width: 600px)': {
      
         marginLeft: 18,
          
      },
      '@media  screen and (max-width: 320px)': {
         fontSize: 14,

         marginLeft: 16,
          
      },
   },

   div2: {
      width: 210,
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 12,
      '@media  screen and (max-width: 960px)': {
         width: 140,
         marginRight: 20,

      },
      '@media  screen and (max-width: 320px)': {
      
         width: 160,
         marginLeft: 22,
          
      },
   },
   div3 : {
      width: 200,
      marginLeft: 5,
      marginTop: 15,
      marginBottom: 12,
      '@media  screen and (max-width: 960px)': {
         width: 180,
         marginTop: 8,
         marginRight:28,
      },
      '@media  screen and (max-width: 600px)': {
         width: 180,
         marginRight: 75,
         marginBottom:28,
         marginTop: 0,
      },
      '@media screen and (max-width: 500px)': {
         width: 150,
         marginRight: 35,
         marginBottom:28,
        
      },
      '@media  screen and (max-width: 320px)': {
         marginTop: 15,
         width: 195,
         marginLeft: 4,
         marginBottom:10,


          
      },
     
   },
  
  
 
   

   hide: {
      marginTop: 15,
      width: 250,
      fontSize: 12,
      '&:hover ': {
         background: 'transparent',
      },
      '@media  screen and (max-width: 960px)': {
         marginLeft: "75%",
         marginBottom: 10,
         marginTop: 20,

      },
      '@media  screen and (max-width: 600px)': {
         marginBottom: 10,
         marginLeft: "60%",


      },
      '@media screen and (max-width: 500px)': {
         marginLeft: "70%",

      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: "25%",

      },

   },
   rech: {
      width: 180,
      marginLeft: 600,
      fontSize: 8,
      marginRight:290,
      '@media  screen and (max-width: 960px)': {
         marginLeft: 350,
      },
      '@media  screen and (max-width: 600px)': {
         marginLeft: 220,
      },
      '@media screen and (max-width: 500px)': {
         marginLeft: 160,
         marginRight:0,

      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: 45,
         marginRight:0,
      },
   },
   barre: {
      marginTop: 95,
      display: "flex",
      '@media  screen and (max-width: 960px)': {
         display: "block",
      },
   },

 
   filedbtn: {
      display: "flex",
   },

   scroll: {
      width: 280,
      height: 540,
    
   },
   check: {
      marginLeft : 10,
      '&:checked': {
         color: "#74B5BD",
       },
      '@media  screen and (max-width: 960px)': {
         display: "inline-block",
         marginBottom: 38,
      },
      '@media  screen and (max-width: 320px)': {
         display: "inline-block",
         marginBottom: 10,
      },

   },
 
   categnom: {
      fontSize: 14,
   },
 
   categlabel: {
      marginTop: 8,
      fontSize: 16,
      marginLeft:10,
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 16,
         marginBottom: 8,
      },
   },
   /* categlabel2: {
      marginTop: 8,
      fontSize: 16,
      marginLeft:2,
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 16,
         marginBottom: 8,
      },
      '@media  screen and (max-width: 500px)':
      {
         fontSize: 16,
         marginTop:0,
      },
   }, */
   icon: {
      fontSize: 22,
      color: "#74B5BD",
   },
   openicon: {
      marginLeft: 85,
      
      color: 'transparent',
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
   openicongouver : {
      marginLeft: 110,
      color: 'transparent',
      '&:hover': {
         background: 'transparent',
      },
   },
   categopen: {
      display: "flex",
   },
   iconopenclose: {
      fontSize: 25,
      color: "#4C4C4C",
   },
   dates : {
      '@media  screen and (max-width: 960px)': {
         display: "flex",
         marginLeft: 13,
         '@media  screen and (max-width: 600px)': {
            display: "block",      
               marginLeft: 15,
         },
      },
   },
   duree :{
      marginTop: 5,
      width: 180,
      marginLeft: 16,
      color: "#fa7d39",
      
      '@media  screen and (max-width: 960px)':
      {
         width: 140,
         marginTop: 0,
         marginLeft: 20,

      },
      '@media  screen and (max-width: 600px)':
      {
         width: 140,
         marginTop: 0,
         marginLeft: 28,

      },
      '@media  screen and (max-width: 320px)': {
      
         width: 190,
         marginLeft: 24,
          
      },

   },
   dureenom :{
      fontSize: 16,
      marginTop: 10,
      marginLeft: 5,

      fontFamily:'"Shippori Mincho", serif',
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 16,
         marginTop: 10,
         marginLeft: 16,

      },
      '@media  screen and (max-width: 320px)':
      {
         fontSize: 14,
         marginLeft: 22,
         marginTop: 15,
      },
   },

   formControl: {
      margin: theme.spacing(1),
      width: 240,
    },
  
    gouvernorat :{
    width: 210,
    marginTop: 12,
    marginBottom:5,
    '@media  screen and (max-width: 960px)': {
     marginRight: 15,
     width: 200,
     marginLeft: 15,
   },
   '@media  screen and (max-width: 600px)': {
      marginRight: 15,
      width: 220,
      marginLeft: 15,
 
        
    },
    '@media  screen and (max-width: 500px)': {
      marginRight: 15,
      width: 160,
      marginLeft: 15,
 
        
    },
    '@media  screen and (max-width: 320px)': {
      marginRight: 15,
      width: 200,
      marginLeft: 15,
 
        
    },
    },
    détails:{
      width: 210,
      marginTop: 12,
      marginBottom:5,
      '@media  screen and (max-width: 960px)': {
      marginBottom:1,
       width: 200,
       marginLeft: 1,
       marginTop: 2,
       marginRight: 30,
    },
    '@media  screen and (max-width: 600px)': {
      marginBottom:1,
       width: 220,
       marginLeft: 250,
       marginTop: -60,
       marginRight: 30,

  
    },
    '@media  screen and (max-width: 500px)': {
      marginBottom:1,
       width: 160,
       marginLeft: 190,
       marginTop: -80,
       marginRight: 30,

  
    },
    '@media  screen and (max-width: 320px)': {
      marginBottom:1,
       width: 200,
       marginLeft: 0,
       marginTop: 0,
       marginRight: 30,

    },
   },
    filtremasq : {
      fontFamily: 'Raleway, Arial',
    
    },
    gouvVille : {
      '@media  screen and (max-width: 960px)': {
         display: "flex", 
         marginBottom:0,     
          
      },
      '@media  screen and (max-width: 320px)': {
         display: "block", 
         marginBottom:0,     
          
      },
    },
    sliders : {
      '@media  screen and (max-width: 960px)': {
         display: "flex",     
      },
      '@media  screen and (max-width: 600px)': {
         display: "block",     

          
      },
    },
    debutfin : {
      '@media  screen and (max-width: 960px)': {
         display:"flex",
     },
      '@media  screen and (max-width: 600px)': {
          display:"flex",
      },
      '@media  screen and (max-width: 320px)': {
         display:"block",
     },

    },
    /* openicon2: {
      marginLeft: 170,
      
      color: 'transparent',
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

   }, */
}));