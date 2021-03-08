import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(() => ({


appBar:{
    height:400, 
    marginTop:1000,
    position:"absolute",
    backgroundColor:"#74B5BD",
    color:"#ffffff",
    

},
title:{
marginLeft:"20px",

},
toolbar:{
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 700px)": {
    marginLeft:"20%",
    paddingTop:"60px",
    display:"flex",
    paddingLeft:"60px",
    
    },
},
paragraph:{
display: "Block",

fontSize:"15px",
"@media (max-width: 700px)": {
 paddingBottom:"30%",

    },

},
div1:{
    marginRight:"40%",



},
div2:{
marginRight:"10%",
display:"flex",
justifyContent: "inline-block",
marginTop:"70px",
},
contact:{
marginLeft:"50%",
},
suivez:{
  marginTop:20,
  marginLeft:30,
},
socialMedia:{
    marginLeft:"25px",
    marginTop:"25px",
},
media:{
    display: "flex",
    justifyContent: "inline-block",
},


}));