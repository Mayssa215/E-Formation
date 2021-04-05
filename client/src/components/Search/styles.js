import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
    
    root:{
        marginLeft:"6%",
    },
     
search: {
    marginTop:"10%",
    marginLeft:0,
    display: "flex-end",
    "@media (max-width: 500px)": {
         paddingLeft: 0,
            display:"block",
            margin:"5%"
      },
},

searchClass:{
    paddingTop:"10%",
marginLeft:"10%",
marginBottom:"5%",
   width:"40%",
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
'&:': {
    background: "#ffffff",


},

},
voirplus:{
    marginLeft:"92%",
    fontWeight:"bolder",
    color: " #fa7d39",
    
    marginTop:"-45%",
    '&:hover': {
        background: "#4e3e8c",
        color: " #fa7d39",
    },
    
},
next:{
    fontSize:30,
},
voirback:{
    color: " #fa7d39",
    marginLeft:-68,
    marginTop:"-48%",
    '&:hover': {
        background: "#4e3e8c",
        color: " #fa7d39",
    },
},
back:{
    fontSize:20,
},
text:{
    color:"#fa7d39",
    textDecoration:"underline",
    fontFamily :'Open Sans', 

}

}));