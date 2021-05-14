import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { Avatar,TextField, Button, FormLabel, Paper, Grid,  Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Selectspecialty from '../Select/Selectspeciality';
import { useHistory } from 'react-router-dom';
import { signupformer } from '../../actions/former';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import Input from '../authentification/inputuser';
import Img3 from '../Pictures/former.gif';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ToastContainer, toast } from "react-toastify";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import "react-toastify/dist/ReactToastify.css";
const Former = ({ currentId, setCurrentId }) => {
  const [formerData, setformerData] = useState({ firstname: '', lastname: '', phone: '', gender: '', idspeciality: '', namespeciality: '', Numbreofexperience: '', description:'', cin: '', selectedFile: '', email: '', password: '', confirmerMotdepasse: '', selectedimage: '' });
  const former = useSelector((state) => currentId ? state.former.find((f) => f._id === currentId) : null);
  const [error, setError] = React.useState(false);
  const [errorpdf, setErrorpdf] = React.useState(false);

  const [helperText, setHelperText] = React.useState('');
  const [helperTextimg, setHelperTextimg] = React.useState('');
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const [speciality, setspeciality] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();



  const clear = () => {
    setformerData({ firstname: '', lastname: '', phone: '', gender: '', idspeciality: '', namespeciality: '', Numbreofexperience: '', description:'', cin: '', selectedFile: '', email: '', password: '', confirmerMotdepasse: '', selectedimage: '' });
  }

  useEffect(() => {
    if (former) {
      setformerData(former)
    }
  }, [former])

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setspeciality(res);
    });
  }, [dispatch]);

  const onChangeData2 = (e, value) => {
if(value === null) {
    setformerData({ ...formerData, idspeciality : null , namespeciality : null})
}
else {
    setformerData ({ ...formerData, idspeciality : value._id , namespeciality : value.nom})
}



  };


  const handleChange = (event) => {
    setformerData({ ...formerData, gender: event.target.value })
  };

const handleChangeemail = (event) => {
  setformerData({ ...formerData, email: event.target.value })

}

  const handleChangemotdepasse = (event) => {
    setformerData({ ...formerData, password: event.target.value })
  };
  const handleChangeconfirme = (event) => {
    setformerData({ ...formerData, confirmerMotdepasse: event.target.value })
  };
  const value2 = formerData.selectedFile.indexOf("/");
  const value3 = formerData.selectedFile.indexOf(";");
  const file = formerData.selectedFile;
  const number = value3 - value2;
  const extension = file.substr(value2, number);

  const valueimg = formerData.selectedimage.indexOf("/");
  const valueimg2 = formerData.selectedimage.indexOf(";");
  const fileimg = formerData.selectedimage;
  const numberimg = valueimg2 - valueimg;
  const extensionimg = fileimg.substr(valueimg, numberimg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*    if(currentId  && (extension === "/pdf" )  && (extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png" )) {
       dispatch(updateFormer(currentId, formerData));
       clear();
       setCurrentId('');
       }
       else  */
    if (extension === "/pdf" && (extensionimg === "/jpeg" || extensionimg === "/jpg" || extensionimg === "/png") && formerData.password === formerData.confirmerMotdepasse && formerData.password.length >= 8 && formerData.phone.length === 8 && formerData.cin.length === 8) {

      dispatch(signupformer(formerData, history));
      setError(false);
      setErrorpdf(false);
      setHelperText('');
      setHelperTextimg('');
      clear();
    }
    else if (extension !== "/pdf") {
      setHelperText('Choisir un fichier de type PDF.');
      setErrorpdf(true);
    }
if (extensionimg !== "/jpeg" || extensionimg !== "/jpg" || extensionimg !== "/png") {
      setHelperTextimg('Choisir un fichier de type image')
      setError(true);
    }
   if (formerData.phone.length < 8) {
      toast.error('Le  Numéro de telephone doit contenir doit contenir exactement 8 chiffres  ');
    }

   if (formerData.cin.length < 8) {
      toast.error('Le  Numéro de carte d identité doit contenir exactement 8 chiffres ');
    }
 if (formerData.password !== formerData.confirmerMotdepasse) {
  toast.error( 'Les mots de passe ne sont pas identiques');
}
    if (formerData.password.length < 8) {
      toast.error('Le  Mot de passe doit contenir au minimum  8 caractères ');
    }
  };
  return (
    <Paper elevation={3} className={classes.paperajout}  >
      <form onSubmit={handleSubmit} >
        <ToastContainer />
        <h3 className={classes.compteformer}>Ajouter formateur</h3>
        <Grid container >
          <Grid item lg={3} sm={3} md={3} xs={4} >
          <Button className={classes.return} href="/formateurs" ><KeyboardBackspaceIcon className={classes.returnicon} /></Button>
          
            <div className={classes.colf1}>
              <TextField required className={classes.textformer}  name='firstname' variant="outlined" label="nom " type="string" value={formerData.firstname} onChange={(e) => setformerData({ ...formerData, firstname: e.target.value })} autoFocus ></TextField>
              <TextField required className={classes.textformer} name='lastname' variant="outlined" label="prénom" type="string" value={formerData.lastname} onChange={(e) => setformerData({ ...formerData, lastname: e.target.value })} ></TextField>
              <TextField required className={classes.textformer}  name='phone' variant="outlined" label=" Telephone" type="number" value={formerData.phone} onChange={(e) => setformerData({ ...formerData, phone: e.target.value })} ></TextField>
              <TextField required className={classes.textformer}  name='Numbreofexperience ' variant="outlined" label=" Année  d'expérience (ans)" type="number" value={formerData.Numbreofexperience} onChange={(e) => setformerData({ ...formerData, Numbreofexperience: e.target.value })} ></TextField>
              <TextField required className={classes.textformer} name='cin' variant="outlined" label=" Carte d'intentité" type="String" value={formerData.cin} onChange={(e) => setformerData({ ...formerData, cin: e.target.value })} ></TextField>

              <TextField className={classes.textformer} required name='description' type="string" variant="outlined" label="Déscription" value={formerData.description} onChange={(e) => setformerData({ ...formerData, description: e.target.value })} rows={5} cols={6} multiline  ></TextField>
              <FormLabel className={classes.labelsex} component="legend">Sexe</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={formerData.gender} onChange={handleChange}>
              <div className={classes.radio}>
                  <FormControlLabel value="Femme" control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Femme</span>} />
                  <FormControlLabel value="Homme" control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Homme</span>} />
                </div>
              </RadioGroup>
            </div>
          </Grid>
          <Grid item lg={3} sm={3} md={3} xs={4} >
            <div className={classes.colf2}>
            <Selectspecialty onChangeData2={onChangeData2} value={formerData.namespeciality} speciality={speciality} />


              
              <FormHelperText className={classes.error} >{helperText}</FormHelperText>
              <TextField className={classes.email} name="email" label="Email" onChange={handleChangeemail} variant="outlined" required type="email" 
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon className={classes.mailicon} />
                    </InputAdornment>
                  ),
                }}
              />
              <Input name="password" label="Mot de passe" handleChange={handleChangemotdepasse} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              <Input name="confirmerMotdepasse" label="Confimer  Mot de passe" handleChange={handleChangeconfirme} type={showPassword1 ? 'text' : 'password'} handleShowPassword={handleShowPassword1} />
              <Typography className={classes.labela} >Ajouter un CV </Typography>
              <div className={classes.filebase1}>
                <FileBase type="file" name="choisir un CV" multiple={false} onDone={({ base64 }) => setformerData({ ...formerData, selectedFile: base64 })} />
              </div>
              <Typography className={classes.labela}  >Ajouter une image </Typography>
              <div className={classes.filebase1}>
                <FileBase type="file" name="choisir une image" multiple={false} onDone={({ base64 }) => setformerData({ ...formerData, selectedimage: base64 })} />
                <Avatar className={classes.avatar} alt="imageformer" src={formerData.selectedimage} ></Avatar>

              </div>
              <FormHelperText className={classes.error} >{helperTextimg}</FormHelperText>
       
           
              </div>
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={4}>
            <img src={Img3} alt="imgformer" className={classes.imgformer} />
          </Grid>
        </Grid>
        <Button className={classes.enregistrer} variant="outlined" type="submit" > Ajouter</Button>
      </form>
    </Paper >

  );

}
export default Former;