import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const  TimePickers = ({onChangetime, time}) => {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate>
      <TextField
        required
        id="time"
        label="Horaire"
        type="time"
        variant="outlined"
        value={time}
        onChange={onChangetime}
        style={{ width: 360 , marginTop: 15 }}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 60, 
        }}
      />
    </div>
  );
}
export default TimePickers;