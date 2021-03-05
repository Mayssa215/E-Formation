import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   Paper: {
      padding: theme.spacing(2),
      width: 280,
      height: 520,
      '@media  screen and (max-width: 960px)': {
         width: 750,
         height: 200,
         marginLeft: "10%",
      },
      '@media  screen and (max-width: 600px)': {
         width: 450,
         marginLeft: 40,
      },
      '@media screen and (max-width: 500px)': {
         width: 350,
         marginLeft: 45,
      },
      '@media  screen and (max-width: 320px)': {
         width: 250,
         marginLeft: 12,
         marginRight: 0,
         height: 230,

      },
   },

   div: {
      marginTop: 5,
      width: 230,
      marginLeft: 16,
      color: "#74B5BD",
      '@media  screen and (max-width: 960px)': {
         marginTop: 42,
         width: 140,
         marginRight: 20,
         marginLeft: 2,
      },
      '@media  screen and (max-width: 600px)': {
         marginTop: 5,
         width: 140,
         marginRight: 20,
         marginLeft: 12,
      },
      '@media  screen and (max-width: 320px)': {
      
         width: 160,
         marginLeft: 22,
          
      },
   },

   div2: {
      width: 240,
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
      width: 240,
      marginLeft: 5,
      marginTop: 5,
      marginBottom: 12,
      '@media  screen and (max-width: 960px)': {
         width: 180,
         marginRight: 52,
      },
      '@media  screen and (max-width: 600px)': {
         width: 180,
         marginRight: 0,
         marginBottom:28,
         marginTop: 0,
      },
      '@media screen and (max-width: 500px)': {
         width: 130,
         marginRight: 0,
         marginBottom:28,
        
      },
      '@media  screen and (max-width: 320px)': {
      
         width: 160,
         marginLeft: 22,
         marginBottom:23,


          
      },
     
   },
  
   prixgouville: {
      '@media  screen and (max-width: 960px)': {
         display: "flex",
         marginLeft: 15,
      },
      '@media  screen and (max-width: 600px)': {
         display: "inline-block",      
            marginLeft: 15,
      },

   },
   gouvernorat: {
      fontSize: 16,
      '@media  screen and (max-width: 960px)': {
         fontSize: 14,

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
         marginLeft: "70%",
         marginBottom: 10,
         marginTop: 20,

      },
      '@media  screen and (max-width: 600px)': {
         marginBottom: 10,
         marginLeft: "50%",


      },
      '@media screen and (max-width: 500px)': {
         marginLeft: "45%",

      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: "25%",

      },

   },
   rech: {
      width: 130,
      marginLeft: 600,
      fontSize: 8,
      '@media  screen and (max-width: 960px)': {
         marginLeft: 350,
      },
      '@media  screen and (max-width: 600px)': {
         marginLeft: 220,
      },
      '@media screen and (max-width: 500px)': {
         marginLeft: 110,


      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: 45,
      },
   },
   barre: {
      marginTop: 95,
      display: "flex",
      '@media  screen and (max-width: 960px)': {
         display: "block",
      },
   },

   btn: {
      width: 90,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 210,
      fontSize: 11,
      '@media  screen and (max-width: 960px)': {
         marginLeft: 15,
         marginTop: 20,
         marginRight: 2,
      },
   },
   filedbtn: {
      display: "flex",
   },

   scroll: {
      width: 270,
      height: 540,
    
   },
   check: {
      '@media  screen and (max-width: 960px)': {
         display: "inline-block",
         marginBottom: 10,
      },

   },
   choix: {
      display: "inline",
      '@media  screen and (max-width: 600px)': {
         display: "flex",      
            marginLeft: 15,
            marginTop: 10,
            
      },
      '@media  screen and (max-width: 320px)': {
         display: "inline",
         paddingBottom: 35,
         marginLeft: 0,
         marginTop: 0,
         marginRight: 2,

          
      },
     
   },
   choix1 :{
      '@media  screen and (max-width: 960px)':
      {
         marginTop: 22,
      },
      '@media  screen and (max-width: 600px)': {
         marginTop: 2,
      },
     
   },

   categnom: {
      fontSize: 14,
   },
   prix: {
      fontSize: 16,
      marginTop: 12,
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 14,
      },
      '@media  screen and (max-width: 320px)': {
      
       
         marginLeft: 14,
          
      },
   },
   categlabel: {
      marginTop: 8,
      fontSize: 16,
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 14,
         marginBottom: 8,
      },
   },
   icon: {
      fontSize: 22,
      color: "#74B5BD",
   },
   openicon: {
      marginLeft: 140,
      
      color: 'transparent',
      '&:hover': {
         background: 'transparent',
      },
      '@media  screen and (max-width: 960px)': {
         marginLeft: "83%",
      },
         '@media  screen and (max-width: 600px)': {
            marginLeft: "70%",
         },
         '@media screen and (max-width: 500px)': {
            marginLeft:"62%",
   
   
         },
         '@media  screen and (max-width: 320px)': {
            marginLeft: "48%",
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
         marginLeft: 28,
         '@media  screen and (max-width: 600px)': {
            display: "block",      
               marginLeft: 15,
         },
      },
   },
   duree :{
      marginTop: 5,
      width: 230,
      marginLeft: 16,
      color: "#74B5BD",
      
      '@media  screen and (max-width: 960px)':
      {
         width: 140,
         marginTop: 8,
         fontSize: 5
       
      },
      '@media  screen and (max-width: 320px)': {
      
         width: 160,
         marginLeft: 24,
          
      },

   },
   dureenom :{
      fontSize: 16,
      marginTop: 10,
      '@media  screen and (max-width: 960px)':
      {
         fontSize: 14,
      },
      '@media  screen and (max-width: 320px)':
      {
         fontSize: 14,
         marginLeft: 22,
         marginTop: 22,
      },
   },

   all :{
      '@media  screen and (max-width: 600px)': {
         display: "flex",      
          
      },
      '@media  screen and (max-width: 320px)': {
         display: "block",      
          
      },

   }
}));