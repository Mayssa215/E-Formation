import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Paper, Grid, TextField, Container, Typography } from '@material-ui/core';
import Input from '../authentification/inputs';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import { updateUser } from '../../actions/authentification';
const Profiluser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(userinfos);
    const { firstname, lastname, phone, email, cin, gouvernorate, city,image } = Data;
    const [userData, setuserData] = useState({ firstname, lastname, phone, email, gouvernorate, cin, city, mdpactuel: '', password: '', confirmerMotdepasse: '',image })
    const [showPassword, setShowPassword] = useState(false);
    const [id, setid] = useState('');
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleShowPassword2 = () => setShowPassword2(!showPassword2);

    const handleChangemdp = (e) => {
        setuserData({ ...userData, password: e.target.value });
    };


    const handleChangeactuel = (e) => {
        setuserData({ ...userData, mdpactuel: e.target.value });
    };
    const handleChangeconfirm = (e) => {
        setuserData({ ...userData, confirmerMotdepasse: e.target.value });
    };

    const handlechangenom = (e) => {
        setuserData({ ...userData, firstname: e.target.value });
    };
    const handlechangeprenom = (e) => {
        setuserData({ ...userData, lastname: e.target.value });
    };
    const handlechangecin = (e) => {
        setuserData({ ...userData, cin: e.target.value });
    };
    const handlechangeemail = (e) => {
        setuserData({ ...userData, email: e.target.value });

    }
    const handlechangetel = (e) => {
        setuserData({ ...userData, phone: e.target.value });
    }
    const handlechangeadresse = (e) => {
        setuserData({ ...userData, city: e.target.value });

    }
    const handlechangegouvernorat = (e) => {
        setuserData({ ...userData, gouvernorate: e.target.value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateUser(id, userData));
    }
    return (
        <div className={classes.divglobal}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Paper className={classes.paper1} elevation={4}>
                    <form onSubmit={handleSubmit} >
                        <Grid>
                            <Typography>INFORMATIONS GENERALES</Typography>
                            <div>
                            <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setuserData( { ...userData, image: base64} )} />
                                <Avatar  className={classes.avatar} alt="hhh" src={userData.image} ></Avatar>
                                <TextField name='firstname' variant="outlined" label="Nom" value={userData.firstname} onChange={handlechangenom} ></TextField>
                                <TextField name='lastname' variant="outlined"  label="Prenom" value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                <TextField name='email' variant="outlined"   label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
                                <TextField name='phone' variant="outlined" label="Telephone" value={userData.phone} onChange={handlechangetel}></TextField>
                                <TextField name='city' variant="outlined" label="Ville" value={userData.city} onChange={handlechangeadresse}></TextField>
                                <TextField name='gouvernorate' variant="outlined" label="Gouvernorat" value={userData.gouvernorate} onChange={handlechangegouvernorat}></TextField>
                                <TextField name='cin' variant="outlined" label="Numero de carte d'identité" value={userData.cin} onChange={handlechangecin}></TextField>
                                <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />

                            </div>
                        </Grid>
                            <Button type="submit" variant="contained" color="primary" onClick={() => setid(Data._id)} >Enregistrer</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}
export default Profiluser;

