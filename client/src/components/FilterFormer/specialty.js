import React, { useEffect, useState } from "react";
import {
  Button,
  
} from "@material-ui/core";
import useStyles from "./styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { getcategorie } from "../../actions/categorie";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from "@material-ui/core/Checkbox";

const Speciality = ( {onFilterSpecialityAplly } ) => {
  const dispatch = useDispatch();
  const [Speciality, setSpeciality] = useState([]);
  const [SpecialityIds, setSpecialityIds] = useState([]);

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setSpeciality(res);
     
});
  }, [dispatch]);

  const [showspeciality, setShowspeciality] = useState(true);
  const classes = useStyles();

  const onChangeSpeciality = (event, value) => {
      if(value)
      {
        SpecialityIds.push( event.target.value);
        setSpecialityIds(SpecialityIds);
        console.log(SpecialityIds);

      }
      else 
      {
        SpecialityIds.splice(SpecialityIds.indexOf(event.target.value),1);
          setSpecialityIds(SpecialityIds);
          console.log(SpecialityIds);

      }
      onFilterSpecialityAplly(SpecialityIds);
  };

  return (
    <div>
      <div className={classes.categopen}>
        <FormLabel component="legend" className={classes.categlabel}>
          Spécialités
        </FormLabel>
        <Button
          className={classes.openicon}
          onClick={() => {
            setShowspeciality(!showspeciality);
          }}
        >
          {showspeciality ? (
            <CloseIcon className={classes.iconopenclose} />
          ) : (
            <KeyboardArrowDownIcon className={classes.iconopenclose} />
          )}
        </Button>
      </div>
      {!showspeciality || Speciality.length === 0 ? null : (
        <FormGroup className={classes.check}>
          {Speciality.map((c) => (
            <FormControlLabel
              key={c._id}
              control={
                <Checkbox
                  size="medium"
                  onChange={onChangeSpeciality}
                  value={c._id}
                               />
              }
              label={<span className={classes.categnom}>{c.nom} </span>}
            />
          ))}
        </FormGroup>
      )}
    </div>
  );
};
export default Speciality;