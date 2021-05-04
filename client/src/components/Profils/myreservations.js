import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Getreserved } from '../../actions/booking';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from './styles';
import RestoreIcon from '@material-ui/icons/Restore';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Cards from './myreservcards';
import { Grid } from '@material-ui/core';

const   Myreservation = () => {
  const dispatch = useDispatch();
  const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
  const [Data, setData] = useState(infos);
  const [iduser,setiduser]= useState(Data._id);
  const [page, setPage] = useState(1);
  const [pageNumber, setpageNumber] = useState(1);
  const [Trainingsreserved, setTrainingsreserved]=  useState([])
  const [trainingvalider, settrainingvalider]=  useState([])
  const [trainingatt, settrainingatt]=  useState([])

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [shownext, setShownext]= useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue===0){
      dispatch( Getreserved(iduser,page)).then((res) => {
        if(res.length === 0)
        { setShownext(false);
        }
        else {
          setTrainingsreserved(res.trainingsatt);
          settrainingatt(res.idsatt);
        setpageNumber(pageNumber + 1);
        }
  
    
  });
}
    else{
         dispatch( Getreserved(iduser,page)).then((res) => {
        if(res.length === 0)
        { setShownext(false);
        }
        else {

          setTrainingsreserved(res.trainings);
          settrainingvalider(res.ids);
        setpageNumber(pageNumber + 1);
        }
    });
  } 
}

  useEffect(() => {
    dispatch( Getreserved(iduser,page)).then((res) => {
        if(res.length === 0)
        { setShownext(false);
        }
        else {
          setTrainingsreserved(res.trainingsatt);
          settrainingatt(res.idsatt);
        setpageNumber(pageNumber + 1);
        }
    

    });

    
}, [dispatch]);
  return (
    <div>
    <Paper square className={classes.scrolbar} >
      <Tabs
      className={classes.indicator}
              value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="En attente" icon={<RestoreIcon/>} value={0} />
        <Tab label="Réservée"  icon={<AssignmentTurnedInIcon/>} value={1}/>
      </Tabs>
    </Paper>
<Grid container >
{ 

Trainingsreserved.map((training) => (
 <Grid  item lg={4} md={4} sm={4} xs={12}       key={training._id}>
     <Cards Training={training}  Tablevalider={trainingvalider} Tableids={trainingatt} />
 </Grid>
 ))
 }
</Grid>
</div>
  );
}
export default Myreservation;