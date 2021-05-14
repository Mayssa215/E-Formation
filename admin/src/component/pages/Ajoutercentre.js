import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, Paper, Grid,  Typography } from '@material-ui/core';
import Selectspecialty from '../Select/Selectspeciality';
import Input from '../authentification/inputuser';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import { getCity } from '../../actions/cities';
import { useHistory } from 'react-router-dom';
import { signupcentre } from '../../actions/center';
import { getgouvernorat } from '../../actions/gouvernorat';
import Img2 from '../Pictures/centre.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const FormCentre = ({ currentId, setCurrentId }) => {
  const [centreData, setcentreData] = useState({ lastname: '', idspeciality: '', namespeciality: '', selectedimage: '', idgouvernorate: '', idcity: '', namecities: '',description:'', namegouvernorate: '', phone: '', email: '', password: '', confirmerMotdepasse: '' });
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
    setcentreData({  lastname: '', idspeciality: '', namespeciality: '', selectedimage: '', idgouvernorate: '', idcity: '', namecities: '',description:'', namegouvernorate: '', phone: '', email: '', password: '', confirmerMotdepasse: ''  });
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
  }, [dispatch]);


  useEffect(() => {
    dispatch(getCity()).then((res) => {
      setCity(res);

    });
  }, [dispatch]);


  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;

    val === null ? setcentreData({ ...centreData, idgouvernorate: null, namegouvernorate: null }) :

      setcentreData({ ...centreData, idgouvernorate: val._id, namegouvernorate: nom })
    val === null ? setfiltredCity([]) :
      setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };
  const handleChangecity = (e, val) => {
    let nom = val.nom;
    console.log(nom);
    e.preventDefault();
    val === null ? setcentreData({ ...centreData, idcity: null, namecities: null }) :

      setcentreData({ ...centreData, idcity: val._id, namecities: nom });
    console.log(centreData.namecities);

  };
  const handleChangeemail = (event) => {
    setcentreData({ ...centreData, email: event.target.value })
  };
  const handleChangemotdepasse = (event) => {
    setcentreData({ ...centreData, password: event.target.value })
  };
  const handleChangeconfirme = (event) => {
    setcentreData({ ...centreData, confirmerMotdepasse: event.target.value })
  };

  const [gouvernorat, setGouvernorats] = useState([]);
  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
  }, [dispatch]);

  const onChangeData2 = (e, val) => {
    let name = val.nom;
    val === null ?   setcentreData({ ...centreData, idspeciality: null, namespeciality: null }) :
 
      setcentreData({ ...centreData, idspeciality: val._id, namespeciality: name })
  }

  const valueimg = centreData.selectedimage.indexOf("/");
  const valueimg2 = centreData.selectedimage.indexOf(";");
  const fileimg = centreData.selectedimage;
  const numberimg = valueimg2 - valueimg;
  const extensionimg = fileimg.substr(valueimg, numberimg);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if ((extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png")  && centreData.password === centreData.confirmerMotdepasse && centreData.password.length >= 8  && centreData.phone.length === 8 ) {
      dispatch(signupcentre(centreData, history));
      setError(false);
      setHelperTextimg('');
      clear();
    }  
     else if (extensionimg !== "/jpeg" || extensionimg !== "/jpg" || extensionimg !== "/png")  {
      setHelperTextimg('Choisir un fichier de type image');
      setError(true);
    }
      if ( centreData.password !== centreData.confirmerMotdepasse) {
        setHelperTextimg('');

        toast.error( 'Les mots de passe ne sont pas identiques');
      }
     if (centreData.password.length <8 ) {
      setHelperTextimg('');

      toast.error( 'Le   Mot de passe doit contenir  au minimum 8 caractéres ');
    } 
    if (centreData.phone.length <8){
      toast.error( 'Le   Numéro de telephone  doit contenir  exactement 8 chiffres ');
    }
    
  }
  return (
    <Paper elevation={3} className={classes.paperajoutc}  >
      <form onSubmit={handleSubmit} >
        <ToastContainer />
        <h3 className={classes.compteformer}>Ajouter centre de formation</h3>

        <Grid container >
          <Grid item lg={3} sm={3} md={3} xs={4} >
          <Button className={classes.return} href="/centresdeformation" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
            <div className={classes.colf1}>
              <TextField required className={classes.textformer}  name='lastname' variant="outlined" label="nom " type="string" value={centreData.lastname} onChange={(e) => setcentreData({ ...centreData, lastname: e.target.value })} autoFocus></TextField>
              <TextField required className={classes.textformer}  name='phone' variant="outlined" label="numéro de téléphone" type="number" value={centreData.phone} onChange={(e) => setcentreData({ ...centreData, phone: e.target.value })} ></TextField>
              
              <TextField name="email" label="Email" onChange={handleChangeemail} variant="outlined" required type="email" className={classes.textformer} 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon className={classes.mailicon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField required className={classes.textformer}  name='adressexact' variant="outlined" label="Adresse exacte" type="string" value={centreData.adressexact} onChange={(e) => setcentreData({ ...centreData, adressexact: e.target.value })} ></TextField>
               <TextField required className={classes.textformer}  name='description' type="string" variant="outlined" label="Déscription" value={centreData.description} onChange={(e) => setcentreData({ ...centreData, description: e.target.value })} rows={5} cols={6} multiline  ></TextField>

            </div>
          </Grid>
          <Grid item lg={3} sm={3} md={3} xs={4} >
            <div className={classes.colf2}>
            <Selectspecialty onChangeData2={onChangeData2} value={centreData.namespeciality} speciality={speciality} />

            <Selectgouvernorat onChangeGouvernorat={handleChangegouvernorat} value={centreData.namegouvernorate} gouvernorat={gouvernorat} />
              <SelectCities handleChangecity={handleChangecity} value={centreData.namecities} filtredCity={filtredCity} />
    
            <Input className={classes.textf}  name="password" label="Mot de passe" handleChange={handleChangemotdepasse} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Input  className={classes.textf} name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirme}   type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1}/>
           <div>
            <Typography className={classes.labela}>Ajouter une image </Typography>
          
            <div className={classes.filebase}>
            <FileBase   type="file" name="choisir une image"  multiple={false} onDone={({ base64 }) => setcentreData({ ...centreData, selectedimage: base64 })} />
            </div>
            </div>
            <FormHelperText className={classes.error} >{helperTextimg}</FormHelperText>

            </div>
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={4}>
           <img src={Img2} alt="imgcenter" className={classes.imgformer}/>
          </Grid>
        </Grid>

        <Button className={classes.enregistrer} variant="outlined"  type="submit" > Ajouter</Button>

      </form>
    </Paper>

  );

}
export default FormCentre;