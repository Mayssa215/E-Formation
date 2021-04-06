import React from "react";
import {Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Cards from "../../Training/cards";

const Resultatform = () => {
  const formation = useSelector(state => state.formations);

  console.log("formations", formation);
  return !formation.length  ? null : (
    
   <Grid container lg={12}>
      {formation.map((Training) => (
        <Grid key={Training.name}  container item md={6}
        sm={6}
        lg={4}>
          <Cards Training={Training} />
        </Grid>
      ))}
    </Grid> 
  );
};

 export default Resultatform;