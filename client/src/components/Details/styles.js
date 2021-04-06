import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  root: {
    marginLeft: 30,
    "@media screen and (max-width: 1100px)": {
      marginLeft: 20,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 30,
    },
    "@media screen and (max-width: 800px)": {
      marginLeft: 20,
    },
  },

  programme: {
    color: "#fa7d39",
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 1100px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media screen and (max-width: 600px)": {
      marginTop: 30,
      marginLeft: 20,
    },
  },
  text: {
    marginTop: "5%",
    color: "#fa7d39",
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 1100px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 900px)": {
      marginTop: "110%",
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media screen and (max-width: 600px)": {
      marginTop: 30,
      marginLeft: 20,
    },
  },
  text1: {
    marginLeft: 20,
    marginTop: 10,
    width: 700,
    fontSize: 18,
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 1400px)": {
      width: 600,
    },
    "@media screen and (max-width: 1300px)": {
      width: 450,
      marginLeft: 0,
    },
    "@media screen and (max-width: 1100px)": {
      width: 400,
      marginLeft: 0,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: -20,
      width: 600,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
      width: 500,
    },
    "@media screen and (max-width: 600px)": {
      marginLeft: 15,
      width: 400,
    },
  },
  text2: {
    marginLeft: 20,
    marginTop: 0,
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 1100px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media screen and (max-width: 600px)": {
      marginLeft: 15,
    },
  },
  apprendre: {
    color: "#fa7d39",
    fontFamily: "Roboto, sans-serif",
    marginLeft: "35%",
    "@media screen and (max-width: 1400px)": {
      marginLeft: 180,
    },
    "@media screen and (max-width: 1300px)": {
      marginLeft: "60%",
      width: 400,
    },
    "@media screen and (max-width: 1100px)": {
      marginLeft: "40%",
      width: 300,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media screen and (max-width: 600px)": {
      marginTop: 0,
      marginLeft: 20,
    },
  },
  objectif: {
    fontFamily: "Roboto, sans-serif",
    width: 300,
    marginLeft: "35%",
    "@media screen and (max-width: 1400px)": {
      marginLeft: 180,
    },
    "@media screen and (max-width: 1300px)": {
      marginLeft: "60%",
    },
    "@media screen and (max-width: 1100px)": {
      marginLeft: "40%",
      width: 300,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media  screen and (max-width: 600px)": {
      marginLeft: 0,
    },
  },
  prerequis: {
    marginTop: 0,
    marginLeft: "35%",
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 1400px)": {
      marginLeft: 180,
    },
    "@media screen and (max-width: 1300px)": {
      marginLeft: "60%",
    },
    "@media screen and (max-width: 1100px)": {
      marginLeft: "40%",
      width: 300,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
    },
    "@media  screen and (max-width: 800px)": {
      marginLeft: 60,
    },
    "@media  screen and (max-width: 600px)": {
      marginLeft: 0,
    },
  },
  connaissance: {
    color: "#fa7d39",
    fontFamily: "Roboto, sans-serif",
    marginLeft: "35%",
    "@media screen and (max-width: 1400px)": {
      marginLeft: 180,
    },
    "@media screen and (max-width: 1300px)": {
      marginLeft: "60%",
    },
    "@media screen and (max-width: 1100px)": {
      marginLeft: "40%",
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
      marginTop: "190%",
    },
    "@media  screen and (max-width: 800px)": {
      marginTop: "200%",
      marginLeft: 60,
    },
    "@media screen and (max-width: 600px)": {
      marginTop: "300%",
      marginLeft: 20,
    },
  },

  nom: {
    marginTop: 100,
    color: "#fa7d39",
    marginLeft: "40%",
    fontSize: 33,
    textTransform: "capitalize",
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 900px)": {
      marginLeft: "30%",
    },
  },
  date: {
    display: "flex",
    marginTop: -10,
  },
  duree: {
    color: "#4e3e8c",
    marginTop: 10,
    marginLeft: "10%",
    fontSize: 38,
    "@media screen and (max-width: 1100px)": {
      marginLeft: 0,
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: -20,
    },
    "@media screen and (max-width: 800px)": {
      fontSize: 30,
      marginTop: 0,
    },
    "@media screen and (max-width: 600px)": {
      fontSize: 30,
    },
  },
  heure: {
    fontSize: 18,
    marginTop: 23,
    marginLeft: 3,
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 900px)": {
      marginTop: 20,
    },
    "@media screen and (max-width: 800px)": {
      fontSize: 16,
      marginTop: 8,
    },
    "@media screen and (max-width: 600px)": {
      fontSize: 16,
    },
  },
  favorite: {
    color: "#4e3e8c",
    marginLeft: "15%",
    fontSize: 38,
    marginTop: 25,
    "@media screen and (max-width: 1100px)": {
      marginLeft: "10%",
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
    },
    "@media screen and (max-width: 800px)": {
      fontSize: 30,
      marginTop: 35,
      marginLeft: 10,
    },
    "@media screen and (max-width: 600px)": {
      marginLeft: 150,
      fontSize: 30,
      marginTop: 35,
    },
  },
  intersted: {
    marginTop: 39,
    fontSize: 18,
    marginLeft: 3,
    fontFamily: "Roboto, sans-serif",
    "@media screen and (max-width: 900px)": {
      marginTop: 35,
    },
    "@media screen and (max-width: 800px)": {
      fontSize: 16,
      marginTop: 40,
    },
    "@media screen and (max-width: 600px)": {
      fontSize: 16,
      marginTop: 40,
    },
  },
  love: {
    display: "flex",
    marginLeft: "20%",
    marginTop: -66,
  },
  former: {
    color: "#4e3e8c",
    marginLeft: "20%",
    fontSize: 38,
    "@media screen and (max-width: 1100px)": {
      marginLeft: "15%",
    },
    "@media screen and (max-width: 900px)": {
      marginLeft: 30,
      marginTop: 10,
    },
    "@media screen and (max-width: 800px)": {
      marginLeft: -30,
      fontSize: 30,
      marginTop: 15,
    },
    "@media screen and (max-width: 600px)": {
      marginLeft: -240,
      marginTop: 80,
    },
  },
  coach: {
    textTransform: "capitalize",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 3,
    fontFamily: "Roboto, sans-serif",

    "@media screen and (max-width: 900px)": {
      marginLeft: 0,
      marginTop: 20,
    },
    "@media screen and (max-width: 800px)": {
      fontSize: 16,
      marginLeft: 3,
    },
    "@media screen and (max-width: 600px)": {
      marginTop: "50%",
      marginLeft: 3,
    },
  },
  trainer: {
    display: "flex",
    marginLeft: "60%",
    marginTop: -45,
    "@media screen and (max-width: 600px)": {
      marginTop: 480,
    },
  },
  paper: {
    marginTop: "27%",
    width: 900,
    height: 450,
  },
  resumé: {
    color: "#fa7d39",
    marginLeft: 30,
  },
  div1: {
    paddingTop: 20,
    display: "flex",
  },
  resumformer: {
    width: 800,
    marginLeft: -60,
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  },
  div2: {
    display: "flex",
    "@media  screen and (max-width: 1200px)": {
      marginLeft: -10,
    },
    "@media  screen and (max-width: 1100px)": {
      marginLeft: -20,
    },
  },
  propriéte: {
    color: "#fa7d39",
    marginLeft: 30,
  },
  email: {
    marginLeft: -90,
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
    "@media  screen and (max-width: 1100px)": {
      fontSize: 15,
    },
  },
  sexe: {
    marginLeft: -40,
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  },
  num: {
    marginLeft: "-18%",
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  },
  nbre: {
    marginLeft: "-18%",
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  },
  papercenter: {
    marginTop: "16%",
    width: 800,
    height: 300,
    marginLeft: 20,
    "@media  screen and (max-width: 1200px)": {
      width: 700,
    },
    "@media  screen and (max-width: 1100px)": {
      width: 600,
    },

    "@media  screen and (max-width: 960px)": {
      width: 590,
      marginLeft: -30,
    },
    "@media  screen and (max-width: 850px)": {
      width: 400,
      height: 410,
      marginTop: 100,
    },
    "@media  screen and (max-width: 750px)": {
      width: 350,
      height: 410,
      marginTop: 100,
    },
    "@media  screen and (max-width: 520px)": {
      width: 400,
      marginTop: "130%",
      marginLeft: 15,
    },
  },

  cards: {
    display: "flex",
    marginLeft: 120,
    marginTop: 0,
    "@media  screen and (max-width: 1400px)": {
      marginLeft: 60,
    },
    "@media  screen and (max-width: 1200px)": {
      marginLeft: -50,
    },
    "@media  screen and (max-width: 960px)": {
      marginLeft: 15,
      marginTop: 20,
    },
  },
  resumcentre: {
    width: 750,
    marginLeft: -110,
    marginTop: 60,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  },

  numcenter: {
    marginLeft: "-23%",
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
    "@media  screen and (max-width: 1100px)": {
      fontSize: 15,
    },
  },
  nbreform: {
    marginLeft: -70,
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
    "@media  screen and (max-width: 960px)": {
      marginTop: "35%",
    },
    "@media  screen and (max-width: 850px)": {
      marginTop: 190,
      marginLeft: -100,
    },
  },
  divcenter: {
    display: "flex",
    marginTop: 10,
  },
  adresse: {
    marginLeft: -180,
    marginTop: 50,
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
    "@media  screen and (max-width: 1100px)": {
      fontSize: 15,
    },
    "@media  screen and (max-width: 960px)": {
      marginLeft: -160,
    },
    "@media  screen and (max-width: 850px)": {
      marginTop: 120,
    },
  },
  adressexacte: {
    color: "#fa7d39",
    marginLeft: 10,
    "@media  screen and (max-width: 960px)": {
      marginLeft: -0,
    },
    "@media  screen and (max-width: 850px)": {
      marginTop: 90,
    },
  },
  adressexacte1: {
    color: "#fa7d39",
    marginLeft: 10,
    "@media  screen and (max-width: 960px)": {
      marginLeft: -0,
    },
  },
  training: {
    color: "#fa7d39",
    marginLeft: 10,
    "@media  screen and (max-width: 960px)": {},
    "@media  screen and (max-width: 850px)": {
      marginTop: 160,
    },
  },
  graduate: {
    marginLeft: 180,
    fill: "#4e3e8c",
    "@media  screen and (max-width: 960px)": {
      marginLeft: 40,
    },
    "@media  screen and (max-width: 850px)": {
      marginTop: 140,
      marginLeft: -170,
    },
  },
  place: {
    marginLeft: 70,
    color: "#4e3e8c",
    marginTop: 20,
    "@media  screen and (max-width: 960px)": {
      marginLeft: 40,
    },
    "@media  screen and (max-width: 850px)": {
      marginTop: 90,
      marginLeft: -110,
    },
  },

  emailicon: {
    marginLeft: 20,
    color: "#4e3e8c",
    marginTop: 20,
    "@media  screen and (max-width: 960px)": {
      marginLeft: 50,
    },
  },
  voirback: {
    color: " #fa7d39",
    marginLeft: "-80%",
    marginTop: "20%",
    height: 30,

    "&:hover": {
      background: "#4e3e8c",
      color: " #fa7d39",
    },
    "@media  screen and (max-width: 1400px)": {
      marginLeft: "-94%",
    },

    "@media  screen and (max-width: 1200px)": {
      marginLeft: "-95%",
      marginTop:"50%",
    },
    "@media  screen and (max-width: 960px)": {
      marginLeft: "-90%",
      marginTop:"140%",
    },
    '@media  screen and (max-width: 850px)':{
      marginLeft: "-93%",
      marginTop:"160%",
    },
    '@media  screen and (max-width: 750px)':{
      marginLeft: "-90%",
      marginTop:"180%",
          },
    '@media  screen and (max-width: 520px)':{
      marginLeft: "10%",
      marginTop:"10%",
    },
  },
  back: {
    fontSize: 20,
  },
  voirplus: {
    marginLeft: "75%",
    fontWeight: "bolder",
    color: " #fa7d39",
    height: 30,

    marginTop: "20%",
    "&:hover": {
      background: "#4e3e8c",
      color: " #fa7d39",
    },
    "@media  screen and (max-width: 1400px)": {
      marginLeft: "90%",
    },

    "@media  screen and (max-width: 1200px)": {
      marginLeft: "85%",
      marginTop:"50%",
    },
    "@media  screen and (max-width: 960px)": {
      marginLeft: "70%",
      marginTop:"140%",
    },
    '@media  screen and (max-width: 850px)':{
      marginLeft: "70%",
      marginTop:"160%",
    },
    '@media  screen and (max-width: 750px)':{
      marginLeft: "70%",
      marginTop:"180%",
          },
    '@media  screen and (max-width: 520px)':{
      marginLeft: "50%",
      marginTop:"10%",
    },
  },
  next: {
    fontSize: 30,
  },
  presenté: {
    color: "#fa7d39",
    marginLeft: 40,
  },
  namecenter: {
    marginTop: 20,
    marginLeft: 10,

    color: "#fa7d39",
  },
}));