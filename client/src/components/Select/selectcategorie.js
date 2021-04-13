import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
 
 const  Selectcateg = ( {onChangeData2,categorie})  => {
  const classes = useStyles();
  return (
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
export default Selectcateg;