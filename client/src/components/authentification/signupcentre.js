import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, FormLabel, Paper, Grid, Container, Typography } from '@material-ui/core';
import Selectspecialty from '../Select/Selectspecialty';
import { creatCentre, updateCentre } from '../../actions/centre';
import Input from './inputsuser';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import { getCity } from '../../actions/cities';
import { useHistory } from 'react-router-dom';
import { signupcentre } from '../../actions/centre';
import { getgouvernorat } from '../../actions/gouvernorat';
import Img2 from '../Pictures/centre.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast, zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const FormCentre = ({ currentId, setCurrentId }) => {
  const [centreData, setcentreData] = useState({ name: '', idspeciality: '', namespeciality: '', selectedFileimage: '', idgouvernorat: '', idcities: '', nomcities: '',description:'', nomgouvernorat: '', phonenumber: '', email: '', motdepasse: '', confirmerMotdepasse: '' });
  const centre = useSelector((state) => currentId ? state.centre.find((f) => f._id === currentId) : null);
  const [error, setError] = React.useState(false);

  const history = useHistory();
  const [helperTextimg, setHelperTextimg] = React.useState('');
  const [speciality, setspeciality] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filtredCity, setfiltredCity] = useState([]);
  const [City, setCity] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const clear = () => {
    setcentreData({ name: '', idspeciality: '', namespeciality: '', selectedFileimage: '', idgouvernorat: '', idcities: '', adresseexat:'', nomcities: '', nomgouvernorat: '', phonenumber: '',description:'' });
  }

  useEffect(() => {
    if (centre) {
      setcentreData(centre)
    }
  }, [centre])

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setspeciality(res);
    });
  }, []);


  useEffect(() => {
    dispatch(getCity()).then((res) => {
      setCity(res);

    });
  }, []);


  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;

    val === null ? setcentreData({ ...centreData, idgouvernorat: null, nomgouvernorat: null }) :

      setcentreData({ ...centreData, idgouvernorat: val._id, nomgouvernorat: nom })
    val === null ? setfiltredCity([]) :
      setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };

  const handleChangecity = (e, val) => {
    let nom = val.nom;
    console.log(nom);
    e.preventDefault();
    val === null ? setcentreData({ ...centreData, idcities: null, nomcities: null }) :

      setcentreData({ ...centreData, idcities: val._id, nomcities: nom });
    console.log(centreData.nomcities);

  };
  const handleChangeemail = (event) => {
    setcentreData({ ...centreData, email: event.target.value })
  };
  const handleChangemotdepasse = (event) => {
    setcentreData({ ...centreData, motdepasse: event.target.value })
  };
  const handleChangeconfirme = (event) => {
    setcentreData({ ...centreData, confirmerMotdepasse: event.target.value })
  };

  const [gouvernorat, setGouvernorats] = useState([]);
  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
  }, []);

  const onChangeData2 = (e, val) => {
    let name = val.nom;
    val === null ? setcentreData({ ...centreData, idspeciality: null, namespeciality: null }) :
      setcentreData({ ...centreData, idspeciality: val._id, namespeciality: name })
  }

  const valueimg = centreData.selectedFileimage.indexOf("/");
  const valueimg2 = centreData.selectedFileimage.indexOf(";");
  const fileimg = centreData.selectedFileimage;
  const numberimg = valueimg2 - valueimg;
  const extensionimg = fileimg.substr(valueimg, numberimg);


  const handleSubmit = async (e) => {
    e.preventDefault();
    /*  if(currentId  && (extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png" )) {
     dispatch(updateCentre(currentId, centreData));
     clear();
     setCurrentId('');
     }
     else  */
    if ((extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png")  && centreData.motdepasse === centreData.confirmerMotdepasse && centreData.motdepasse.length >= 8  && centreData.phonenumber.length === 8 ) {
      dispatch(signupcentre(centreData, history));
      setError(false);
      setHelperTextimg('');
      clear();
    }  
     else if (extensionimg !== "/jpeg" || extensionimg !== "/jpg" || extensionimg !== "/png")  {
      setHelperTextimg('Choisir un fichier de type image');
      setError(true);
    }
      if ( centreData.motdepasse !== centreData.confirmerMotdepasse) {
        setHelperTextimg('');

        toast.error( 'Les mots de passe ne sont pas identiques');
      }
     if (centreData.motdepasse.length <8 ) {
      setHelperTextimg('');

      toast.error( 'Le   Mot de passe doit contenir  au minimum 8 caractéres ');
    } 
    if (centreData.phonenumber.length <8){
      toast.error( 'Le   Numéro de telephone  doit contenir  exactement 8 chiffres ');
    }
    
  }
  return (
    <Paper elevation={3} className={classes.papercentre}  >
      <form onSubmit={handleSubmit} >
        <ToastContainer />
        <Grid container >
          <Grid item lg={3} sm={3} md={3} xs={4} >
          <Button className={classes.return} href="/signin" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
          <h3 className={classes.comptecentre}>Créer un compte</h3>
            <div className={classes.col1}>
              <TextField required className={classes.textf} name='name' variant="outlined" label="nom " type="string" value={centreData.name} onChange={(e) => setcentreData({ ...centreData, name: e.target.value })} autoFocus></TextField>
              <Selectspecialty onChangeData2={onChangeData2} speciality={speciality} />
              <TextField required className={classes.textf} name='phonenumber' variant="outlined" label="numéro de téléphone" type="number" value={centreData.phonenumber} onChange={(e) => setcentreData({ ...centreData, phonenumber: e.target.value })} ></TextField>
              <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat} />
              <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity} />
              <TextField required className={classes.textf} name='adresseexact' variant="outlined" label="Adresse exacte" type="string" value={centreData.adresseexat} onChange={(e) => setcentreData({ ...centreData, adresseexact: e.target.value })} ></TextField>

            </div>
          </Grid>
          <Grid item lg={3} sm={3} md={3} xs={4} >
            <div className={classes.col2}>
            
            <TextField name="email" label="Email" onChange={handleChangeemail} variant="outlined" required type="email"  className={classes.email1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon className={classes.mailicon} />
                      </InputAdornment>
                    ),
                  }}
                />
            <Input className={classes.textf}  name="motdepasse" label="Mot de passe" handleChange={handleChangemotdepasse} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Input  className={classes.textf} name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirme}   type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1}/>
           <div>
            <Typography className={classes.labela}>Ajouter une image </Typography>
          
            <div className={classes.filebase}>
            <FileBase   type="file" name="choisir une image"  multiple={false} onDone={({ base64 }) => setcentreData({ ...centreData, selectedFileimage: base64 })} />
            </div>
            </div>
            <FormHelperText className={classes.error} >{helperTextimg}</FormHelperText>
            <TextField required name='description' type="string" variant="outlined" label="Déscription" value={centreData.description} onChange={(e) => setcentreData({ ...centreData, description: e.target.value })} rows={5} cols={6} multiline className={classes.textf} ></TextField>

            </div>
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={4}>
           <img src={Img2} className={classes.imgcentre}/>
          </Grid>
        </Grid>

        <Button className={classes.btncentre} variant="outlined" color="primary" type="submit" > S'inscrire</Button>

      </form>
    </Paper>

  );

}
export default FormCentre;