import React, { useState } from "react";
import useStyles from "./styles";
import { Button, TextField , Paper} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";

import { getSearchedTraining } from "../../actions/training";
import { getSearchedFormer } from "../../actions/former";
import { getSearchedCentres } from "../../actions/centre";

import Resultatformteurs from './resultat/resultatformateurs';
import Resultatform from "./resultat/resultatForm";
import Resultatcentres from "./resultat/resultatcentre";


const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const [InputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

switch (selectBox) {
  case "Formateur": 
  return dispatch (getSearchedFormer(InputSearch));
  case "Formation" : 
  return  dispatch(getSearchedTraining(InputSearch));

  case "Centres de formation" : 
  return   dispatch(getSearchedCentres(InputSearch));

}


  };

  const [selectBox, setselectBox] = useState("Formation");


  return (
    <div className={classes.search}>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.searchClass}
          variant="outlined"
          placeholder="Ex.Développement web, Marketing,..."
          value={InputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />

        <Select
          native
          variant="outlined"
          value={selectBox}
          onChange={(e) => setselectBox(e.target.value)}
        >
          <option>Formation</option>
          <option>Formateur</option>

          <option>Centres de formation</option>
        </Select>

        <Button type="submit" className={classes.button} variant="outlined">
          Recherche
        </Button>
      </form>

      <Paper>
      < Resultatformteurs />  
      <Resultatform />  
     < Resultatcentres/> 
      </Paper>
     
    </div>
    
  );
};
export default Search;