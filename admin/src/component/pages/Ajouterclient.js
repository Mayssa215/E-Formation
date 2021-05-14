import React, { useState,useEffect} from 'react'
import { Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles';
import Input from '../authentification/inputuser';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/authentification';
import Img from '../Pictures/user.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast } from "react-toastify";
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
    firstname: '', lastname: '', gouvernorate: '', city:'', idgouvernorate:'', idcity:'',cin: '', phone: '', email: '', password: '', confirmerMotdepasse: ''
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
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCity()).then((res) => {
      setCity(res);

    });
  }, [dispatch]);


  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;

    val === null ? setsignData({ ...signData, gouvernorate: null }) :
   
      setsignData({ ...signData,  gouvernorate: nom, idgouvernorate: val._id })
    val === null ? setfiltredCity([]) :
      setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };

  const handleChangecity = (e, val) => {
    let nom = val.nom;
    console.log(nom);
    e.preventDefault();
    val === null ? setsignData({ ...signData,  city: null }) :

      setsignData({ ...signData, city: nom , idcity: val._id });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signData.password === signData.confirmerMotdepasse && signData.password.length >= 8 &&  signData.cin.length ===8 &&  signData.phone.length === 8) {
    dispatch(signup(signData, history));

    }
    else if (signData.password !== signData.confirmerMotdepasse){
      toast.error( 'Les mots de passe ne sont pas identiques');
    }
    else if(signData.password.length < 8){
      toast.error( 'Le  Mot de passe doit contenir au minimum 8 caratéres ');
    } 
    else if ( signData.cin.length< 8){
      toast.error( 'Le  Numero de carte d identité doit contenir exactement 8 chiffres ');

    }
    else if ( signData.phone.length < 8){
      toast.error( 'Le  Numéro de telephone doit contenir doit contenir exactement 8 chiffres  ');

    }
  };
  const handleChange = (e) => {
    setsignData({ ...signData, [e.target.name]: e.target.value });
  };

  return (

    <div >
      <Paper className={classes.paperajoutu} elevation={10} >
        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <h3 className={classes.compteformer}>Ajouter un client </h3>

          <Grid container >
            <Grid item lg={3} sm={3} md={3} xs={4}>
            <Button className={classes.return} href="/clients" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
              <div className={classes.colf1}>
                <Input  name="firstname" label="Nom" handleChange={handleChange} autoFocus />
                <Input name="lastname" label="Prénom" handleChange={handleChange} />
                <Input  name="phone" label="Telephone" handleChange={handleChange} type="number" />
                <Input  name="cin" label="Cin" handleChange={handleChange} type="number" />
                <TextField name="email" label="Email" onChange={handleChange} variant="outlined" required type="email" className={classes.emailuser}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon className={classes.mailicon} />
                      </InputAdornment>
                    ),
                  }}
                />        
              </div>
            </Grid>
            <Grid item lg={4} sm={3} md={3} xs={4}>
              <div className={classes.colf2} >
              <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat} value={signData.gouvernorate} gouvernorat={gouvernorat} />
                <SelectCities handleChangecity={handleChangecity} value={signData.city} filtredCity={filtredCity} />         
                 <Input   name="password" label="Mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                <Input   name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChange} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
              </div>
            </Grid>
   
            <Grid item lg={5} sm={6} md={6} xs={4}>
              <img src={Img} alt="imguser" className={classes.imguser} />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" className={classes.enregistrer}>
            s'inscrire
                     </Button>
        </form>
      </Paper>
    </div>
  )
}

export default Signup;