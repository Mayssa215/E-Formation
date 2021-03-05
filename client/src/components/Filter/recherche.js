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
            <div  className={classes.filedbtn}> <TextField
                className={classes.rech}
               value=""
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            < SearchIcon className={classes.icon} />
                        </InputAdornment>
                    ),
                }}

            />
           <div> <Button type="submit" size="small" variant="outlined" className={classes.btn} >
                Rechercher </Button>
            </div>
            </div>
            <div className >
                <Button
                    endIcon={<TuneIcon style={{ fontSize: 22, color: "#74B5BD" }} />}
                    className={classes.hide}
                    onClick={onClick}
                > { <span className={classes.filtremasq}>{!show ? 'Afficher les filtres' : 'Masquer Les filtres'}</span>} </Button>
            </div>

        </div >



    );
};
export default Recherche;