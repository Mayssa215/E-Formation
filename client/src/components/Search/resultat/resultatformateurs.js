import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Formateur from "./formateur";

const Resultatformteurs = () => {
  const formateur = useSelector(state => state.formateur);

  console.log("formateurs", formateur);
  return !formateur.length  ? null : (
    
    
   <Grid>
      {formateur.map((formt) => (
        <Grid item xs={12} sm={6}>
          <Formateur formt={formt} />
        </Grid>
      ))}
    </Grid> 
  );
};

export default Resultatformteurs;