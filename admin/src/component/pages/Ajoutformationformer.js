import React, { useState, useEffect } from "react";

import FileBase from "react-file-base64";
import useStyles from "./styles";
import {
  TextField,
  Button,
  FormLabel,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import Select from "../Select/selectcategorie";
import Selectgouvernorat from "../Select/selectgouvernorate1";
import MaterialUIPickers from "../Datepicker/datepicker";
import Time from "../Timepicker/timepicker";
import { creatTrainingformer } from "../../actions/trainings";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from "@material-ui/core/FormHelperText";
import { getcategorie } from "../../actions/categorie";
import { getgouvernorat } from "../../actions/gouvernorat";
import { getCity } from "../../actions/cities";
import SelectCities from "../Select/selectcity1";
import TextEditor from "../TextEditor/texteditor";
import Mapformer from "../MapFormers/mapcreate";

const Form = ({ currentId, setCurrentId }) => {
  const [yGouv, setYGouvernorat] = useState(10);
  const [xGouv, setXGouvernorat] = useState(36);
  const [yCity, setYCity] = useState(10);
  const [xCity, setXCity] = useState(36);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [formationData, setformationData] = useState({
    name: "",
    firstdate: "",
    lastdate: "",
    hour: "",
    price: "",
    namecity: "",
    periode: "",
    numberplace: "",
    planning: "",
    description: "",
    objectif: "",
    skills: "",
    selectedimage: "",
    idcity: "",
    idgouvernorate: "",
    namegouvernorate: "",
    namecategorie: "",
    idcategorie: "",
    longitude: "",
    latitude: "",
    email: "",
  });
  const formation = useSelector((state) =>
    currentId ? state.formations.find((f) => f._id === currentId) : null
  );
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [categorie, setCategorie] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [City, setCity] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);
  const [userinfos, setuserinfos] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  
  const TextPoint = (props) => {
    return (
      <div className={classes.textf1}>
        <TextField
          type="string"
          variant="outlined"
          name="longitude"
          label="longitude"
          disabled
          value={props.value}
          defaultValue={props.defaultValue}
        />
      </div>
    );
  };
  const TextPoint1 = (props) => {
    return (
      <div className={classes.textf2}>
        <TextField
          type="string"
          name="longitude"
          label="longitude"
          variant="outlined"
          disabled
          value={props.value}
          defaultValue={props.defaultValue}
        />
      </div>
    );
  };

  const clear = () => {
    setformationData({
      name: "",
      firstdate: "",
      lastdate: "",
      hour: "",
      price: "",
      namecity: "",
      periode: "",
      numberplace: "",
      planning: "",
      description: "",
      objectif: "",
      skills: "",
      selectedimage: "",
      idcity: "",
      idgouvernorate: "",
      idcategorie: "",
      email: "",
    });
  };

  useEffect(() => {
    if (formation) {
      setformationData(formation);
    }
  }, [formation]);

  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setCategorie(res);
    });
    dispatch(getCity()).then((res) => {
      setCity(res);
    });
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
  }, [dispatch]);

  const onChangeLastDate = (e) => {
    setformationData({ ...formationData, lastdate: e.target.value });
  };
  const onChangeFirstDate = (e) => {
    setformationData({ ...formationData, firstdate: e.target.value });
  };
  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;
    if (val === null) {
      setformationData({ ...formationData, idgouvernorate: null });
      setXGouvernorat(36);
      setYGouvernorat(10);
    } else {
      setXGouvernorat(val.latitude);
      setYGouvernorat(val.longitude);

      setformationData({
        ...formationData,
        idgouvernorate: val._id,
        namegouvernorate: nom,
      });
      console.log(formationData.idgouvernorate);
      val === null
        ? setfiltredCity([])
        : setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
    }
  };

  const handleChangecity = (e, val) => {
    let nom = val.nom;
    console.log(nom);
    e.preventDefault();
    if (val === null) {
      setformationData({ ...formationData, idcity: null, namecity: null });
      setXCity(36);
      setYCity(10);
    } else {
      setXCity(val.latitude);
      setCity(val.longitude);
      setformationData({ ...formationData, idcity: val._id, namecity: nom });
      console.log(formationData.namecity);
    }
  };
  const getLocation = (location) => {
    //console.log("In getLocation");
    setX(location[0]);
    setY(location[1]);

    setformationData({ ...formationData, latitude: x, longitude: y });

    console.log(x, y);
  };

  const onChangeData2 = (e, val) => {
    let nom = val.nom;
    val === null
      ? setformationData({ ...formationData, idcategorie: null })
      : setformationData({
          ...formationData,
          idcategorie: val._id,
          namecategorie: nom,
        });
  };

  const [gouvernorat, setGouvernorats] = useState([]);

  const handleEditorChange = (e) => {
    setformationData({ ...formationData, planning: e.target.getContent() });
  };

  const handleEditorChangeobjectif = (e) => {
    setformationData({ ...formationData, objectif: e.target.getContent() });
  };
  const handleEditorChangeprerequis = (e) => {
    setformationData({ ...formationData, skills: e.target.getContent() });
  };
  const value2 = formationData.selectedimage.indexOf("/");
  const value3 = formationData.selectedimage.indexOf(";");
  const file = formationData.selectedimage;
  const number = value3 - value2;
  const extension = file.substr(value2, number);

  const onChangeTime = (e) => {
    setformationData({ ...formationData, hour: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (extension === "/jpeg" || extension === "/jpg" || extension === "/png") {
      dispatch(creatTrainingformer(formationData));
      setError(false);
      setHelperText("");
      alert(" Succés !");
      clear();
    } else {
      setHelperText("Choisir un fichier de type image.");
      setError(true);
    }
  };
  return (
    <Paper elevation={3} className={classes.paperform}>
      <form
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Grid container item xs={6} md={12} lg={12}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              className={classes.Textfiled}
              required
              name="name"
              variant="outlined"
              label="nom du formation"
              type="string"
              value={formationData.name}
              onChange={(e) =>
                setformationData({ ...formationData, name: e.target.value })
              }
              style={{ width: 360, marginTop: 15 }}
            ></TextField>
            <TextField
              className={classes.Textfiled}
              required
              name="email"
              variant="outlined"
              label="email"
              type="string"
              value={formationData.email}
              onChange={(e) =>
                setformationData({
                  ...formationData,
                  email: e.target.value,
                })
              }
              style={{ width: 360, marginTop: 15 }}
            ></TextField>

            <Select onChangeData2={onChangeData2} categorie={categorie} />
            <MaterialUIPickers
              onChangeFirstDate={onChangeFirstDate}
              onChangeLastDate={onChangeLastDate}
            />

            <TextField
              className={classes.Textfiled}
              name="periode "
              variant="outlined"
              label="durée du formation (heures)"
              type="number"
              value={formationData.duree}
              onChange={(e) =>
                setformationData({ ...formationData, periode: e.target.value })
              }
              style={{ width: 360, marginTop: 15 }}
            ></TextField>
            <TextField
              required
              name="price"
              type="number"
              variant="outlined"
              label="prix (TND)"
              value={formationData.price}
              onChange={(e) =>
                setformationData({ ...formationData, price: e.target.value })
              }
              style={{ width: 360, marginTop: 15 }}
            ></TextField>
            <TextField
              required
              name="numberplace"
              type="number"
              variant="outlined"
              label="Nombre de place"
              value={formationData.numberplace}
              onChange={(e) =>
                setformationData({
                  ...formationData,
                  numberplace: e.target.value,
                })
              }
              style={{ width: 360, marginTop: 15 }}
            ></TextField>
            <Time onChangetime={onChangeTime} time={formationData.hour} />
            <Selectgouvernorat
              onChangeGouvernorat={handleChangegouvernorat}
              gouvernorat={gouvernorat}
            />

            <SelectCities
              handleChangecity={handleChangecity}
              filtredCity={filtredCity}
            />
            <TextField
              required
              name="description "
              type="string"
              variant="outlined"
              label="description de la formation"
              value={formationData.description}
              onChange={(e) =>
                setformationData({
                  ...formationData,
                  description: e.target.value,
                })
              }
              rows={5}
              cols={6}
              multiline
              style={{ width: 360, marginTop: 15 }}
            ></TextField>

            <Typography className={classes.typoggraphy}>Programme</Typography>
            <TextEditor
              handleEditorChange={handleEditorChange}
              editor={formationData.planning}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography className={classes.typoggraphy}>
              Entrer la localisation
            </Typography>

            <div className={classes.map}>
              <div className={classes.divtext}>
              
                <TextPoint value={x} />
                <TextPoint1 value={y} />
              </div>

              <Mapformer
                x={xCity}
                y={yCity}
                onGetLocation={getLocation}
                x1={xGouv}
                y1={yGouv}
              />
            </div>
            <Typography className={classes.typoggraphy}>
              Objectifs de formation
            </Typography>
            <TextEditor
              handleEditorChange={handleEditorChangeobjectif}
              editor={formationData.objectif}
            />
            <Typography className={classes.typoggraphy}>Prerequis</Typography>
            <TextEditor
              handleEditorChange={handleEditorChangeprerequis}
              editor={formationData.skills}
            />

            <div className={classes.div}>
              <FormLabel className={classes.label} color="primary">
                Ajouter une image{" "}
              </FormLabel>
              <FileBase
                type="file"
                name="choisir une image"
                multiple={false}
                onDone={({ base64 }) =>
                  setformationData({ ...formationData, selectedimage: base64 })
                }
              />

              <FormHelperText className={classes.error}>
                {helperText}
              </FormHelperText>
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="outlined"
              color="primary"
              type="submit"
            >
              {" "}
              Envoyer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
export default Form;
