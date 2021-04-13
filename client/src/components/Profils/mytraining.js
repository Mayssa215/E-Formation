import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getTrainingFormer} from '../../actions/former';
import { Grid, Button } from "@material-ui/core";
import Cards from "./mycards";
import useStyles from "../Training/styles";



const Mytrainings = () => {
    const dispatch = useDispatch();
    const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(infos);
    const [userid,setuserid]= useState(Data._id);
    const [TrainingsFormer, setTrainingsFormer]=  useState([])
    useEffect(() => {
        dispatch(getTrainingFormer(userid)).then((res) => {
            setTrainingsFormer(res);
        });
    }, []);


    return (
        <div>
      <Grid container >
{console.log(TrainingsFormer)
}   
     { TrainingsFormer.map((training) => (
 <Grid  item lg={12} md={12} sm={12} xs={12}       key={training._id}>
   <Cards Training={training} />
 
         </Grid>

     ))}

     </Grid> 
 </div>
 )
}
export default Mytrainings;