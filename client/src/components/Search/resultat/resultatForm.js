import React from "react";
import {Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Form from "./form";

const Resultatform = () => {
  const formation = useSelector(state => state.formations);

  console.log("formations", formation);
  return !formation.length  ? null : (
    
   <Grid>
      {formation.map((form) => (
        <Grid key={form.nom} item xs={12} sm={6}>
          <Form form={form} />
        </Grid>
      ))}
    </Grid> 
  );
};

 export default Resultatform;