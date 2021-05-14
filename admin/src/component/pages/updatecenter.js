import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import Input from "../authentification/inputs";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getcategorie } from "../../actions/categorie";
import { getCity } from "../../actions/cities";
import { getgouvernorat } from "../../actions/gouvernorat";
import Selectgouvernorat from "../Select/selectgouvernorat";
import SelectCities from "../Select/selectCities";
import FileBase from "react-file-base64";
import Select from "../Select/Selectspeciality";
import { useHistory } from "react-router-dom";

import { Updatecenter } from "../../actions/authentification";
const UpdateCenter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userinfos, setuserinfos] = useState(
    JSON.parse(localStorage.getItem("center"))
  );
  const [userData, setuserData] = useState({
    firstname: [userinfos.allcenter[2]],
    lastname: userinfos.allcenter[1],
    phone: userinfos.allcenter[6],
    email: userinfos.allcenter[5],
    selectedimage: userinfos.allcenter[7],
    namegouvernorate: userinfos.allcenter[3],
    namecities: userinfos.allcenter[4],
    adressexact: userinfos.allcenter[8],
    namespeciality: userinfos.allcenter[2],
    description: userinfos.allcenter[9],
  });
  const [speciality, setspeciality] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);
  const [City, setCity] = useState([]);
  const history = useHistory();

  const [gouvernorat, setGouvernorats] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleShowPassword2 = () => setShowPassword2(!showPassword2);
  const url = window.location.href;
  const id = url.substr(35);
  useEffect(() => {
    dispatch(getcategorie()).then((res) => {
      setspeciality(res);
    });
    dispatch(getCity()).then((res) => {
      setCity(res);
    });
    dispatch(getgouvernorat()).then((res) => {
      setGouvernorats(res);
    });
  }, [dispatch]);

  const handleChangegouvernorat = (e, val) => {
    let nom = val.nom;

    val === null
      ? setuserData({
          ...userData,
          idgouvernorate: null,
          namegouvernorate: null,
        })
      : setuserData({
          ...userData,
          idgouvernorate: val._id,
          namegouvernorate: nom,
        });
    val === null
      ? setfiltredCity([])
      : setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };

  const handleChangecity = (e, val) => {
    let nom = val.nom;
    e.preventDefault();
    val === null
      ? setuserData({ ...userData, idcity: null, namecities: null })
      : setuserData({ ...userData, idcity: val._id, namecities: nom });
  };
  const handleChangemdp = (e) => {
    setuserData({ ...userData, password: e.target.value });
  };

  const handleChangeactuel = (e) => {
    setuserData({ ...userData, mdpactuel: e.target.value });
  };
  const handleChangeconfirm = (e) => {
    setuserData({ ...userData, confirmerMotdepasse: e.target.value });
  };

  const handlechangeprenom = (e) => {
    setuserData({ ...userData, lastname: e.target.value });
  };

  const handlechangeemail = (e) => {
    setuserData({ ...userData, email: e.target.value });
  };
  const handlechangetel = (e) => {
    setuserData({ ...userData, phone: e.target.value });
  };

  const onChangeData2 = (e, val) => {
    let name = val.nom;
    val === null
      ? setuserData({ ...userData, idspeciality: null, namespeciality: null })
      : setuserData({
          ...userData,
          idspeciality: val._id,
          namespeciality: name,
        });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Updatecenter(id, userData, history));
  };
  return (
    <div className={classes.divglobal}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Paper className={classes.paperformer} elevation={4}>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Typography className={classes.infogene}>
                INFORMATIONS GENERALES
              </Typography>

              <div className={classes.fields}>
                <TextField
                  className={classes.texts}
                  name="lastname"
                  variant="outlined"
                  label="Prenom"
                  value={userData.lastname}
                  onChange={handlechangeprenom}
                ></TextField>
                <TextField
                  className={classes.texts}
                  name="email"
                  variant="outlined"
                  label="Email"
                  value={userData.email}
                  onChange={handlechangeemail}
                ></TextField>
                <TextField
                  className={classes.texts}
                  name="phone"
                  variant="outlined"
                  label="Telephone"
                  value={userData.phone}
                  onChange={handlechangetel}
                ></TextField>
              </div>

              <div  className={classes.fields}>
                <TextField
                 className={classes.textcenter}
                  name="adressexact"
                  variant="outlined"
                  label="Adresse"
                  value={userData.adressexact}
                  onChange={(e) =>
                    setuserData({ ...userData, adressexact: e.target.value })
                  }
                ></TextField>
             
               <div     className={classes.textcent}> 
               <Selectgouvernorat
             
                onChangeGouvernorat={handleChangegouvernorat}
                gouvernorat={gouvernorat}
                value={userData.namegouvernorate}
              />
               </div>
                
              <SelectCities
                handleChangecity={handleChangecity}
                filtredCity={filtredCity}
                value={userData.namecities}
              />
              </div>
              <div  className={classes.fields}>
              <TextField
                  required
                  name="description"
                  type="string"
                  variant="outlined"
                  label="Déscription"
                  value={userData.description}
                  onChange={(e) =>
                    setuserData({ ...userData, description: e.target.value })
                  }
                  rows={5}
                  cols={6}
                  multiline
                  className={classes.textf}
                ></TextField>
                   <Select
                  onChangeData2={onChangeData2}
                  speciality={speciality}
                  value={userData.namespeciality}
                ></Select>
              </div>
              <div className={classes.imgcenter}>
              <Typography className={classes.labelcenter} >modifier l'image </Typography>
              <FileBase
                type="file"
                name="choisir une image"
                multiple={false}
                onDone={({ base64 }) =>
                  setuserData({ ...userData, selectedimage: base64 })
                }
              />
              <Avatar
             className={classes.avatar}
                alt="hhh"
                src={userData.selectedimage}
              ></Avatar>
              </div>
             

             <div className={classes.pass}>
             <Input
                name="mdpactuel"
                label="Mot de passe Actuel"
                handleChange={handleChangeactuel}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              <Input
                name="password"
                label="Mot de passe"
                handleChange={handleChangemdp}
                type={showPassword1 ? "text" : "password"}
                handleShowPassword={handleShowPassword1}
              />
              <Input
                name="confirmerMotdepasse"
                label="Confimer  Mot de passe"
                handleChange={handleChangeconfirm}
                type={showPassword2 ? "text" : "password"}
                handleShowPassword={handleShowPassword2}
              />
             </div>

             
            </Grid>
            <Button type="submit" variant="contained" className={classes.enregistrer} >
              Enregistrer
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default UpdateCenter;
