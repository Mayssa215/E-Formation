import React, { useState,useEffect} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import Input from './inputsuser';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetpassword } from '../../actions/authentification';
import Reset from '../Pictures/Done.gif';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const Resetpass = ({ match }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();
    const [resetinfos, setresetinfos] = useState({
        newpassword: '',
        confirmmotdepasse: '',
        resetLink: '',
    });
    
  useEffect(() => {
    let token1 = match.params.token;
    if (token1) {
        setresetinfos({ ...resetinfos, resetLink:token1 });
    }
  }, []);
 

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const handleChange = (e) => {
        setresetinfos({ ...resetinfos, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if( resetinfos.newpassword && resetinfos.confirmmotdepasse && resetinfos.newpassword === resetinfos.confirmmotdepasse && resetinfos.newpassword.length >=8){
                  return dispatch(resetpassword(resetinfos,history));
                  
        }
        else if (resetinfos.newpassword !== resetinfos.confirmmotdepasse){
            toast.error( 'Les mots de passe ne sont pas identiques');
        }
        else {
            toast.error( 'Le champ mot de passe doit contenir au minimum 8 caractéres !');
        }
       
    };



    return (

        <Paper className={classes.forget2} elevation={10}>
            <form onSubmit={handleSubmit} >
                <ToastContainer />
                <Grid container >
                <Grid item lg={6}  >
                <Button className={classes.return} href="/forget" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
                <h3 className={classes.changer}>Changer votre mot de passe</h3>
                 <div className={classes.colreset}>
                <Input name="newpassword" label=" Nouveau mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} autoFocus />
                <Input name="confirmmotdepasse" label="Confimer  Mot de passe" handleChange={handleChange}  type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                </div>
                <Button type="submit" variant="contained" color="primary" className={classes.btnreset}>
                    Envoyer
                   </Button>
                </Grid>
                <Grid item lg={6} >
                <img src={Reset} className={classes.reset}/>
                </Grid>
             
                   </Grid>
            </form>
        </Paper>
    );


}
export default Resetpass;