import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { getgouvernorat } from "../../actions/gouvernorat";
import { getCity } from "../../actions/cities";
import { getTrainings } from "../../actions/training";
import Map from "./map";
import { Button } from "@material-ui/core";
import useStyles from "./styles";


export default function SimpleModal() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [Gouvernorat, setGouvernorats] = useState([]);
  const [City, setCity] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);
  const [FilterTraining, setFilterTraining] = useState([]);
  const [Trainings, SetTrainings] = useState([]);
  const [gouv, setGouv] = useState();
  const [citys, setCitys] = useState();
  const center = [36.8, 10.16579];

  const [map, setMap] = useState(center, 8);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
    dispatch(getCity()).then((res) => {
      setCity(res);
    });
    dispatch(getTrainings()).then((res) => {
      SetTrainings(res);


    
    });

  }, []);
  const FilterTrainings = (IdGouv, Idcity) => {
    //gouvernorat
    if (IdGouv !== null) {
      setFilterTraining(Trainings.filter((el) => el.idgouvernorate === IdGouv));
    }
    //gouvernorat+city
    else if (Idcity !== null) {
      setFilterTraining(Trainings.filter((el) => el.idcity === Idcity));
    }
  };

  const handleChangegouvernorat = (event, value) => {
    if (value === null) {
      setfiltredCity([]);
    } else {
      setfiltredCity(City.filter((x) => x.id_gouvernorat === value._id));
      setGouv(value);
      let idcitys = null;
      FilterTrainings(value._id, idcitys);
    }
  };

  const handleChangecity = (e, value) => {
    e.preventDefault();
    setCitys(value);
    let idgouv = null;
    FilterTrainings(idgouv, value._id);
  };

  const handleOpen = () => {
setOpen(true);
setFilterTraining(Trainings.filter((e)=> e.idgouvernorate === user.idgouvernorate)); 
  };

const handleClose = () => {
 setOpen(false);

  };


  const body = (
    <div className={classes.paper}>
      <div className={classes.auto}>
        <Autocomplete
          onChange={handleChangegouvernorat}
          options={Gouvernorat}
          getOptionLabel={(option) => option.nom}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Gouvernorat"
              variant="outlined"
              className={classes.gouvernorats}
            />
          )}
        />
        <Autocomplete
          onChange={handleChangecity}
          options={filtredCity}
          getOptionLabel={(option) => option.nom}
          renderInput={(params) => (
            <TextField
              {...params}
              label="ville"
              variant="outlined"
              className={classes.gouvernorats}
            />
          )}
        />
      </div>
      <Map

        FilteredTraining={FilterTraining}
        gouvernorat={gouv}
        city={citys}
      />
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        voir map
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      
        {body}
      </Modal>
    </div>
  );
}