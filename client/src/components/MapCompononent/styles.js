import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    paper: {
        position: 'absolute',
        width: 1200,
        height:550,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline:0,
        marginTop: '7%',
        marginLeft:120,
        borderRadius: 10,

        '@media  screen and (max-width:1480px)':
        {
          marginTop: '7%',
          width: 1200,
          marginLeft: 70,
          height: 550,
          borderRadius: 10,
    
        },
        '@media  screen and (max-width:1380px)':
        {
          marginTop: '7%',
          width: 1150,
          marginLeft: 70,
          height: 550,
          borderRadius: 10,
    
        },
        '@media  screen and (max-width:1280px)':
        {
          marginTop: '7%',
          width: 930,
          marginLeft: 80,
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
div:{
    marginTop:40,
    width:1200,
    height:420,
   
    borderRadius: "2%",
    '@media  screen and (max-width:1380px)':
    {
      width:1150,
      height:420,

    },
    '@media  screen and (max-width:1280px)':
    {
        width:930,
        height:380,

    },
    '@media  screen and (max-width: 1000px)':
    {
      width: 900,
      height: 380,
     

    },
    '@media  screen and (max-width: 960px)':
    {
      width: 830,
      height: 350,
     

    },
    '@media  screen and (max-width: 900px)':
    {
      width: 800,
      height: 380,
     

    },
    '@media  screen and (max-width: 800px)':
    {
      width: 720,
      height: 360,
     


    },
    '@media  screen and (max-width: 750px)':
    {
      width: 680,
      height: 360,
     

    },
    '@media  screen and (max-width: 700px)':
    {
      width: 620,
      height: 360,
     

    },
    '@media  screen and (max-width: 680px)':
    {
      width: 620,
      height: 360,
     

    },
    '@media  screen and (max-width: 650px)':
    {
      width: 580,
      height: 360,
     

    },
    '@media  screen and (max-width: 600px)':
    {
      width: 540,
      height: 360,
     

    },

    '@media  screen and (max-width: 599px)':
    {
      width: 550,
      height: 350,
      

    },
    '@media  screen and (max-width: 560px)':
    {
      width: 500,
      height: 320,
    

    },
    '@media  screen and (max-width: 500px)':
    {
      width: 450,
      height: 300,
      

    },
    
},
svg :{
 
    marginTop:"18%",
  
  },  price: {
        marginLeft:-40,
        position: "absolute",
        marginTop:30,
      
          
         
       },  

       prix : {
        color:'#ffffff',
        fontSize:18,
   
        
       },
       tnd :{
        marginLeft:3,
        color:'#ffffff',
        fontSize:10,},


        mauve :{
            marginLeft:-60,
       
     width:70,
    height:110,},

    namecard:{
      
       marginTop:-10,
       marginLeft:"-70%",
       fontSize:24,
       display:"flex",

      
    
    },
  
    image:{
        marginLeft:0,
        marginTop:30,
        width:230,
        
    },
    gouvernorats:{
width:"80%" ,
paddingRight:450,  
marginLeft:50,

'@media  screen and (max-width:1280px)':
{
    width:"60%" ,
paddingRight:350,  
marginLeft:30,

},
'@media  screen and (max-width: 1000px)':
{
  
   
    paddingRight:450,  
    marginLeft:0,

},
'@media  screen and (max-width: 960px)':
{
  
    paddingRight:400,  
    marginLeft:0,

},
'@media  screen and (max-width: 900px)':
{
    paddingRight:390,  
    marginLeft:0,

 

},
'@media  screen and (max-width: 800px)':
{
    paddingRight:330,  
    marginLeft:0,


},
'@media  screen and (max-width: 750px)':
{ paddingRight:300,  
    marginLeft:0,
 

},
'@media  screen and (max-width: 700px)':
{
    paddingRight:280,  
   
 

},
'@media  screen and (max-width: 680px)':
{
    paddingRight:250,  

 

},
'@media  screen and (max-width: 650px)':
{
    paddingRight:230,  

 

},
'@media  screen and (max-width: 600px)':
{
    paddingRight:200,  

 

},

'@media  screen and (max-width: 599px)':
{
    paddingRight:200,  
marginLeft:10,

},
'@media  screen and (max-width: 560px)':
{
    paddingRight:190,  


},
'@media  screen and (max-width: 500px)':
{
    paddingRight:150,  

  

},





 },
auto:{
    display:"flex",
    marginTop:20,
},
popup:{
    display:"flex",
    width:230,
},

  
}));