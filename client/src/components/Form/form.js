import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, FormLabel, Paper, Grid, Container, Typography} from '@material-ui/core';
import Select from '../Select/select';
import MaterialUIPickers from '../Datepicker/datepicker';
import Time from '../Timepicker/timepicker';
import { creatTraining,  updateTraining } from '../../actions/training';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import {getgouvernorat} from '../../actions/gouvernorat';
import {getCity} from '../../actions/cities';
import SelectCities from '../Select/selectCities';
import Selectgouvernorat from '../Select/selectgouvernorat';
import moment from 'moment';


const Form = ({ currentId, setCurrentId }) => {
  const [formationData, setformationData] = useState({nomformation: '', coach: '', idcategorie: '',  idgouvernorat:'', idcities:'' ,  date: '', horaire: '',duree:'', lieu: '', prix: '', Nombredeplace: '', description: '', selectedFile: ' '});
  const formation = useSelector((state) => currentId ? state.formations.find((f) => f._id === currentId) : null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = useState('');
  const [categorie, setCategorie] = useState([]);
  const [gouvernorat, setGouvernorats] = useState([]);
  const [City, setCity] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const clear = () => {
    setformationData({ nomformation: '', coach: '', categorie: '', date: '', horaire: '', duree:'', lieu: '', prix: '', Nombredeplace: '', description: '', selectedFile: ' ' });
  }

  useEffect (()=> {
    if(formation) {setformationData(formation) 
    }
    } ,[formation]  ) 

    useEffect(() => {
      dispatch(getcategorie()).then((res) => {
        setCategorie(res);
      });
  }, []);
  useEffect(() => {
    dispatch(getCity()).then((res) => {
       setCity(res);
    
    }); 
}, []); 
useEffect(() => {
  dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
  });
}, []);

    const value2 = formationData.selectedFile.indexOf("/");
    const value3 = formationData.selectedFile.indexOf(";");
    const file = formationData.selectedFile;
    const number = value3 - value2;
    const extension = file.substr(value2, number);    
  const onChangeData2 = (e, val) => {
    val ===  null? setformationData({...formationData, idcategorie:null}):
    setformationData({ ...formationData, idcategorie: val._id })
  }

  const onChangeData1 = (e) => {
    setformationData({ ...formationData, date: e.target.value })
  }
  const onChangeTime = (e) => {
    setformationData({ ...formationData, horaire: e.target.value })
  }
  const handleChangegouvernorat = (e, val) => {
    val ===  null? setformationData({...formationData, idgouvernorat:null}):
  
    setformationData({ ...formationData, idgouvernorat: val._id })
    val === null ? setfiltredCity([]) :
    setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  }; 
  
  
  const handleChangecity = (e, val) => {
    e.preventDefault();
    val ===  null? setformationData({...formationData, idcities:null}):
  
    setformationData({ ...formationData, idcities: val._id })
  
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId  && (extension === "/jpeg" || extension === "/jpg" || extension === "/png" )) {
    dispatch(updateTraining(currentId, formationData));
    clear();
    setCurrentId('');
    }
    else 
    if(extension === "/jpeg" || extension === "/jpg" || extension === "/png") {

      dispatch(creatTraining(formationData));
      setError(false);
      setHelperText('');
      alert(" Succés !")
      clear();
    } 
    else {
      setHelperText('Choisir un fichier de type image.');
      setError(true);
    }
  }
  return (
    <Paper elevation={3} className={classes.paper}  >
      <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
        <Grid container item xs={6} md={12} lg={12} >

          <Grid item xs={12} md={6} lg={6}  >
            <TextField className={classes.Textfiled} required name='nom' variant="outlined" label="nom du formation" type="string" value={formationData.nomformation} onChange={(e) => setformationData({ ...formationData, nomformation: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <TextField required name='formateur' variant="outlined" label="Nom  du formateur" type="string" value={formationData.coach} onChange={(e) => setformationData({ ...formationData, coach: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <Select onChangeData={onChangeData2}  categorie={categorie} />
            <MaterialUIPickers onChangeDate={onChangeData1} date={moment(formationData.date).format("yyyy-MM-DD")}  />
            <Time onChangetime={onChangeTime} time={formationData.horaire} />
            <TextField className={classes.Textfiled}  name='durée' variant="outlined" label="durée du formation" type="number" value={formationData.duree} onChange={(e) => setformationData({ ...formationData, duree: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>

          </Grid>
          <Grid item xs={12} md={6} lg={6} >
            <Selectgouvernorat     onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat}  />
            <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity}  /> 
            <TextField required name='prix' type="number" variant="outlined" label="prix" value={formationData.prix} onChange={(e) => setformationData({ ...formationData, prix: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <TextField required name='Nombre de place' type="number" variant="outlined" label="Nombre de place" value={formationData.Nombredeplace} onChange={(e) => setformationData({ ...formationData, Nombredeplace: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <TextField required name='description' type="string" variant="outlined" label="Déscription" value={formationData.description} onChange={(e) => setformationData({ ...formationData, description: e.target.value })} rows={5} cols={6} multiline style={{ width: 360, marginTop: 15 }}></TextField>
            <div className={classes.div} >
              <FormLabel className={classes.label} color="primary" >Ajouter une image </FormLabel>
              <FileBase type="file" name="choisir une image" multiple={false}   onDone={({ base64 }) => setformationData({ ...formationData, selectedFile: base64 })} />
              <FormHelperText className={classes.error} >{helperText}</FormHelperText>

            </div>
            <Button className={classes.buttonSubmit} variant="outlined" color="primary" type="submit" > Envoyer</Button>
          </Grid>
        </Grid>

      </form>
    </Paper>

  );

}
export default Form;