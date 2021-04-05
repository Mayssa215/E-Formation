import React, { useState,useEffect} from 'react'
import { Button, Paper, Grid, Typography, TextField } from '@material-ui/core';
import useStyles from './styles';
import Input from './inputsuser';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from "react-google-login";
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/authentification';
import Img from '../Pictures/user.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast, zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import { getgouvernorat } from '../../actions/gouvernorat';
import { getCity } from '../../actions/cities';

const Signup = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [signData, setsignData] = useState({
    nom: '', prenom: '', gouvernoratu: '', villeu:'',cin: '', telephone: '', email: '', motdepasse: '', confirmerMotdepasse: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const [filtredCity, setfiltredCity] = useState([]);
  const [City, setCity] = useState([]);
  const [gouvernorat, setGouvernorats] = useState([]);

  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
  }, []);

  useEffect(() => {
    dispatch(getCity()).then((res) => {
      setCity(res);

    });
  }, []);


  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;

    val === null ? setsignData({ ...signData, gouvernoratu: null }) :
   
      setsignData({ ...signData,  gouvernoratu: nom })
    val === null ? setfiltredCity([]) :
      setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };

  const handleChangecity = (e, val) => {
    let nom = val.nom;
    console.log(nom);
    e.preventDefault();
    val === null ? setsignData({ ...signData,  villleu: null }) :

      setsignData({ ...signData, villeu: nom });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signData.motdepasse === signData.confirmerMotdepasse && signData.motdepasse.length >= 8 &&  signData.cin.length ===8 &&  signData.telephone.length === 8) {
    dispatch(signup(signData, history));

    }
    else if (signData.motdepasse !== signData.confirmerMotdepasse){
      toast.error( 'Les mots de passe ne sont pas identiques');
    }
    else if(signData.motdepasse.length < 8){
      toast.error( 'Le  Mot de passe doit contenir au minimum 8 caratéres ');
    } 
    else if ( signData.cin.length< 8){
      toast.error( 'Le  Numero de carte d identité doit contenir exactement 8 chiffres ');

    }
    else if ( signData.telephone.length < 8){
      toast.error( 'Le  Numéro de telephone doit contenir doit contenir exactement 8 chiffres  ');

    }
  };
  const handleChange = (e) => {
    setsignData({ ...signData, [e.target.name]: e.target.value });
  };

  return (

    <div >
      <Paper className={classes.signupu} elevation={10} >
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <Grid container >
            <Grid item lg={3} sm={3} md={3} xs={4}>
            <Button className={classes.return} href="/signin" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
              <h3 className={classes.compte}>Créer un compte</h3>
              <div className={classes.gr1}>
                <Input  name="nom" label="Nom" handleChange={handleChange} autoFocus />
                <Input name="prenom" label="Prénom" handleChange={handleChange} />
                <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat} />
                <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity} />         
                     
              </div>
            </Grid>
            <Grid item lg={4} sm={3} md={3} xs={4}>
              <div className={classes.gr2} >
                <Input  name="telephone" label="Telephone" handleChange={handleChange} type="number" />
                <Input  name="cin" label="Cin" handleChange={handleChange} type="number" />
                <TextField name="email" label="Email" onChange={handleChange} variant="outlined" required type="email"  className={classes.email1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon className={classes.mailicon} />
                      </InputAdornment>
                    ),
                  }}
                />                 
                 <Input   name="motdepasse" label="Mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                <Input   name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChange} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
              </div>
            </Grid>
   
            <Grid item lg={5} sm={6} md={6} xs={4}>
              <img src={Img} className={classes.imguser} />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" className={classes.buttonuser}>
            s'inscrire
                     </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Signup
