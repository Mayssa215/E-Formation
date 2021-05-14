 import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {  Button, Paper, Grid, TextField,  Typography } from '@material-ui/core';
import Input from '../authentification/inputs';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { updateadmin } from '../../actions/admin';
const Profiladmin = () => {
 
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(userinfos);
    const {email} = Data;
    const [userData, setuserData] = useState({email, mdpactuel: '', password: '', confirmerMotdepasse: '' })

    const clear = () => {
        setuserData({email:'', mdpactuel: '', password: '', confirmerMotdepasse: ''});
      }
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleShowPassword2 = () => setShowPassword2(!showPassword2);
    const history = useHistory();
    const [id, setid] = useState('');

  
 
  

    const handleChangemdp = (e) => {
        setuserData({ ...userData, password: e.target.value });
    };


    const handleChangeactuel = (e) => {
        setuserData({ ...userData, mdpactuel: e.target.value });
    };
    const handleChangeconfirm = (e) => {
        setuserData({ ...userData, confirmerMotdepasse: e.target.value });
    };

  
    const handlechangeemail = (e) => {
        setuserData({ ...userData, email: e.target.value });

    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateadmin(id,userData,history)) ;
        clear();

    }
    return (
        <div className={classes.divglobal}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Paper className={classes.paperadmin} elevation={4}>
                    <form onSubmit={handleSubmit} >
                        <Grid>
                            <Typography className={classes.infogeneadmin}>INFORMATIONS GENERALES</Typography>
                           
                              
                                 <div > 
                                 <TextField  className={classes.emailad} name='email' variant="outlined" label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
 <div className={classes.pass1}>
 <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                 <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                 <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
 </div>
                                 
                             </div>
                          

                        </Grid>
                        <Button type="submit" variant="contained" className={classes.enregistrer} onClick={() => setid(Data._id)} >Enregistrer</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}
export default Profiladmin; 