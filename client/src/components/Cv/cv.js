import React from "react";
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
//import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { CallMissedSharp } from "@material-ui/icons";
import useStyles from './styles';

const Cv = () => {
    const classes = useStyles();

    return (
<div  className={classes.page}>
{/* show pdf conditionally (if we have one)  */}
{<Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">


 <Viewer fileUrl={localStorage.getItem('cv')}
     />

</Worker>}

</div>
    );
};
export default Cv;