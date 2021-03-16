import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';



const Recherche = ({ onClick, show }) => {
    const classes = useStyles();
    return (
        <div className={classes.barre}>
            <div  className={classes.filedbtn}> 
            <TextField
                className={classes.rech}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < SearchIcon className={classes.icon} />
                        </InputAdornment>
                    ),
                }}

            />

            </div>
            <div >
                <Button
                    endIcon={<TuneIcon style={{ fontSize: 22, color: "#fa7d39 " }} />}
                    className={classes.hide}
                    onClick={onClick}
                > { <span className={classes.filtremasq}>{!show ? 'Afficher les filtres' : 'Masquer Les filtres'}</span>} </Button>
            </div>

        </div >



    );
};
export default Recherche;