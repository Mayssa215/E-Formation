import React ,{ useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Button, FormLabel, Paper, Grid, Container, Typography} from '@material-ui/core';
import Select from '../Select/select';
import MaterialUIPickers from '../Datepicker/datepicker';
import Time from '../Timepicker/timepicker';
import { getTrainingbyid, updateTraining} from '../../actions/training';
import { useDispatch, useSelector } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getcategorie } from '../../actions/categorie';
import {getgouvernorat} from '../../actions/gouvernorat';
import {getCity} from '../../actions/cities';
import Selectgouvernorat from '../Select/selectgouvernorat';
import SelectCities from '../Select/selectCities';
import moment from 'moment';
import TextEditor from '../TextEditor/texteditor';
import Mapformer from "../MapFormers/mapcreate";

const UpdateForm = () =>{
const url = window.location.href;
const id = url.substr(37);
const [yGouv, setYGouvernorat] = useState(10);
  const [xGouv, setXGouvernorat] = useState(36);
  const [yCity, setYCity] = useState(10);
  const [xCity, setXCity] = useState(36);
  const [x, setX] = useState();
  const [y, setY] = useState();

  const [formationData, setformationData] = useState({name: '', 
    firstdate: '',
    lastdate:'',
    hour:'',
    price: '',
    namecity:'',
    periode:'',
    numberplace: '',
    planning:'',
    description : '',
    objectif: '',
    skills:'',
    selectedimage :'',
    idcity:'',
    namegouvernorate:'',
    idgouvernorate:'',
    namecategorie:'',
    idcategorie:'',
    longitude:'',
    latitude:'',
    id_former:'',
    id_center:''
  });

  


  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [categorie, setCategorie] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [City, setCity] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);
  const TextPoint=(props) =>{
    return (
      <div>
        <TextField
          type="text"
          className="auto1"
          disabled
          value={props.value}
          defaultValue={props.defaultValue}
        />
      </div>
    );
  }
  const TextPoint1 = (props) => {
    return (
      <div>
        <TextField
          type="text"
          className="auto1"
          disabled
          value={props.value}
          defaultValue={props.defaultValue}
        />
        
      </div>
    );
  }



 

    useEffect(() => {
      dispatch(getcategorie()).then((res) => {
        setCategorie(res);
      });
      dispatch(getCity()).then((res) => {
        setCity(res);
     }); 
     dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
  });
  dispatch(getTrainingbyid(id)).then((res) =>{
    setformationData(res);

  });
  }, []);
   useEffect(() => {
     handleset();
   },[])
  const handleset = () =>{
    setX(formationData.latitude)
     setY(formationData.longitude)
    }



const onChangeLastDate = (e) => {
  setformationData({ ...formationData, lastdate: e.target.value })
}
const onChangeFirstDate = (e) => {
setformationData({ ...formationData, firstdate: e.target.value })
}
const handleChangegouvernorat = (e, val) => {
  let nom = val.nom;
  if (val === null) {
    setformationData({...formationData, idgouvernorate:null})
    setXGouvernorat(36);
    setYGouvernorat(10);
  }else {
    setXGouvernorat(val.latitude);
    setYGouvernorat(val.longitude);
    
  setformationData({ ...formationData, idgouvernorate: val._id , namegouvernorate: nom});
  console.log(formationData.idgouvernorate);
  val === null ? setfiltredCity([]) :
  setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  }
 
}; 


const handleChangecity = (e, val) => {
  let nom=val.nom;
  console.log(nom);
  e.preventDefault();
  if( val === null ) {
    setformationData({...formationData, idcity:null,namecity:null});
    setXCity(36);
    setYCity(10);
  }else{
    setXCity(val.latitude);
    setCity(val.longitude);
    setformationData({ ...formationData, idcity: val._id , namecity: nom });
   console.log(formationData.namecity);
  }
 
 

}; 
const getLocation = (location) => {
  //console.log("In getLocation");
setX(location[0]);
setY(location[1]);

setformationData({...formationData , latitude : x , longitude : y });
 
  
 console.log(x,y);
};
  
const onChangeData2 = (e, val ) => {
  console.log(formationData.idcategorie);
  val ===  null ? setformationData({...formationData, idcategorie:null}):
  setformationData({ ...formationData, idcategorie: val._id })
 
  
};
    

    const [gouvernorat, setGouvernorats] = useState([]);


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
    
   if( (extension === "/jpeg" || extension === "/jpg" || extension === "/png" )) {
   dispatch(updateTraining(id, formationData));
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
          <TextPoint value={x} />
          <TextPoint1 value={y} />
          <Mapformer 
                x={xCity}
                  y={yCity}
                  onGetLocation={getLocation}
                  x1={xGouv}
                  y1={yGouv}  />
            <TextField className={classes.Textfiled} required name='name' variant="outlined" label="nom du formation" type="string" value={formationData.name} onChange={(e) => setformationData({ ...formationData, name: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
            <Select onChangeData2={onChangeData2}  categorie={categorie}  value={formationData.namecategorie} />
            <MaterialUIPickers onChangeFirstDate={onChangeFirstDate}  onChangeLastDate={onChangeLastDate}   firstdate={moment(formationData.firstdate).format("yyyy-MM-DD")} lastdate={moment(formationData.lastdate).format("yyyy-MM-DD")}/>

            <Time onChangetime={onChangeTime} time={formationData.hour} />
            <TextField className={classes.Textfiled}  name='periode ' variant="outlined" label="durée du formation (heures)" type="number" value={formationData.periode} onChange={(e) => setformationData({ ...formationData, periode: e.target.value })} style={{ width: 360, marginTop: 15 }}></TextField>
  
          </Grid>
          <Grid item xs={12} md={6} lg={6} >
          <Selectgouvernorat     onChangeGouvernorat={handleChangegouvernorat} gouvernorat={gouvernorat}  value={formationData.namegouvernorate} />

          <SelectCities handleChangecity={handleChangecity} filtredCity={filtredCity} value={formationData.namecity}  />

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
            <Button className={classes.buttonSubmit} variant="outlined" color="primary" type="submit"   > Envoyer</Button>
          </Grid>
        </Grid>

      </form>
    </Paper>
)



}
export default UpdateForm;