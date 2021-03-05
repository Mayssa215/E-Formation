import React, { useEffect, useState } from 'react';
import { TextField, Button, Paper, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { getcategorie } from '../../actions/categorie';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@material-ui/core/Slider';
import InputAdornment from '@material-ui/core/InputAdornment';
import PlaceIcon from '@material-ui/icons/Place';
import Checkbox from '@material-ui/core/Checkbox';
import { Scrollbars } from 'rc-scrollbars';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';

function valuetext(value) {
  return `${value}TND`;
}
function valuetext1(value) {
  return `${value}H`;
}
const Filter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getcategorie()).then((res)=>{
      setCategories(res);
    });
  }, [])
 
  //const categorie = useSelector(state => state.categorie)
  const [Categories, setCategories]=useState([]);

  const [value, setValue] = React.useState(['', '']);
  const [heur, setheur] = React.useState(['', '']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange1 = (event, newheur) => {
    setheur(newheur);
  };
  const [showcateg, setShowcateg] = useState(true);
 
  return (
    <div >
      <Paper className={classes.Paper}>
        <Scrollbars autoHide className={classes.scroll}>       
          <div  className={classes.categopen}>  
          <FormLabel component="legend" className={classes.categlabel}>Catégorie  </FormLabel>
          <Button  className={classes.openicon}  
        
          onClick =  {() => {
            setShowcateg(!showcateg);
          }}
         >  { showcateg ? < CloseIcon   className={classes.iconopenclose } />  :   < KeyboardArrowDownIcon   className={classes.iconopenclose }/> }</Button>
          </div>
          { !showcateg ||  Categories.length===0? null :
          
          <FormGroup className={classes.check}>
            {
            Categories.map((c) => (
             <FormControlLabel
              key={c._id}
              control={<Checkbox name="gilad" color="primary" size="medium"
                />}
                label={<span className={classes.categnom}>{c.nom}</span>}
              />
              )) }
          </FormGroup>
          }
           <div className={classes.all}>
          <div className={classes.prixgouville} >
            <Typography id="range-slider" className={classes.prix}>
              Prix
           </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              step={50}
              min={0}
              max={5000}
              className={classes.div}

            />
            <div className={classes.div2}>
              <TextField name='Lieu' label={<span className={classes.gouvernorat}> Gouvernorat </span>} type="string"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      < PlaceIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.div2}>
              <TextField name='Lieu' label={<span className={classes.gouvernorat}> Ville </span>} type="string"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      < PlaceIcon className={classes.icon} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
            <Typography id="range-slider" className={classes.dureenom} gutterBottom>
              Durée de formation
           </Typography>
            <Slider
              value={heur}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext1}
              step={1}
              min={0}
              max={150}
              className={classes.duree}
            />
          </div>
          </div >
          <div className={classes.dates}>
          <div  noValidate>
            <FormLabel component="legend"></FormLabel>
            <TextField
              id="date"
              label="Date Début"
              type="date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.div3}

            />
          </div>
          <div  noValidate>
            <TextField
              id="date"
              label={<span> Date Fin </span>}
              type="date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.div3}
            />
          </div>
      
         <div >
            <FormGroup className={classes.choix} >
              <FormControlLabel 
              className={classes.choix1}
                control={
                  <Checkbox  color="default" name="checkedI" size="medium"  />}
                label={<span className={classes.categnom}>Commence</span>} />
              <FormControlLabel
                className={classes.choix1}
                control={
                  <Checkbox  color="default" name="checkedI" size="medium"  />}
                label={<span className={classes.categnom}>Appartient</span>} />
            </FormGroup>
          </div> 
          </div>
          </div>
        </Scrollbars>
      </Paper>
    </div >


  )
}
export default Filter;
