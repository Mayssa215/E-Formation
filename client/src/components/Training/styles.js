
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 20,
    width: 300,
  },
  
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: " #74B5BD ",
  },
  buttonVoir: {
    marginLeft: 190,
    color: " #00b8d4",
    borderColor: "#00b8d4",
  },
  prix: {
    marginLeft: 130,
    marginTop: 20,
    border: "1px solid #00b8d4",
    marginRight: 140,
    paddingLeft: 8,
    paddingRight: 20,
    paddingTop: 2,
  },
  nb: {
    marginLeft: 38,
    display: "flex",
  },
}));