import React, { useState, useEffect } from 'react';
 
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, FormLabel, Paper, Grid, Container, Typography} from '@material-ui/core';
import Select from '../Select/select';
import Selectgouvernorat from '../Select/selectgouvernorat';
import MaterialUIPickers from '../Datepicker/datepicker';
import Time from '../Timepicker/timepicker';
import { creatTraining,  updateTraining } from '../../actions/training';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';

import { getcategorie } from '../../actions/categorie';
import {getgouvernorat} from '../../actions/gouvernorat';
import {getCity} from '../../actions/cities';
import SelectCities from '../Select/selectCities';
import moment from 'moment';
import TextEditor from '../TextEditor/texteditor';



const Form = ({ currentId, setCurrentId }) => {
  const [formationData, setformationData] = useState({name: '', idcategorie: '', idgouvernorate:'',idcities:'' , namecity:'',firstdate: '', lastdate: '', hour: '',periode:'',  price: '', numberplace: '', planning:'', description: '', objectif:'', skills:'', selectedimage: ' '});
  const formation = useSelector((state) => currentId ? state.formations.find((f) => f._id === currentId) : null);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [categorie, setCategorie] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [City, setCity] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);


  const clear = () => {
    setformationData({ name: '', idcategorie: '', idgouvernorate:'',idcities:'' , nomcities:'',firstdate: '', lastdate: '', hour: '',periode:'',  price: '', numberplace: '', planning:'', description: '', objectif:'', skills:'', selectedimage: ' ' });
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
const onChangeLastDate = (e) => {
  setformationData({ ...formationData, lastdate: e.target.value })
}
const onChangeFirstDate = (e) => {
setformationData({ ...formationData, firstdate: e.target.value })
}
const handleChangegouvernorat = (e, val) => {
  val ===  null? setformationData({...formationData, idgouvernorate:null}):

  setformationData({ ...formationData, idgouvernorate: val._id })
  val === null ? setfiltredCity([]) :
  setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
}; 


const handleChangecity = (e, val) => {
  let nom=val.nom;
  console.log(nom);
  e.preventDefault();
  val ===  null? setformationData({...formationData, idcity:null,namecity:null}):

  setformationData({ ...formationData, idcity: val._id , namecity: nom });
 console.log(formationData.namecity);

}; 
  
    const onChangeData2 = (e, val ) => {
      val ===  null? setformationData({...formationData, idcategorie:null}):
      setformationData({ ...formationData, idcategorie: val._id })
    }
    
    const [gouvernorat, setGouvernorats] = useState([]);
  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
        setGouvernorats(res);
    });
}, []);

const  handleEditorChange = (e) => {
     
  setformationData({...formationData, planning:e.target.getContent()});
}

const handleEditorChangeobjectif  = (e) => {
     
  setformationData({...formationData, objectif:e.target.getContent()});
}
const handleEditorChangeprerequis  = (e) => {
     
  setformationData({...formationData, skills:e.target.getContent()});
}
    const value2 = formationData.selectedimage.indexOf("/");
    const value3 = formationData.selectedimage.indexOf(";");
    const file = formationData.selectedimage;
    const number = value3 - value2;
    const extension = file.substr(value2, number);

  
 
  const onChangeTime = (e) => {
    setformationData({ ...formationData, hour: e.target.value })
  }

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
    
            <TextField className={classes.Textfiled} required name='name' variant="outlined" label="nom du formation" type="string" value={formationData.name} onChange={(e) => setformationData({ ...formationData, name: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <Select onChangeData2={onChangeData2}  categorie={categorie} />
            <MaterialUIPickers onChangeFirstDate={onChangeFirstDate} firstdate={moment(formationData.firstdate).format("yyyy-MM-DD")} onChangeLastDate={onChangeLastDate} lastdate={moment(formationData.lastdate).format("yyyy-MM-DD")} />

            <Time onChangetime={onChangeTime} time={formationData.hour} />
            <TextField className={classes.Textfiled}  name='periode ' variant="outlined" label="durée du formation (heures)" type="number" value={formationData.duree} onChange={(e) => setformationData({ ...formationData, periode: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>

          </Grid>
          <Grid item xs={12} md={6} lg={6} >
          <Selectgouvernorat     onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat}  />

          <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity}  />

            <TextField required name='price' type="number" variant="outlined" label="prix (TND)" value={formationData.price} onChange={(e) => setformationData({ ...formationData, price: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <TextField required name='numberplace' type="number" variant="outlined" label="Nombre de place" value={formationData.numberplace} onChange={(e) => setformationData({ ...formationData, numberplace: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <TextField required name='description ' type="string" variant="outlined" label="description de la formation" value={formationData.description} onChange={(e) => setformationData({ ...formationData, description: e.target.value })} rows={5} cols={6} multiline style={{ width: 360, marginTop: 15 }}></TextField>

          <Typography>Programme</Typography>
              <TextEditor  handleEditorChange={handleEditorChange} editor={formationData.planning}  />
              <Typography>objectifs de formation</Typography>
              <TextEditor handleEditorChange={handleEditorChangeobjectif} editor={formationData.objectif}  />
              <Typography>Les prerequis</Typography>
              <TextEditor handleEditorChange={handleEditorChangeprerequis} editor={formationData.skills}  />
           
            <div className={classes.div} >
           
              <FormLabel className={classes.label} color="primary" >Ajouter une image </FormLabel>
              <FileBase type="file" name="choisir une image" multiple={false}   onDone={({ base64 }) => setformationData({ ...formationData, selectedimage: base64 })} />

           
 
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