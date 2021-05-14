import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  Sign: {
    marginTop: '8%',
    width: 930,

    height: 500,
    borderRadius: 10,
    '@media  screen and (max-width:1280px)':
    {
      marginTop: '7%',
      width: 930,
      marginLeft: 0,
      height: 500,
      borderRadius: 10,

    },
    '@media  screen and (max-width: 1000px)':
    {
      width: 900,
      height: 500,
      borderRadius: 10,
      marginTop: '12%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 960px)':
    {
      width: 830,
      height: 500,
      borderRadius: 10,
      marginTop: '11%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 900px)':
    {
      width: 800,
      height: 500,
      borderRadius: 10,
      marginTop: '12%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 800px)':
    {
      width: 770,
      height: 460,
      borderRadius: 10,
      marginTop: '18%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 750px)':
    {
      width: 680,
      height: 460,
      borderRadius: 10,
      marginTop: '18%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 700px)':
    {
      width: 670,
      height: 460,
      borderRadius: 10,
      marginTop: '18%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 680px)':
    {
      width: 640,
      height: 460,
      borderRadius: 10,
      marginTop: '20%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 650px)':
    {
      width: 610,
      height: 460,
      borderRadius: 10,
      marginTop: '20%',
      marginLeft: 0,

    },
    '@media  screen and (max-width: 600px)':
    {
      width: 560,
      height: 460,
      borderRadius: 10,
      marginTop: '20%',
      marginLeft: 0,

    },

    '@media  screen and (max-width: 599px)':
    {
      width: 560,
      height: 460,
      borderRadius: 10,
      marginTop: '20%',
      marginLeft: 0,


    },
    '@media  screen and (max-width: 560px)':
    {
      width: 520,
      height: 430,
      borderRadius: 10,
      marginTop: '30%',
      marginLeft:0,

    },
    '@media  screen and (max-width: 320px)':
    {
      width: 310,
      height: 390,
      borderRadius: 10,
      marginTop: '7%',
      marginLeft:12,

    },
  },

  email: {
    marginBottom: 20,
    width: 300,
    color: '#4e3e8c',
    '@media  screen and (max-width: 960px)':
    {
      marginBottom: 20,
      width: 270,
      color: '#4e3e8c',
    },

    '@media  screen and (max-width: 600px)':
    {
      marginBottom: 20,
      width: 230,
      color: '#4e3e8c',

    },
    '@media  screen and (max-width: 560px)':
    {
      marginBottom: 20,
      width: 200,
      color: '#4e3e8c',

    },
    '@media  screen and (max-width: 320px)':
    {
      marginBottom: 20,
      width: 255,
      color: '#4e3e8c',

    },
  },
  mdp: {
    width: 300,
    marginBottom: 20,
    '@media  screen and (max-width: 960px)':
    {
      marginBottom: 20,
      width: 270,

    },
    '@media  screen and (max-width: 600px)':
    {
      marginBottom: 20,
      width: 230,

    },
    '@media  screen and (max-width: 560px)':
    {
      marginBottom: 20,
      width: 200,

    },
    '@media  screen and (max-width: 320px)':
    {
      marginBottom: 20,
      width: 255,

    },
  },
  oublie: {
    textDecoration: "none",
    fontSize: 16,
    color: "#fa7d39",
    marginLeft: 160,
    '&:hover ': {
      fontWeight: "bolder",

    },
    '@media  screen and (max-width: 960px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 66,

    },
    '@media  screen and (max-width: 800px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 60,

    },
    '@media  screen and (max-width: 750px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 34,

    },

    '@media  screen and (max-width: 700px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 30,

    },
    '@media  screen and (max-width: 680px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 20,

    },
    '@media  screen and (max-width: 650px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 8,

    },
    '@media  screen and (max-width: 600px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 36,

    },
    '@media  screen and (max-width: 560px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 25,

    },
    '@media  screen and (max-width: 320px)':
    {
      textDecoration: "none",
      fontSize: 16,
      color: "#fa7d39",
      marginLeft: 46,

    },
  },
  mailicon: {
    color: '#4e3e8c',
  },
  input: {
    marginTop: 35,
    marginLeft: 50,
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 35,
      marginLeft: 15,
  

    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 15,
      marginLeft: 15,
  

    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 15,
      marginLeft: 25,
  

    },
  },

  btn: {
    marginTop: 25,
    marginLeft: 100,
    marginBottom: 20,
    width: 200,
    color:'#ffffff',
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",

    },
    '@media  screen and (max-width: 960px)':
    {
      marginTop: 25,
      marginLeft: 80,
      marginBottom: 20,
      width: 200,
      background: '#4e3e8c',

    },
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 25,
      marginLeft: 45,
      marginBottom: 20,
      width: 150,
      background: '#4e3e8c',
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 25,
      marginLeft: 35,
      marginBottom: 20,
      width: 150,
      background: '#4e3e8c',
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 20,
      marginLeft: 55,
      marginBottom: 10,
      width: 170,
      background: '#4e3e8c',
    },
  },
  inscrit: {
    textDecoration: "none",
    fontSize: 12,
    marginLeft: -8,
    color: '#4e3e8c',
    '&:hover ': {
      fontWeight: "bolder",
      background: 'transparent',
    },
    '@media  screen and (max-width: 960px)':
    {
      textDecoration: "none",
      fontSize: 13,
      color: '#4e3e8c',
      marginLeft:-5,
    },
    '@media  screen and (max-width: 600px)':
    {
      textDecoration: "none",
      fontSize: 13,
      color: '#4e3e8c',
    },
    '@media  screen and (max-width: 560px)':
    {
      textDecoration: "none",
      fontSize: 12,
      color: '#4e3e8c',
    },
    '@media  screen and (max-width: 320px)':
    {
      textDecoration: "none",
      fontSize: 12,
      color: '#4e3e8c',
    },
  },
  inscription: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 52,
    '@media  screen and (max-width: 960px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 22,
      marginRight:-40,
  
    },
       '@media  screen and (max-width: 900px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 50,
      marginRight:-90,
  
    },
    '@media  screen and (max-width: 800px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 60,
      marginRight:-140,
  
    },
    '@media  screen and (max-width: 650px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 45,
      marginRight:-160,

  
    },
    '@media  screen and (max-width: 600px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 10,
      marginRight:-117,

  
    },
    '@media  screen and (max-width: 320px)':
    {
      fontSize: 12,
      marginTop: 5,
      marginLeft: 18,
      marginRight:-117,

  
    },
  },
 
  title: {
    fontSize: 24,
    color: "#fa7d39",
    marginLeft: 122,
    marginTop: 75,
    '@media  screen and (max-width: 960px)':
    {
      fontSize: 24,
      color: "#fa7d39",
      marginLeft: 98,
      marginTop: 75,

    },
    '@media  screen and (max-width: 800px)':
    {
      fontSize: 24,
      color: "#fa7d39",
      marginLeft: 75,
      marginTop: 75,
    },
    '@media  screen and (max-width: 750px)':
    {
      fontSize: 24,
      color: "#fa7d39",
      marginLeft: 65,
      marginTop: 75,
    },
    '@media  screen and (max-width: 700px)':
    {
      fontSize: 24,
      color: "#fa7d39",
      marginLeft: 60,
      marginTop: 75,
    },
    '@media  screen and (max-width: 600px)':
    {
      fontSize: 20,
      color: "#fa7d39",
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 680px)':
    {
      fontSize: 20,
      color: "#fa7d39",
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 650px)':
    {
      fontSize: 20,
      color: "#fa7d39",
      marginLeft: 50,
      marginTop: 75,

    },
    '@media  screen and (max-width: 560px)':
    {
      fontSize: 20,
      color: "#fa7d39",
      marginLeft: 35,
      marginTop: 75,

    },
    '@media  screen and (max-width: 320px)':
    {
      fontSize: 22,
      color: "#fa7d39",
      marginLeft: 58,
      marginTop: 45,

    },
  },


  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 0,
    marginLeft:-50,
    marginTop:20,
    '@media  screen and (max-width: 1280px)':
    {
    
      marginLeft:78,
      marginTop:-101,

    },
    '@media  screen and (max-width: 960px)':
    {
    
      marginLeft:-10,
      marginTop:-101,

    },
  },
  gif: {
    marginTop: 35,
    marginLeft: 30,
    '@media  screen and (max-width: 1280px)':
    {
    
      marginTop: 35,
      marginLeft: -30,

    },
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 120,
      width: 370,
      marginTop: 70,
    },
    '@media  screen and (max-width: 750px)':
    {
      marginLeft: 125,
      width: 300,
      marginTop: 90,


    },
    '@media  screen and (max-width: 700px)':
    {
      marginLeft: 125,
      width: 300,
      marginTop: 90,


    },
    '@media  screen and (max-width: 680px)':
    {
      marginLeft: 120,
      width: 270,
      marginTop: 100,

    },
    '@media  screen and (max-width: 600px)':
    {
      marginLeft: 85,
      width: 270,
      marginTop: 70,


    },
    '@media  screen and (max-width: 599px)':
    {
      marginLeft: -115,
      width: 270,
      marginTop: 70,


    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft:-100,
      width: 220,
      marginTop: 100,
    },
    '@media  screen and (max-width: 320px)':
    {

      width: 0,

    },
  },
  
return : {
  marginTop: 10,
  marginLeft:3,
  color: 'transparent',
  '&:hover': {
    background: 'transparent',
    transform: " scale(1.2)",
  },
},
returnicon :{
fontSize:30,
color:'#4e3e8c',

},
  gr1: {
    marginTop: 30,
    marginLeft: 80,
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 20,
    },
    '@media  screen and (max-width: 600px)':
    {
      marginTop: 50,

      marginLeft: 10,
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 50,

      marginLeft: 5,
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 30,

      marginLeft: 10,
    },
  },
  gr2: {
    marginTop: 117,
    marginLeft: 120,
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 80,
        },
        '@media  screen and (max-width: 600px)':
        {
          marginTop: 145,
          marginLeft: 150,

        },
        '@media  screen and (max-width: 560px)':
        {
          marginTop: 145,
          marginLeft: 95,

        },
        '@media  screen and (max-width: 320px)':
        {
          marginTop: 440,
          marginLeft: -90,

        },
  },

  compte: {
    fontSize: 24,
    marginTop: 8,
    marginLeft: 83,
    color: '#fa7d39',
'@media  screen and (max-width: 960px)':
    {
      marginLeft: 33,
    },
    '@media  screen and (max-width: 600px)':
    {
      marginLeft: 10,
      fontSize: 18,
      marginTop:22,

    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 15,
      fontSize: 20,
      marginTop: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 57,
      fontSize: 24,
      marginTop: 20,
      marginRight:-130,

    },
  },

  email1 : {
    marginBottom: 20,
    width: 300,
    color: '#4e3e8c',
    '@media  screen and (max-width: 960px)':
    {
      width: 250,
    },
    '@media  screen and (max-width: 560px)':
    {
      width: 240,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },
  inputs : {
    width: 300,
    marginBottom: 20,
    '@media  screen and (max-width: 960px)':
    {
      width: 250,
      marginBottom: 20,
    },
    '@media  screen and (max-width: 560px)':
    {
      width: 240,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },
 
  imguser: {
    marginTop: 50,
    marginLeft: 70,
    '@media  screen and (max-width: 960px)':
    {
      width: 300,
      marginLeft:130,
      marginTop: 110,

   
    },
    '@media  screen and (max-width: 600px)':
    {

      width: 120,
      marginLeft:130,
      marginTop: 20,
    },
    '@media  screen and (max-width: 560px)':
    {

      width: 120,
      marginLeft:30,
      marginTop: 20,
    },
    '@media  screen and (max-width: 320px)':
    {
      width: 0,

    },

  },
  buttonuser: {
    marginLeft: 300,
    marginBottom: 20,
    width: 200,
    marginTop: -20,
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width: 960px)':
    {
      marginTop: 10,
      marginLeft: 180,
    },
    '@media  screen and (max-width: 560px)':
    {
      marginTop: 10,
      marginLeft: 150,
    },
    '@media  screen and (max-width: 320px)':
    {
      marginTop: 0,
      marginLeft: 80,
      width: 150,


    },

  },

  papercentre: {
    width: 1220,
    height: 650,
    marginTop: 50,
    marginLeft: 140,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 1220,
    height: 560,
    marginTop: 120,
    marginLeft: 80,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 1220,
    height: 560,
    marginTop: 120,
    marginLeft: 20,

    },
    '@media  screen and (max-width:960px)':
    {
    width: 920,
    height: 560,
    marginTop: 120,
    marginLeft: 10,

    },
    '@media  screen and (max-width:600px)':
    {
    width: 560,
    height: 560,
    marginTop: 120,
    marginLeft: 10,

    },
    '@media  screen and (max-width:560px)':
    {
    width: 520,
    height: 560,
    marginTop: 80,
    marginLeft: 15,

    },
    '@media  screen and (max-width:320px)':
    {
    width: 310,
    height: 920,
    marginTop: 20,
    marginLeft: -2,

    },

  },
  comptecentre: {
    fontSize: 24,
    marginTop: 16,
    marginLeft: 33,
    color: '#fa7d39',
    '@media  screen and (max-width:600px)':
    {
 marginLeft: 10,
      fontSize: 18,
      marginTop:22,
    },
    '@media  screen and (max-width:320px)':
{
  fontSize: 24,
  marginTop: 20,
  marginLeft: 57,
  marginRight: -130,
    },

  },

  textf: {
    marginTop: 15,
    width: 300,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 15,
      width: 250,

    },
    '@media  screen and (max-width: 560px)':
    {
      width: 240,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
 
    
  },
  textf2: {
    marginTop: 15,
    marginBottom: 15,
    width: 300,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 15,
      width: 250,

    },
    '@media  screen and (max-width: 560px)':
    {
      width: 240,


    },
    '@media  screen and (max-width: 320px)':
    {
      width: 290,


    },
  },


  col1: {
    marginLeft: 30,
    marginTop: -15,
    '@media  screen and (max-width: 600px)':
    {

      marginLeft: 10,
      marginTop: 35,

    },
    '@media  screen and (max-width: 560px)':
    {

      marginLeft: 5,
      marginTop: 35,

    },
    '@media screen and (max-width: 560px)':
    {

      marginLeft: 10,
      marginTop: 25,

    },
  },

  radio: {
    display: "flex",
    marginBottom: 0,
  },
  words: {
    fontSize: 12,
  },
  labeln: {
    color: '#fa7d39',

  },
  labela: {
    color: '#fa7d39',
    marginBottom: 5,
    '@media  screen and (max-width: 960px)':
    {
    width:180,
    },
    '@media  screen and (max-width: 600px)':
    {

    width:150,
    },
  },

  filebase: {
    marginTop: 15,
    '@media  screen and (max-width: 320px)':
    {
  
      marginTop: 10,


    },
  },
  col2: {
    marginLeft: 80,
    marginTop: 120,
    '@media  screen and (max-width: 600px)':
    {

      marginLeft: 160,
      marginTop: 145,

    },
    '@media  screen and (max-width: 560px)':
    {

      marginLeft: 100,
      marginTop: 145,

    },
    '@media  screen and (max-width: 320px)':
    {
  
      marginTop: 538,
      marginLeft:-95,

    },
  },
  imgcentre: {
    marginLeft: 120,
    marginTop: 80,
    '@media  screen and (max-width: 960px)':
    {
      width:340,
      marginLeft: 110,
      marginTop: 50,
      height:450,

    },
    '@media  screen and (max-width: 600px)':
    {

      width: 120,
      marginLeft:130,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width: 560px)':
    {

      width: 120,
      marginLeft:50,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width: 320px)':
    {

      width: 0,
     

    },
  },
  btncentre: {
    marginLeft: 260,
    marginBottom: 20,
    width: 200,
    marginTop: 30,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width: 960px)':
    {
      marginLeft: 200,
      marginTop: -8,


    },
    '@media  screen and (max-width: 600px)':
    {
      marginLeft: 180,
      marginTop: 5,


    },
    '@media  screen and (max-width: 560px)':
    {
      marginLeft: 180,
      marginTop: 5,


    },
    '@media  screen and (max-width: 320px)':
    {
      marginLeft: 60,
      marginTop: 20,
      width: 160,
    },
  },
  paperformer: {
    width: 1220,
    height: 750,
    marginTop: 60,
    marginLeft: 140,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 1220,
      height: 630,
      marginTop: 60,
      marginLeft: 90,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 1220,
      height: 630,
      marginTop: 60,
      marginLeft: 25,

    },
    '@media  screen and (max-width:960px)':
    {
      width: 920,
      height: 655,
      marginTop: 60,
      marginLeft: 5,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 560,
      height: 655,
      marginTop: 60,
      marginLeft: 5,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 520,
      height: 655,
      marginTop: 60,
      marginLeft:3 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 310,
      height: 1110,
      marginTop: 25,
      marginLeft:-3 ,

    },



  },
  labels: {
    color: '#fa7d39',
    marginTop: 20,

  },
  imgformer: {
    marginLeft: 150,
    marginTop: 150,
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 110,
      marginTop: 120,
      width:350,
      height:400,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 120,
      marginLeft:130,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 120,
      marginLeft:50,
      marginTop: 20,
      height:120,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 0,
      marginLeft:50,
      marginTop: 20,
      height:120,

    },
  },
  colf1: {
    marginLeft: 60,
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 10,


    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 5,


    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 10,


    },
  },

  colf2: {
    marginLeft: 140,
    marginTop: 113,
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 140,
      marginTop: 138,

    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 155,
      marginTop: 135,

    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 100,
      marginTop: 135,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: -95,
      marginTop: 570,

    },
  },
  filebase1: {
    marginTop: 10,
    marginBottom: 22,
    '@media  screen and (max-width:960px)':
    {
      marginBottom: 15,


    },
  },
  compteformer: {
    fontSize: 24,
    marginTop: 10,
    marginLeft: 60,
    color: '#fa7d39',
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 57,
      marginTop: 35,


    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 30,
      fontSize: 22,
      marginRight:-60,


    },
    '@media  screen and (max-width:320px)':
    {
      fontSize: 24,
      marginTop: 20,
      marginLeft: 57,
      marginRight: -130,
        },
  },
  btnformer: {
    marginLeft: 300,
    marginBottom: 20,
    marginTop: 30,
    width: 200,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 250,
      marginBottom: 20,
      marginTop: 5,
      width: 200,


    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 200,
      marginBottom: 20,
      marginTop: 5,
      width: 180,


    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: 160,
      marginBottom: 20,
      marginTop: 5,
      width: 180,


    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 65,
      marginBottom: 20,
      marginTop: 5,
      width: 180,


    },
  },
  error: {
    color: ' #ff1744',
  },


  forget: {
    width: 900,
    height: 500,
    marginTop: 100,
    marginLeft: 300,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 250,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 180,

    },
    '@media  screen and (max-width:1150px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 80,
    },
    '@media  screen and (max-width:960px)':
    {
      width: 850,
      height: 485,
      marginTop: 100,
      marginLeft: 40,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 560,
      height: 405,
      marginTop: 100,
      marginLeft: 15,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 520,
      height: 390,
      marginTop: 130,
      marginLeft:10 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 310,
      height: 340,
      marginTop: 25,
      marginLeft:-3 ,
    },
  },
  paragraph: {
    fontSize: 18,
    fontFamily: "Arial",
    marginLeft: 15,
    '@media  screen and (max-width:960px)':
    {
      width: 500,
      marginTop: 25,
      marginLeft:15 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 280,
      marginTop: 15,
      marginLeft:15 ,
      fontSize: 14,

    },
  },
  emailforget: {
    marginTop: 50,
    marginLeft: 50,
    width: 280,
    '@media  screen and (max-width:600px)':
    {
      marginTop: 30,
      marginLeft: 120,
      width: 280,

    },
    '@media  screen and (max-width:320px)':
    {
      marginTop: 10,
      marginLeft: 10,
      width: 280,

    },
  },
  btnforget: {
    marginTop: 30,
    marginLeft: 110,
    marginBottom: 20,
    width: 150,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop: 30,
      marginLeft: 180,
      marginBottom: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginTop: 20,
      marginLeft: 70,
      marginBottom: 20,

    },
  },
  imgforget: {
    marginTop: 25,
    '@media  screen and (max-width:960px)':
    {
      marginTop:80,
      marginLeft:-80,
      width:350,
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop:0,
      width:0,
      height:0,
    },
    '@media  screen and (max-width:320px)':
    {
      width:0,
      height:0,
      marginLeft:-21,
    
    },
  },
  retrouver: {
    marginTop: 50,
    color: '#fa7d39',
    fontSize: 24,
    marginLeft: 15,
    '@media  screen and (max-width:960px)':
    {
      marginTop: 100,
    },
    '@media  screen and (max-width:600px)':
    {
      marginTop: 40,
      marginLeft: 100,

    },

    '@media  screen and (max-width:320px)':
    {
      marginTop: 20,
      fontSize: 18,
      marginLeft: 13,

    },
  },

  reset: {
    marginLeft: -55,
    marginTop:0,
    '@media  screen and (max-width:1280px)':
    {
      marginLeft: 5,
      marginTop:0,
    },
    '@media  screen and (max-width:960px)':
    {
      marginLeft: 85,
      marginTop:0,
      height:400,
    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 15,
      marginTop:45,
      height:300,
      width:270,
    },
    '@media  screen and (max-width:560px)':
    {
      marginLeft: -1,
      marginTop:55,
      height:300,
      width:260,
    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 5,
      marginTop:85,
      height:0,
      width:0,
    },
  },
  colreset: {
    marginLeft: 50,
    marginTop: 30,
    '@media  screen and (max-width:600px)':
    {
    marginLeft: 20,
    marginTop: 30,
    },
    '@media  screen and (max-width:320px)':
    {
    marginLeft: 10,
    marginTop: 30,
    },
  },
  changer: {
    marginTop: 40,
    color: '#fa7d39',
    fontSize: 24,
    marginLeft: 45,
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 20,
      fontSize: 20,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 20,
      fontSize: 20,
      marginTop: 20,

    },
  },
  btnreset: {
    marginTop: 10,
    marginLeft: 130,
    marginBottom: 20,
    width: 150,
    color: "#f5f5f5",
    background: '#4e3e8c',
    '&:hover ': {
      background: '#4e3e8c',
      color: "#f5f5f5",
      transform: " scale(1.1)",
    },
    '@media  screen and (max-width:600px)':
    {
      marginLeft: 60,

    },
    '@media  screen and (max-width:320px)':
    {
      marginLeft: 80,

    },
  },

  forget2: {
    width: 900,
    height: 500,
    marginTop: 100,
    marginLeft: 300,
    borderRadius: 10,

    '@media  screen and (max-width:1400px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 250,

    },
    '@media  screen and (max-width:1280px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 180,

    },
    '@media  screen and (max-width:1150px)':
    {
      width: 900,
      height: 500,
      marginTop: 120,
      marginLeft: 80,
    },
    '@media  screen and (max-width:960px)':
    {
      width: 850,
      height: 485,
      marginTop: 100,
      marginLeft: 40,

    },
    '@media  screen and (max-width:600px)':
    {
      width: 560,
      height: 405,
      marginTop: 100,
      marginLeft: 15,

    },
    '@media  screen and (max-width:560px)':
    {
      width: 520,
      height: 390,
      marginTop: 130,
      marginLeft:10 ,

    },
    '@media  screen and (max-width:320px)':
    {
      width: 310,
      height: 340,
      marginTop: 25,
      marginLeft:-3 ,
    },

  },

}));
