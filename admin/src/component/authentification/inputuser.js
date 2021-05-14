import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import useStyles from './styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label,  autoFocus, type, handleShowPassword }) => {
  const classes = useStyles();
  return (
  <Grid item xs={12} >
    <TextField
      className={classes.inputs}
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={name === 'password' || name ==='confirmerMotdepasse' || name ==='newpassword' || name ==='confirmmotdepasse' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ?   <Visibility className={classes.mailicon} /> : <VisibilityOff className={classes.mailicon} />   }  
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
  )};

export default Input;