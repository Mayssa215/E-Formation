import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';
import PlaceIcon from '@material-ui/icons/Place';


function valuetext(value) {
  return `${value}TND`;
}
function valuetext1(value) {
  return `${value}H`;
}
const Filter = () => {
  const classes = useStyles();
 
 
  //const categorie = useSelector(state => state.categorie)

  const [value, setValue] = React.useState(['', '']);
  const [heur, setheur] = React.useState(['', '']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newheur) => {
    setheur(newheur);
  };
 
 
  return (
    <div >
     
          <div className={classes.all}>
          <div className={classes.prixgouville} >
            <Typography id="range-slider" className={classes.prix}>
              Prix
           </Typography>
           
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              step={50}
              min={0}
              max={5000}
              className={classes.div}

            />
            
            <div>
            <Typography id="range-slider" className={classes.dureenom} gutterBottom>
              Durée de formation
           </Typography>
            <Slider
              value={heur}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext1}
              step={1}
              min={0}
              max={150}
              className={classes.duree}
            />
          </div>
          </div >
        
           
          </div> 
          </div>

  )
}
export default Filter;
