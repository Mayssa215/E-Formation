import React from 'react'
import { Button, Grid} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import useStyles from './styles';

const Popup1 = ({ handleClose, open, setOpen,Delete }) => {
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
                <div className={classes.popup}>
                    <h3 className={classes.supp}>Voulez vous vraiment supprimer ce client  </h3>

                    <div className={classes.titleicon}>
                        <Button
                            className={classes.openiconsupp}
                            onClick={handleClose}
                        >
                            <CloseIcon className={classes.iconclose } />
                        </Button>
                    </div>
                    <Grid container>
                       
                            <Button className={classes.suppr} onClick={Delete}>Supprimer</Button>
                            <Button className={classes.btncf} onClick={handleClose} >Annuler</Button>

                     
                                               
                    </Grid>
                </div>
            </Fade>
        </Modal>
    )
}
export default Popup1;