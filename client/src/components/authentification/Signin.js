import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, TextField, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Input from './inputs';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signinuser } from '../../actions/authentification';
import Gif from '../Pictures/Login.gif'; 
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './modal';
const Signin = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [signinData, setsigninData] = useState({
    email: '', password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(signinuser(signinData, history));
  };
  const handleChange = (e) => {
    setsigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }



  return (
    <div >

        <ToastContainer />
          <Grid container   spacing={0} direction="column"
                alignItems="center"
                justify="center">
                <Paper className={classes.Sign} elevation={10} >
                 <form onSubmit={handleSubmit}>
              <Grid container>
            <Grid item lg={5} sm={4} md={6} xs={8}>
              <h3 className={classes.title}>Connectez-vous</h3>

              <div className={classes.input}>
                <TextField name="email" label="Email" onChange={handleChange} variant="outlined" required type="email" autoFocus className={classes.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon className={classes.mailicon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <Input  name="password" label="Mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                <div >
                  <a className={classes.oublie} href="/forget" >Mot de passe oublié? </a>
                </div>
              </div>
              <div className={classes.zoom}>
                <Button type="submit" variant="contained"  className={classes.btn}>
                  Se connecter
                   </Button>
              </div>
              <div>
                <Typography className={classes.inscription}> Vous n’avez pas de compte  ?  <Button className={classes.inscrit} onClick={handleOpen} >Inscrivez-vous</Button></Typography>
                <Modal  open={open} handleClose={handleClose} setOpen={setOpen} />
              </div>
            </Grid>
        <Grid item lg={7} sm={8} md={6}  xs={4}>
          <img src={Gif} alt="loading..."  className={classes.gif}/>
        </Grid>
        </Grid>
        </form>  
      </Paper >
      </Grid>
    </div >
  )
}

export default Signin;