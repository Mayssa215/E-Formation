import React  from "react";
import {Grid} from "@material-ui/core";
import Cards from "./cards";
import useStyles from "./styles";
const Training = ({Alltraining}) => {
  const classes = useStyles();
 

  console.log("Alltraining", Alltraining); 
  
  return  !Alltraining ? null :  ( 
    
  <Grid    container  
  >
      {Alltraining.map((Training) => (
        <Grid  item xs={12} sm={6}>
          <Cards Training={Training}   key={Training._id}/>
        </Grid>
      ))}
    </Grid> 
 
  );
};

 export default Training;