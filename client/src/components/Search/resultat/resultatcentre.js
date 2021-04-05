import React from "react";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Cards from "../../Centre/cards";

const Resultatcentres = () => {
  const centres = useSelector(state => state.centre);

  console.log("centres", centres);
  return !centres.length ? null : (
    
    
   <Grid>
      {centres.map((centres) => (
        <Grid key={centres.nomcentre} item xs={12} sm={6}>
          <Cards Centre={centres} />
        </Grid>
      ))}
    </Grid> 
  );
};

export default Resultatcentres;