import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    
     
     
search: {
    padding:"10% 20% ",
    display: "flex-end",
    "@media (max-width: 500px)": {
         paddingLeft: 0,
            display:"block",
            margin:"5%"
      },
},

searchClass:{
   width:"50%",
   "@media (max-width: 200px)": {
  width:"10%",
  padding:"0 ",

},
},


button:{
    padding :"17px 22px",
    backgroundColor:" #ffffff",
    borderRadius:"1",
    color:"#fa7d39",
    border:"1px solid",
    borderColor:"#fa7d39",
    fontFamily :'Open Sans', 
    height: 55,
    marginBottom:5,
    '&:hover': {
        background: "#ffffff",
   

},


},


}));
