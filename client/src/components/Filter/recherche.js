import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



const Recherche = ({ onClick, show ,handlechangeRecherche}) => {
    const classes = useStyles();
    return (
        <div className={classes.barre}>
             <div className={classes.search1}>
            <div className={classes.searchIcon1}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher..."
              onChange={handlechangeRecherche}
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <div className={classes.btn} >
                <Button
                    endIcon={<TuneIcon  className={classes.iconhide} />}
                    className={classes.hide}
                    onClick={onClick}
                > { <span className={classes.filtremasq}>{!show ? 'Afficher les filtres' : 'Masquer Les filtres'}</span>} </Button>
            </div>

        </div >



    );
};
export default Recherche;