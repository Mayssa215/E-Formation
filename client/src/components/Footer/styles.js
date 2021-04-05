import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";


export default makeStyles(() => ({


    appBar: {
        height: 260,
        marginTop:1500,
        position: "absolute",
        backgroundColor: "#F8F6FA",
        width: "100%",
        "@media (max-width: 960px)": {
            marginTop:2800,

        },
        "@media (max-width: 700px)": {
            height: 320,
            marginTop:2800,

        },
        "@media (max-width: 500px)": {
            height: 340,
            marginTop:3200,
        },


    },

    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 700px)": {
            display: "block",
        },

    },
    paragraph: {
        color: '#000000',
        fontSize: 14,
        width: 550,
        "@media (max-width: 1100px)": {
            width: 450,

        },
        "@media (max-width: 960px)": {
            width: 370,

        },
        "@media (max-width: 700px)": {
            width: 500,
        },
        "@media (max-width: 510px)": {
            width: 400,
        },
        "@media (max-width: 320px)": {
            width: 290,
            fontSize: 12,
        },



    },
    div1: {
        marginRight: 380,
        "@media (max-width: 1100px)": {
            marginRight: 280,

        },
        "@media (max-width: 960px)": {
            marginRight: 260,

        },
        "@media (max-width: 800px)": {
            marginRight: 190,
        },
        "@media (max-width: 700px)": {
            marginRight: 10,
            marginLeft: 50,
        },
        "@media (max-width: 500px)": {
            marginLeft: 10,
            marginBottom: 10,
            marginRight: 0,
        },
        "@media (max-width: 320px)": {
            marginLeft: 6,
            marginBottom: 10,
            marginRight: 0,
        },
    },
    div2: {
        color: '#2d1782',
        marginTop: 15,
        marginLeft: 50,
        "@media (max-width: 700px)": {
            marginLeft: 50,
            marginTop: 10,
        },
        "@media (max-width: 510px)": {
            marginLeft: 10,
            marginTop: 15,
            display:'inline',
            marginRight:120,
        },
        "@media (max-width: 320px)": {
            marginLeft: 10,
            marginTop: 15,
            display:'inline',
            marginRight:80,
            fontSize: 25,
        },
    },
    contact: {
        color: '#2d1782',
        fontSize: 24,
        marginLeft: 50,
        "@media (max-width: 700px)": {
            marginLeft: 50,
            marginRight:0,
            marginBottom:0,
        },
        "@media (max-width: 510px)": {
            marginLeft: 10,
            marginRight:0,
            marginBottom:15,
            fontSize: 22,

        },
        "@media (max-width: 320px)": {
            marginLeft: 10,
            marginRight:0,
            marginBottom:15,
            fontSize: 18,

        }


    },
    suivez: {
        marginTop: 20,
        marginLeft: 25,
        "@media (max-width: 700px)": {
            marginTop: 3,
            fontSize: 24,
            marginBottom:10,

        },
        "@media (max-width: 510px)": {
            marginTop: 3,
            fontSize: 22,

        },
        "@media (max-width: 320px)": {
            marginTop: 5,
            fontSize: 18,

        },


    },
    socialMedia: {
        color: '#2d1782',
        marginLeft: 15,
        marginTop: 12,
        "@media (max-width: 700px)": {
            marginTop: 2,
            marginLeft:20,

        },
        "@media (max-width: 510px)": {
            marginLeft:10,
                marginTop: 2,
        },
    },
    Size: {
        fontSize: 35,
        marginRight:10,

        "@media (max-width: 700px)": {
            display: "block",

        },
        "@media (max-width: 510px)": {
            display: "inline",
            marginRight:10,
            fontSize: 28,


        },
        "@media (max-width: 320px)": {
            display: "inline",
            marginRight:10,
            fontSize: 25,


        },
    },
size2 :{
 
    "@media (max-width: 320px)": {
        fontSize: 20,

    },
},
  
    media: {
        color: '#2d1782',
        display: "flex",
        "@media (max-width: 700px)": {
            display: "block",
            marginLeft: 380,
        },
        "@media (max-width: 510px)": {
            marginLeft: 0,
            marginTop: 50,
            display: "flex",


        },
    },
    copyright: {
    },
    copyrightext: {
        color: '#2d1782',
        marginLeft: "35%",
        fontSize: 16,
        "@media (max-width: 700px)": {
            marginLeft: "20%",
            fontSize: 12,

        },
        "@media (max-width: 500px)": {
            marginLeft: "20%",
            fontSize: 12,
       

        },
        "@media (max-width: 320px)": {
            marginLeft: "8%",
            fontSize: 10,
        },
    },
    title: {
        color: '#2d1782',
        fontSize: 24,
        "@media (max-width: 700px)": {
            marginTop: 120,
            fontSize: 22,

        },
        "@media (max-width: 510px)": {
            marginTop: 60,
            marginBottom:8,
            fontSize: 20,

        },
        "@media (max-width: 320px)": {
            marginTop: 100,
            marginBottom:8,
            fontSize: 18,

        },
     
    },

}));