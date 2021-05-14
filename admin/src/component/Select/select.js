import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
 
 const  Select = ( {onChangeData2,categorie, value})  => {
  const [isuser, setisuser]=useState((JSON.parse(localStorage.getItem('profile'))));
  const classes = useStyles();
  return (
    isuser ?
    <Autocomplete
      className={classes.Text}
      id="categ"
      onChange={onChangeData2}
      value={{nom : value}}   
      getOptionSelected={(option,value) => option.nom === value.nom}
      options={categorie}
      getOptionLabel={(option) => option.nom}
      renderInput={(params) => <TextField   required {...params} label="Categorie"   
      variant="outlined"   style={{ width: 360, marginTop: 12 }}
      />}
    />
    :
    <Autocomplete
    className={classes.Text}
    id="categ"
    onChange={onChangeData2}
    options={categorie}
    getOptionLabel={(option) => option.nom}
    renderInput={(params) => <TextField   required {...params} label="Categorie"   
    variant="outlined"   style={{ width: 360, marginTop: 12 }}
    />}
  />
  );
};
export default Select;