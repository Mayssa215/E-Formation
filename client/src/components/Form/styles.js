import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      marginLeft: theme.spacing(4),
      width: '80%',
    },
  },
  form: {
    marginTop: 30,
    '@media screen and (max-width: 1000px)': {
      marginLeft: 20,
      '@media screen and (max-width: 600px)': {
        marginLeft: -50,
      },
    },
  },
Textfiled:{
 
},
  paper: {
    padding: theme.spacing(2),
    width: 900,
    height: 500,
    marginTop: 150,
    marginLeft: 100,
    marginBottom: 150,
    '@media screen and (max-width: 1200px)': {
      width: 780,
      height: 850,
      marginLeft: 50,
    '@media screen and (max-width: 800px)': {
      width: 580,
      height: 850,
      marginLeft: 50,
      '@media screen and (max-width: 600px)': {
        width: 320,
        height: 830,
        marginLeft:70,
        '@media screen and (max-width: 450px)': {
          width: 300,
          marginRight:  100,
          marginLeft: 5,        
      '@media screen and (max-width: 321px)': {
       width: 220,
       marginLeft:10,
          },
        },
      },
    },
  },
},
  fileInput: {
    width: '97%',
    marginTop: 15,
    marginLeft: 43,

  },
  buttonSubmit: {
    marginTop: 20,
    marginLeft: 40,
    '@media screen and (max-width: 1000px)': {
      marginLeft: 150,
    },
  },
  Texteara: {
    borderRadius: 4,

  },
  div: {
    marginLeft: 43,
    paddingTop: 20,
  },
  label: {
    paddingRight: 5,
    color: "blue",
    paddingBottom: 5,
    marginTop: 15,
    '@media screen and (max-width: 1000px)': {
    },
  },
error : {
color :' #ff1744',
},

upload : {
width: 150,
height:1000,
},
}));