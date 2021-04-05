import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

 const  Selectspecialty = ( {onChangeData2 , speciality})  => {

 
 
  
  const classes = useStyles();
  return (
    <Autocomplete
    required
      onChange={onChangeData2}
      options={speciality}
      getOptionLabel={(option) => option.nom}
      renderInput={(params) => <TextField required   {...params} label="Spécialité"   
      variant="outlined"  
      className={classes.autocomplete}
      />}
    />
  );
};
export default Selectspecialty;