import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

 const  Selectspecialty = ( {onChangeData2 , speciality, value})  => {

const [isuser, setisuser]=useState((JSON.parse(localStorage.getItem('profile'))));
  const classes = useStyles();


  return (
    isuser ?
    <Autocomplete
    required
      onChange={onChangeData2}
      options={speciality}
      getOptionLabel={(option) => option.nom}

      value={{nom : value}}   
      getOptionSelected={(option,value) => option.nom === value.nom}
      renderInput={(params) => <TextField required   {...params} label="Spécialité" 
      variant="outlined"  
      className={classes.autocomplete}
      />}
    />
    :
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