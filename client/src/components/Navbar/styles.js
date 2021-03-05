import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    justifyContent: "flex-end",

    backgroundColor: "#74B5BD",
    display: "flex",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  toulBar: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 900px)": {
      justifyContent: "space-between",
    },
  },
  linksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
 
 
  title1: {
    margin: "0px 10px",
  },

 titlebar : {
   color:"primary",
   display:"inline-block",
   padding:"10px 30px",

 },

  links: {
      color:"#ffffff",
    },

   
    button: {
        padding :"5px 10px",
        margin:"0px 5px"
    },
    

    

}));