import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';


 const  Selectgouvernorat = ({handleChangecity,filtredCity,value } )  => {
    const classes = useStyles();
    const [isuser, setisuser]=useState((JSON.parse(localStorage.getItem('profile'))));
  return (
    isuser ? 
    <Autocomplete
    required
    onChange={handleChangecity}
    options={filtredCity}
    value={{nom : value}}   
    getOptionSelected={(option,value) => option.nom === value.nom}
    getOptionLabel={(option) => option.nom}
    renderInput={(params) => <TextField    {...params} label="ville"   
    variant="outlined"   className={classes.autocomplete}
    />}
  />
  :
  <Autocomplete
  required
  onChange={handleChangecity}
  options={filtredCity}
  getOptionLabel={(option) => option.nom}
  renderInput={(params) => <TextField    {...params} label="ville"   
  variant="outlined"   className={classes.autocomplete}
  />}
/>
  );
};
export default Selectgouvernorat;