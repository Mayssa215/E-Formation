import React, { useState } from 'react'
import {Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { forgetpassword } from '../../actions/authentification';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import Forget from '../Pictures/Forgot password.gif';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const Forgetpass = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const [emailData, setemailData] = useState({
        email: ''
    });

    const handleChange = (e) => {
        setemailData({ ...emailData, email: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(forgetpassword(emailData));
    };



    return (

        <Paper className={classes.forget} elevation={10}>
            <form onSubmit={handleSubmit} >
                <ToastContainer />
                <Grid container >
                    <Grid item lg={6} sm={8} md={6} xs={8}>
                    <Button className={classes.return} href="/signin" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>

                        <h3 className={classes.retrouver}>Retrouvez votre compte</h3>
                        <p className={classes.paragraph} >Veuillez saisir l'adresse e-mail que vous avez utilisée à la création de votre compte.
                             Vous recevrez un lien temporaire pour réinitialiser votre mot de passe.</p>
                        <TextField name="email" label="Email" onChange={handleChange} variant="outlined" required type="email" className={classes.emailforget}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MailOutlineIcon className={classes.mailicon} />
                                    </InputAdornment>
                                ),
                            }}
                            autoFocus
                        />
                           <Button type="submit" variant="contained" color="primary" className={classes.btnforget}>
                    Envoyer
                   </Button>
                  
                    </Grid>
                    
                    <Grid item lg={6} sm={4} md={6} xs={4} >
                     <img alt="image0" src={Forget}  className={classes.imgforget}/>
                    </Grid>
                  
                </Grid>
             
            </form>
        </Paper>
    );


}
export default Forgetpass;