import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Cards from "../../Former/cards";

const Resultatformteurs = () => {
  const formateur = useSelector(state => state.formateur);

  console.log("formateurs", formateur);
  return !formateur.length  ? null : (
    
    
   <Grid>
      {formateur.map((Former) => (
        <Grid item xs={12} sm={6}>
          <Cards Former={Former} />
        </Grid>
      ))}
    </Grid> 
  );
};

export default Resultatformteurs;