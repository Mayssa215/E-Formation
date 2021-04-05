import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    autocomplete: {
      width:300,
      marginTop:15,
      marginBottom:8,
      '@media  screen and (max-width: 960px)':
      {
        width:250,
        marginTop:15,
        marginBottom:8,
  
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
}));