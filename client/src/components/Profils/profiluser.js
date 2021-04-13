import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Paper, Grid, TextField, Container, Typography } from '@material-ui/core';
import Input from '../authentification/inputs';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getcategorie } from '../../actions/categorie';
import { getCity } from '../../actions/cities';
import { getgouvernorat } from '../../actions/gouvernorat';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import FileBase from 'react-file-base64';
import Select from '../Select/Selectspecialty';

import { updateUser } from '../../actions/authentification';
const Profiluser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(userinfos);
    const { firstname, lastname, phone, email, cin, gouvernorate, city, idspeciality, namespeciality, Numbreofexperience, selectedimage, selectedFile, idgouvernorate, idcity, namecities, description, namegouvernorate, adressexact } = Data;
    const [userData, setuserData] = useState({ firstname, lastname, phone, email, cin, gouvernorate, city, idspeciality, Numbreofexperience,selectedFile, namespeciality, selectedimage, idgouvernorate, idcity, namecities, description, namegouvernorate, adressexact, mdpactuel: '', password: '', confirmerMotdepasse: '' })
 
    const [speciality, setspeciality] = useState([]);
    const [filtredCity, setfiltredCity] = useState([]);
    const [City, setCity] = useState([]);
    const [gouvernorat, setGouvernorats] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [id, setid] = useState('');
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleShowPassword2 = () => setShowPassword2(!showPassword2);

    useEffect(() => {
        dispatch(getcategorie()).then((res) => {
            setspeciality(res);
        });
        dispatch(getCity()).then((res) => {
            setCity(res);

        });
        dispatch(getgouvernorat()).then((res) => {
            setGouvernorats(res);
        });
    }, []);
    const handleChangegouvernorat1 = (e, val) => {
     
            setuserData({ ...userData,  gouvernorate: val.nom })
        val === null ? setfiltredCity([]) :
            setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
    };

    const handleChangegouvernorat = (e, val) => {
        let nom = val.nom;

        val === null ? setuserData({ ...userData, idgouvernorate: null, namegouvernorate: null }) :

            setuserData({ ...userData, idgouvernorate: val._id, namegouvernorate: nom })
        val === null ? setfiltredCity([]) :
            setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
    };
    const handleChangecity1 = (e, val) => {
        e.preventDefault();        
    setuserData({ ...userData, city: val.nom });

    };
    const handleChangecity = (e, val) => {
        let nom = val.nom;
        e.preventDefault();
        val === null ? setuserData({ ...userData, idcity: null, namecities: null }) :
        
            setuserData({ ...userData, idcity: val._id, namecities: nom });

    };
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


    const onChangeData2 = (e, val) => {
        let name = val.nom;
        val === null ? setuserData({ ...userData, idspeciality: null, namespeciality: null }) :
            setuserData({ ...userData, idspeciality: val._id, namespeciality: name })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(id, userData)) 
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
                            {Data?.Role === "client" ? <div><FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setuserData({ ...userData, selectedimage: base64 })} />
                                <Avatar className={classes.avatar} alt="hhh" src={userData.selectedimage} ></Avatar>
                                <TextField name='firstname' variant="outlined" label="Nom" value={userData.firstname} onChange={handlechangenom} ></TextField>
                                <TextField name='lastname' variant="outlined" label="Prenom" value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                <TextField name='email' variant="outlined" label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
                                <TextField name='phone' variant="outlined" label="Telephone" value={userData.phone} onChange={handlechangetel}></TextField>
                                <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat1} gouvernorat={gouvernorat} value={userData.gouvernorate} />
                                <SelectCities handleChangecity={handleChangecity1} filtredCity={filtredCity}  value={userData.city} />
                                <TextField name='cin' variant="outlined" label="Numero de carte d'identité" value={userData.cin} onChange={handlechangecin}></TextField>
                                <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
                            </div> : Data?.Role === "centre" ?
                                <div> <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setuserData({ ...userData, selectedimage: base64 })} />
                                    <Avatar className={classes.avatarcenter} alt="hhh" src={userData.selectedimage} ></Avatar>
                                    <TextField name='lastname' variant="outlined" label="Prenom" value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                    <TextField name='email' variant="outlined" label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
                                    <TextField name='phone' variant="outlined" label="Telephone" value={userData.phone} onChange={handlechangetel}></TextField>
                                    <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat} value={userData.namegouvernorate} />
                                    <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity}  value={userData.namecities} />
                                    <TextField name='adressexact' variant="outlined" label="Adresse" value={userData.adressexact} onChange={(e) => setuserData({ ...userData, adressexact: e.target.value })}></TextField>
                                    <Select onChangeData2={onChangeData2} speciality={speciality} value={userData.namespeciality}></Select>

                                    <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                    <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                    <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
                                    <TextField required name='description' type="string" variant="outlined" label="Déscription" value={userData.description} onChange={(e) => setuserData({ ...userData, description: e.target.value })} rows={5} cols={6} multiline className={classes.textf} ></TextField>

                                </div> :Data?.Role === "formateur" ?
                                 <div> <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setuserData({ ...userData, selectedimage: base64 })} />
                                 <Avatar className={classes.avatar} alt="hhh" src={userData.selectedimage} ></Avatar>
                                 <TextField name='firstname' variant="outlined" label="Nom" value={userData.firstname} onChange={handlechangenom} ></TextField>
                                 <TextField name='lastname' variant="outlined" label="Prenom" value={userData.lastname} onChange={handlechangeprenom} ></TextField>
                                 <TextField name='email' variant="outlined" label="Email" value={userData.email} onChange={handlechangeemail} ></TextField>
                                 <TextField name='phone' variant="outlined" label="Telephone" value={userData.phone} onChange={handlechangetel}></TextField>
                                 <TextField name='cin' variant="outlined" label="Numero de carte d'identité" value={userData.cin} onChange={handlechangecin}></TextField>
                                 <TextField required className={classes.textf} name='Numbreofexperience ' variant="outlined" label=" Année  d'expérience (ans)" type="number" value={userData.Numbreofexperience} onChange={(e) => setuserData({ ...userData, Numbreofexperience: e.target.value })} ></TextField>
                                 <Typography className={classes.labela} >modifier votre  CV </Typography>
                                 <FileBase type="file" name="choisir un CV" multiple={false} onDone={({ base64 }) => setuserData({ ...userData, selectedFile: base64 })} />
                                 <Select onChangeData2={onChangeData2} speciality={speciality} value={userData.namespeciality}></Select>
                                 <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                 <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                 <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
                                 <TextField required name='description' type="string" variant="outlined" label="Déscription" value={userData.description} onChange={(e) => setuserData({ ...userData, description: e.target.value })} rows={5} cols={6} multiline className={classes.textf} ></TextField>
                             </div>
                             : null }

                        </Grid>
                        <Button type="submit" variant="contained" color="primary" onClick={() => setid(Data._id)} >Enregistrer</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}
export default Profiluser;

