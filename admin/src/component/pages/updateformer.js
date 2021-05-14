import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Button, Paper, Grid, TextField, FormLabel, Typography } from '@material-ui/core';
import Input from '../authentification/inputs';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getcategorie } from '../../actions/categorie';
import { getCity } from '../../actions/cities';
import { getgouvernorat } from '../../actions/gouvernorat';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FileBase from 'react-file-base64';
import Select from '../Select/Selectspeciality';
import { useHistory } from 'react-router-dom';

import { updateformer } from '../../actions/authentification';
const Profiluser = () => {
 
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('former')));
    const [username,setUsername] = useState({firstname:[userinfos.allformer[2]], lastname:userinfos.allformer[1],phone:userinfos.allformer[4],email:userinfos.allformer[9],cin:userinfos.allformer[7],idspeciality:userinfos.allformer[10],namespeciality:'',Numbreofexperience:userinfos.allformer[5],
        selectedimage:userinfos.allformer[8],gender:userinfos.allformer[3],description:userinfos.allformer[6],password:'',mdpactuel:'',confirmerMotdepasse:'',selectedFile:'',
            });

    const [speciality, setspeciality] = useState([]);
    const [City, setCity] = useState([]);
    const [gouvernorat, setGouvernorats] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [showPassword1, setShowPassword1] = useState(false);
    const handleShowPassword1 = () => setShowPassword1(!showPassword1);
    const [showPassword2, setShowPassword2] = useState(false);
    const handleShowPassword2 = () => setShowPassword2(!showPassword2);
    const history = useHistory();

    const url = window.location.href;
    const id = url.substr(35);
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
        //console.log('data3',userinfos.allformer);
    }, [dispatch]);
  

    const handleChangemdp = (e) => {
        setUsername({ ...username, password: e.target.value });
    };


    const handleChangeactuel = (e) => {
        setUsername({ ...username, mdpactuel: e.target.value });
    };
    const handleChangeconfirm = (e) => {
        setUsername({ ...username, confirmerMotdepasse: e.target.value });
    };

    const handlechangenom = (e) => {
        setUsername({ ...username, firstname: e.target.value });
    };
    const handlechangeprenom = (e) => {
        setUsername({ ...username, lastname: e.target.value });
    };
    const handlechangecin = (e) => {
        setUsername({ ...username, cin: e.target.value });
    };
    const handlechangeemail = (e) => {
        setUsername({ ...username, email: e.target.value });

    }
    const handlechangetel = (e) => {
        setUsername({ ...username, phone: e.target.value });
    }
    const handleChangegender = (event) => {
        setUsername({ ...username, gender: event.target.value })
      };

    const onChangeData2 = (e, val) => {
        let name = val.nom;
        val === null ? setUsername({ ...username, idspeciality: null, namespeciality: null }) :
        setUsername({ ...username, idspeciality: val._id, namespeciality: name })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateformer(id,username,history)) ;
    }
    return (
        <div className={classes.divglobal}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Paper  className={classes.paperformer} elevation={4}>
                    <form onSubmit={handleSubmit} >
                        <Grid>

                            <Typography className={classes.infogene}>INFORMATIONS GENERALES</Typography>
                           
                              
                                 <div> 
                                     <div className={classes.fields}>
                                     <TextField className={classes.texts} name='firstname' variant="outlined" label="Nom" value={username.firstname} onChange={handlechangenom} ></TextField>
                                 <TextField className={classes.texts}  name='lastname' variant="outlined" label="Prenom" value={username.lastname} onChange={handlechangeprenom} ></TextField>
                                 <TextField className={classes.texts}  name='email' variant="outlined" label="Email" value={username.email} onChange={handlechangeemail} ></TextField>
                                
                                
                                     </div>
                                 <div className={classes.fields}>
                                 <TextField className={classes.texts2}  name='phone' variant="outlined" label="Telephone" value={username.phone} onChange={handlechangetel}></TextField>
                                 <TextField className={classes.texts2} name='cin' variant="outlined" label="Numero de carte d'identité" value={username.cin} onChange={handlechangecin}></TextField>
                                 <TextField className={classes.texts2}  required className={classes.textf} name='Numbreofexperience ' variant="outlined" label=" Année  d'expérience (ans)" type="number" value={username.Numbreofexperience} onChange={(e) => setUsername({ ...username, Numbreofexperience: e.target.value })} ></TextField>
                                 </div>
                                 
                                     <div className={classes.fields}>
                                     <TextField required name='description' type="string" variant="outlined" label="Déscription" value={username.description} onChange={(e) => setUsername({ ...username, description: e.target.value })} rows={5} cols={6} multiline className={classes.textf} ></TextField>
                                    <Select className={classes.texts} onChangeData2={onChangeData2} speciality={speciality} value={username.namespeciality}></Select>
                                     </div>
                                     <FormLabel className={classes.labelsex} component="legend">Sexe</FormLabel>
                                  <RadioGroup aria-label="gender" name="gender1" value={username.gender} onChange={handleChangegender}>
                                    <div className={classes.radio}>
                                    <FormControlLabel value="Femme" control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Femme</span>} />
                                    <FormControlLabel value="Homme" control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Homme</span>} />
                                     
                                     </div>
                                     </RadioGroup>
                                     <Typography className={classes.labelcv} >modifier le  CV </Typography>
                                     <div  className={classes.file}>
                                     <FileBase type="file" name="choisir un CV" multiple={false} onDone={({ base64 }) => setUsername({ ...username, selectedFile: base64 })} />
                                     </div>
                                <div className={classes.imgfile}>
                                <Typography className={classes.label} >modifier l'image </Typography>

                                <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setUsername({ ...username, selectedimage: base64 })} />
                                 <Avatar className={classes.avatar} alt="imageformer" src={username.selectedimage} ></Avatar>
                                </div>
                          <div className={classes.pass}>
                          <Input name="mdpactuel" label="Mot de passe Actuel" handleChange={handleChangeactuel} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                 <Input name="password" label="Mot de passe" handleChange={handleChangemdp} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
                                 <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirm} type={showPassword2 ? 'text' : 'password'} handleShowPassword={handleShowPassword2} />
                          </div>
                                  
                             </div>
                          

                        </Grid>
                        <Button className={classes.enregistrer} type="submit" variant="contained">Enregistrer</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )

}
export default Profiluser;