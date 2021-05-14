import React from 'react'
import { Button, Grid} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import useStyles from './styles';
import Building from '../Pictures/Building.gif';
import Professor from '../Pictures/Professor.gif'
const Modals = ({ handleClose, open, setOpen }) => {
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
                <div className={classes.paper2}>
                    <div className={classes.titleicon}>
                        <h3 className={classes.tantque}>Ajouter formation pour </h3>
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
                    <Grid item xs={12} lg={4} sm={4} md={4}  className={classes.img1}>
                            <img alt="imgprof" src={Professor} />
                            <div >
                            <span className={classes.formateur}>  Formateur </span> </div>
                            <Button className={classes.btnf} href='/FormationFormateur' >Ajouter</Button>
                        </Grid>
                        <Grid item xs={12} lg={4} sm={4} md={4}>
                            <img alt="img2" src={Building} className={classes.img2} />
                            <div className={classes.modalresponsive2}>
                            <span className={classes.centre}> Centre de formation </span></div>
                            <Button className={classes.btncf} href='/FormationCentre'>Ajouter</Button>
                        </Grid>
                       
                    </Grid>
                </div>
            </Fade>
        </Modal>
    )
}
export default Modals;