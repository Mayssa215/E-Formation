import React, { useState } from 'react'
import { Button, Grid,TextField} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {Updatecategorie} from '../../actions/categorie';
const Modals = ({ handleClose, open, setOpen ,idcateg}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [categorie, setcategorie] = useState(JSON.parse(localStorage.getItem('catégories')));
    const [CatégorieData, setCatégorieData]= useState({nom :[categorie.allcatégories[1]]});
   
const handleSubmit=()=> {
    dispatch(Updatecategorie(idcateg,CatégorieData));
};

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
                <div className={classes.papercateg}>
                    <div className={classes.titleicon}>
                        <h3 className={classes.tantque}>Modifier Catégorie </h3>
                        <Button
                            className={classes.openicon1}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <CloseIcon className={classes.iconclose} />
                        </Button>
                    </div>
                    <Grid container>
                      
                        <Grid item xs={12} lg={4} sm={4} md={4}>
                            <TextField name="categ" label="nom catégorie" type="string" variant="outlined" value={CatégorieData.nom} onChange={(e)=> setCatégorieData({...CatégorieData, nom: e.target.value})} className={classes.categtext}> </TextField>

                            <Button className={classes.categajout} onClick={handleSubmit} >Modifier</Button>
                        </Grid>
                       
                    </Grid>
                </div>
            </Fade>
        </Modal>
    )
}
export default Modals;