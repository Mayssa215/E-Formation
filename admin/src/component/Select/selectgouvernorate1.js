import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';

 const  Selectgouvernorat = ({onChangeGouvernorat,gouvernorat } )  => {
    const classes = useStyles();
     
  return (

      <Autocomplete
      required
          onChange={onChangeGouvernorat}
          options={gouvernorat}
  
          getOptionLabel={(option) => option.nom}
          renderInput={(params) => <TextField    {...params} label="Gouvernorat"    variant="outlined" 
          className={classes.autocomplete}
          />}
        />
  );
};
export default Selectgouvernorat;