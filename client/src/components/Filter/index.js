import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Slider from '@material-ui/core/Slider';




const Filter = ( {OnfilterApplyPrice , OnfilterApplyDuree}  ) => {
  const classes = useStyles();
 

  const [pageNumber, setPageNumber] = useState(1);

  const [value, setValue] = React.useState([0,10000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    OnfilterApplyPrice(newValue);
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
