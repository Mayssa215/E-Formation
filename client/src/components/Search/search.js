import React, { useState } from "react";
import useStyles from "./styles";
import { Button, TextField , Typography} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearchedTraining } from "../../actions/training";
import { getSearchedFormer } from "../../actions/former";
import { getSearchedCentres } from "../../actions/centre";
import Resultatformteurs from "./resultat/resultatformateurs";
import Resultatform from "./resultat/resultatForm";
import Resultatcentres from "./resultat/resultatcentre";
import Former from "./recentformer";
import Training from "./recenttraining";
import Centre from "./recentcentre";
import Modal from "../MapCompononent/modal";
import Map from "../MapCompononent/map";
const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
const[ isconected, setisconected]=useState( JSON.parse( localStorage.getItem('profile')));
const [Data, setData] = useState(isconected?.Role);
  const [InputSearched, setInputSearched] = useState("");

console.log(Data);

const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (selectBox) {
      case "Formation":
        return dispatch(getSearchedTraining(InputSearched));
      case "Formateur":
        return dispatch(getSearchedFormer(InputSearched));

      case "Centres de formation":
        return dispatch(getSearchedCentres(InputSearched)); //history.push("/centredeformation");
    }
  };



  const handlechange2 = (e) => {
    setInputSearched(e.target.value);
    switch (selectBox) {
      case "Formation":
        return dispatch(getSearchedTraining(InputSearched));
      case "Formateur":
        return dispatch(getSearchedFormer(InputSearched));

      case "Centres de formation":
        return dispatch(getSearchedCentres(InputSearched)); //history.push("/centredeformation");
    }
  };
  const [selectBox, setselectBox] = useState("Formation");

  const handleChange = (e) => {
    setselectBox(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.searchClass}
          variant="outlined"
          placeholder="Ex.Développement web, Marketing,..."
          value={InputSearched}
        
          onChange={handlechange2}
        />
     
        <Select
          className={classes.search}
          native
          variant="outlined"
          value={selectBox}
          onChange={handleChange}
        >
          <option>Formation</option>
          <option>Formateur</option>
          <option>Centres de formation</option>
        </Select>

        <Button type="submit" className={classes.button} variant="outlined">
          Recherche
        </Button>
      </form>

      {InputSearched.length !==0 && selectBox==="Formation" ?<Resultatform /> : InputSearched.length !== 0 && selectBox==="Formateur" ? <Resultatformteurs/>: 
      InputSearched.length !== 0 && selectBox==="Centres de formation" ? <Resultatcentres/>

     :        (
        <div>
          {selectBox === "Formateur" ? (
            <Former />
          ) : selectBox === "Centres de formation" ? (
            <Centre />
          ) : (
            <Training />
          )}
        </div>
      )} 



{isconected && Data === "client" ? 
 <div>
 <Modal  open={open} handleClose={handleClose} setOpen={setOpen} />

 </div>
: null}
</div>
  );
};
export default Search;