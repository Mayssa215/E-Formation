import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Date = () => {
    const classes = useStyles();
    const [datestate, setdatestate] = useState("Commence ");
    const handleChange = (event) => {
        setdatestate(event.target.value);
      };

    return (
        <div className={classes.dates}>
               <div >
                <FormControl className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={datestate}
                        onChange={handleChange}
                    >
                        <MenuItem value="Commence ">Commence </MenuItem>
                        <MenuItem value="Appartient">Appartient </MenuItem>
                        <MenuItem value="Termine ">Termine </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div noValidate>
                <TextField
                    id="date"
                    label="Date Début"
                    type="date"
                    name="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.div3}

                />
            </div>
            <div noValidate>
                <TextField
                    id="date"
                    label={<span> Date Fin </span>}
                    type="date"
                    name="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className={classes.div3}
                />
            </div>
         
        </div>
    )
};
export default Date;