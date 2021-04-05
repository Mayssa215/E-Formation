import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Slider from "@material-ui/core/Slider";

const Datefilter = ({
  OnfilterApplyDuree,
  OnfilterApplyDatedebut,
  OnfilterApplyDatefin,
  OnfilterApplycheckdate,
}) => {
  const states = ["Commence", "Appartient", "Termine"];
  const [selected, setselected] = useState(["Commence", "Appartient", "Termine"]);

  const classes = useStyles();

  const [heure, setheure] = React.useState([0, 10000]);
  const handleChange1 = (e, newheure) => {
    setheure(newheure);
    OnfilterApplyDuree(newheure);
  };

  var curr = new Date();
  curr.setDate(curr.getDate());

  var date = curr.toISOString().substr(0, 10);

  var [datedeb, setDatedeb] = useState(date);
  var [datefin, setDatefin] = useState(date);

  const handlechangedebutdate = (e) => {
    let newdatedeb = e.target.value;
    setDatedeb(newdatedeb);
    OnfilterApplyDatedebut(newdatedeb);
  };

  const handlechangefindate = (e) => {
    let newdatefin = e.target.value;
    setDatefin(newdatefin);
    OnfilterApplyDatefin(newdatefin);
  };


  const handleChange = (e, val) => {
    setselected(val);
    OnfilterApplycheckdate(val);
    
  };
  return (
    <div>
      <div className={classes.dates}>
        <div>
          <Autocomplete
            id="combo-box-demo"
            value={selected}
            onChange={handleChange}
            options={states}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Commence"
                variant="outlined"
                className={classes.détails}
              />
            )}
          />
        </div>
        <div className={classes.debutfin}>
          <div>
            <TextField
              id="date"
              label="Date Début"
              type="date"
              name="date"
              value={datedeb}
              //defaultValue={datedeb}
              onChange={handlechangedebutdate}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.div3}
            />
          </div>
          <div>
            <TextField
              id="date"
              label={<span> Date Fin </span>}
              type="date"
              name="date"
              value={datefin}
              //defaultValue={datefin}
              onChange={handlechangefindate}
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.div3}
            />
          </div>
        </div>
      </div>
      <div>
        <Typography id="range-slider" className={classes.dureenom} gutterBottom>
          Durée de formation
        </Typography>
        <Slider
          value={heure}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          step={1}
          min={0}
          max={10000}
          className={classes.duree}
        />
      </div>
    </div>
  );
};
export default Datefilter;