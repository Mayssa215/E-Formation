import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import useStyles from './styles';

const Modals = ({ handleClose, open, setOpen,Annuler }) => {
    const classes = useStyles();
    return (

<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
className={classes.modal}
open={open}
onClose={handleClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
    timeout: 500,
}}
>
<Fade in={open}>
    <div className={classes.paper1}>
        <div className={classes.titleicon}>
            <Button
                className={classes.openicon}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <CloseIcon className={classes.iconclose} />
            </Button>
        </div>
        <Grid container>
        <Grid item xs={12} lg={8} sm={4} md={4} >
        <Typography >Voulez-vous vraiment rejeter cet avis</Typography> 
            </Grid>   
            <Grid item xs={12} lg={8} sm={4} md={4}>
                <div className={classes.buttonac}>
            <Button className={classes.confirmer} onClick={Annuler}>Confirmer </Button>

                <Button className={classes.Annuller} onClick={() => {
                setOpen(!open);
                }}>Annuler</Button>
                </div>
            </Grid>
            </Grid>
    </div>

</Fade>
</Modal>
    )
}
export default Modals;
