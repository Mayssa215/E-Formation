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
    backgroundColor:"#74B5BD",
    borderRadius:"0",
    color:"#ffffff",
    '&:hover': {
        background: "#74B5BD",
   

},


},


}));
