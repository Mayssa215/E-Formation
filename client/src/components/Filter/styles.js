import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
   Paper: {
      padding: theme.spacing(2),
      width: 230,
      height: 520,
      marginLeft:45,
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
         marginLeft: 10,
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
  
  
 
   iconhide:{
      fontSize: 22, 
      color: "#fa7d39 ",
   },

   hide: {
      width: 250,
      fontSize: 12,
      color:"#4e3e8c",
      backgroundColor:'#ffffff',
      boxShadow:"10px 10px 10px #f5f5f5",
      '&:hover ': {
         background: '#4e3e8c',
         color:"#f5f5f5",

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
         marginLeft: "63%",

      },
      '@media  screen and (max-width: 320px)': {
         marginLeft: "30%",
         fontSize: 10,
         width: 220,



      },

   },

   barre: {
      marginTop: 95,
      display: "flex",
      '@media  screen and (max-width: 960px)': {
       display: "block",
       },
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
     //barre de recherche : 
    search1: {
      borderRadius: theme.shape.borderRadius,
      marginLeft: 550,
      marginRight:260,
      display: 'flex',
      position:'realative',
      backgroundColor:"#f5f5f5",
      '&:hover': {
        backgroundColor:"#f5f5f5",
      },
        [theme.breakpoints.up('sm')]: {
      width: 'auto', 
      }, 
      '@media  screen and (max-width: 960px)': {
         marginLeft: 350,
         marginRight:220,
     },
     '@media  screen and (max-width: 600px)': {
         marginLeft: 240,
         marginRight:220,
     },
     '@media  screen and (max-width: 500px)': {
      marginLeft: 140,
      marginRight:1,

  },
  '@media  screen and (max-width: 320px)': {
   marginLeft: 70,
   marginRight:25,

},
   },
    searchIcon1: {
       position: 'absolute',
       pointerEvents: 'none',
       alignItems: 'center',
       justifyContent: 'center',
       marginTop:5,
       marginLeft:10,
       color:'#fa7d39',
    },
 
    inputInput: {
        // vertical padding + font size from searchIcon
        paddingLeft:40,
        transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
         width: '22ch',
        },
      },
      '@media  screen and (max-width: 500px)': {
         width: '12ch',
         '&:focus': {
          width: '16ch',
         },
      },
         '@media  screen and (max-width: 320px)': {
            width: '12ch',
            '&:focus': {
             width: '13ch',
            },
     },
    },
}));