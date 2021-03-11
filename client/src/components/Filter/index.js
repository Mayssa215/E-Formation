import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Slider from '@material-ui/core/Slider';




const Filter = () => {
  const classes = useStyles();
 
 

  const [value, setValue] =useState(['', '']);

  const handleChange = (event, newValue) => {

    setValue(newValue);
  };
  
 
 
  return (
    <div >
     
     
            <Typography id="range-slider" className={classes.prix}>
              Prix
           </Typography>
           
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              step={50}
              min={0}
              max={5000}
              className={classes.div}

            />
            
          
          </div >
        
                 

  )
}
export default Filter;
