import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {Typography, Avatar, Button, Paper, Grid, TextField } from "@material-ui/core";
import Input from "../authentification/inputs";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getcategorie } from "../../actions/categorie";
import { getCity } from "../../actions/cities";
import { getgouvernorat } from "../../actions/gouvernorat";
import Selectgouvernorat from "../Select/selectgouvernorat";
import SelectCities from "../Select/selectCities";
import FileBase from "react-file-base64";

import { UpdateUser } from "../../actions/authentification";
const Updateuser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userinfos, setuserinfos] = useState(
    JSON.parse(localStorage.getItem("client"))
  );
  const [userData, setuserData] = useState({
    firstname: userinfos.allusers[1],
    lastname: userinfos.allusers[2],
    phone: userinfos.allusers[8],
    email: userinfos.allusers[7],
    cin: userinfos.allusers[5],
    gouvernorate: userinfos.allusers[3],
    city: userinfos.allusers[4],
    selectedimage: userinfos.allusers[6],
    mdpactuel: "",
    password: "",
    confirmerMotdepasse: "",
  });
  const url = window.location.href;
  const id = url.substr(33);
  const [speciality, setspeciality] = useState([]);
  const [filtredCity, setfiltredCity] = useState([]);
  const [City, setCity] = useState([]);
  const [gouvernorat, setGouvernorats] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = () => setShowPassword1(!showPassword1);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleShowPassword2 = () => setShowPassword2(!showPassword2);

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
  const handleChangegouvernorat1 = (e, val) => {
    setuserData({ ...userData, gouvernorate: val.nom });
    val === null
      ? setfiltredCity([])
      : setfiltredCity(City.filter((x) => x.id_gouvernorat === val._id));
  };

  const handleChangecity1 = (e, val) => {
    e.preventDefault();
    setuserData({ ...userData, city: val.nom });
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

  const handlechangenom = (e) => {
    setuserData({ ...userData, firstname: e.target.value });
  };
  const handlechangeprenom = (e) => {
    setuserData({ ...userData, lastname: e.target.value });
  };
  const handlechangecin = (e) => {
    setuserData({ ...userData, cin: e.target.value });
  };
  const handlechangeemail = (e) => {
    setuserData({ ...userData, email: e.target.value });
  };
  const handlechangetel = (e) => {
    setuserData({ ...userData, phone: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUser(id, userData));
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
        <Paper className={classes.paperuser} elevation={4}>
          <form onSubmit={handleSubmit}>
            <Grid>
              <Typography className={classes.infogene}>
                INFORMATIONS GENERALES
              </Typography>
              <div>
<div className={classes.fields}>
<TextField
className={classes.texts}
                  name="firstname"
                  variant="outlined"
                  label="Nom"
                  value={userData.firstname}
                  onChange={handlechangenom}
                ></TextField>
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
<div className={classes.fields}>
    <div  className={classes.textcent}>
    <Selectgouvernorat

onChangeGouvernorat={handleChangegouvernorat1}
gouvernorat={gouvernorat}
value={userData.gouvernorate}
/>
    </div>

                <SelectCities
                
                  handleChangecity={handleChangecity1}
                  filtredCity={filtredCity}
                  value={userData.city}
                />
                <TextField
                className={classes.textcin} 
                  name="cin"
                  variant="outlined"
                  label="Numero de carte d'identité"
                  value={userData.cin}
                  onChange={handlechangecin}
                ></TextField>
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
              
            
              </div>
            </Grid>
            <Button type="submit" variant="contained"className={classes.enregistrer}>
              Enregistrer
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};
export default Updateuser;
