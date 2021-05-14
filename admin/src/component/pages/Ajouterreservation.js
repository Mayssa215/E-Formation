
import React, { useState } from "react";
import {
 
  Button,
  Grid,
   TextField,

} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";


import useStyles from "./styles";
import {Reserverformation} from '../../actions/bookings';
import { useDispatch } from 'react-redux';



  const Modal1 = ({ handleClose,idtraining, open, setOpen}) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    const [RerservationData, setRerservationData]= useState({phone:'', idtraining:idtraining ,cin:'',status:''});
const handleClick =()=> {
  
        dispatch(Reserverformation(idtraining,RerservationData));
     alert('La formation a été réserver avec succès');
     setOpen(!open);
}
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
        <h3 className={classes.reserver}>Réserver Formation </h3>

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
            <div className={classes.divrev}>
            <TextField className={classes.textreservation1} name="phone" label="Numéro de téléphone" type="string" variant="outlined" value={RerservationData.phone} onChange={(e)=> setRerservationData({...RerservationData, phone: e.target.value})} className={classes.phonenumber}> </TextField>
         <TextField required className={classes.textreservation} name='cin' variant="outlined" label=" Carte d'intentité" type="string" value={RerservationData.cin} onChange={(e) => setRerservationData({ ...RerservationData, cin: e.target.value })} ></TextField>

            </div>
      

            </Grid>
            
            <Grid item xs={12} lg={8} sm={4} md={4}>
                <div className={classes.buttonac}>
            <Button className={classes.confirmer} onClick={handleClick}>Confirmer </Button>

                <Button className={classes.Annuller} onClick={() => {
                setOpen(!open);
                }}>Annuler</Button>
                </div>
            </Grid>
            </Grid>
    </div>

</Fade>
</Modal>
    )};
    export default Modal1;
