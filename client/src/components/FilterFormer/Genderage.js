import React, { useEffect, useState } from 'react';
import {  Typography, FormLabel, } from '@material-ui/core';
import useStyles from './styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';



const Genderage = (  {OnfilterApplyAge, OnfilterApplySexe}    ) => {
  const classes = useStyles();
 

 

  const [value, setValue] = React.useState([0,100]);
  const [sexe, setSexe] = React.useState(["Femme","Homme"]);


  const handleChange = (e, newvalue) => {
   
    setValue(newvalue);
    OnfilterApplyAge(newvalue);
    };
    const handleChangeSexe = (e, newvalue) => {
   
        setSexe(newvalue);
        OnfilterApplySexe(newvalue);
        };
 

  return (
    <div >
     
         
            <Typography id="range-slider" className={classes.prix}>
              Années d'expériences
           </Typography>
           
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              step={1}
              min={0}
              max={100}
              className={classes.div}

            />

        <FormControl component="fieldset">
      <FormLabel component="legend">Sexe</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={sexe} onChange={handleChangeSexe}>
        <FormControlLabel value="Femme" control={<Radio />} label="Femme" />
        <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
      </RadioGroup>
    </FormControl>
            
           
          </div >
        
           
          

  )
}
export default Genderage;