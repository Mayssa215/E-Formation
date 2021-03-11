import React, { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import useStyles from './styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Slider from '@material-ui/core/Slider';






const states = [' Commence', ' Appartient', 'Termine'];


export default function Date() {

    const classes = useStyles();
    const handleChange = (event, val) => {
        setselected(val);
    };
    const [selected, setselected] = useState(states[0]);
    const [heur, setheur] = React.useState(['', '']);
    const handleChange1 = (event, newheur) => {
    
        setheur(newheur);
    };
    return (
        <div>
            <div className={classes.dates}>
                <div>
                    <Autocomplete
                        id="combo-box-demo"
                        value={selected}
                        onChange={handleChange}
                        options={states}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => <TextField {...params} label="Détails" variant="outlined" className={classes.détails} />}
                    />
                </div>
              <div className={classes.debutfin}>
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
            </div>
            <div>
                <Typography id="range-slider" className={classes.dureenom} gutterBottom>
                    Durée de formation
           </Typography>
                <Slider
                    value={heur}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    step={1}
                    min={0}
                    max={150}
                    className={classes.duree}
                />
            </div>
        </div>
    );
}


