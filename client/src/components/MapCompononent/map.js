import React, { Component, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../../node_modules/leaflet/dist/leaflet.css";
import { Button, Link } from "@material-ui/core";
import L from "leaflet";
import icon1 from "../Pictures/place.svg";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg'

import useStyles from "./styles";
const MapComponent = ({FilteredTraining , gouvernorat, city}) => { 

  
 var myIcon = L.icon({
  
    iconUrl: icon1,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  

  });
  const center = [36.8, 10.16579];
  const classes = useStyles();
  const [map, setMap] = useState(center, 8);
  
    if(gouvernorat !== null && gouvernorat!== " " && gouvernorat !== undefined )
{  
  map.flyTo([gouvernorat.latitude,gouvernorat.longitude], 11, {
    duration: 1,
  }); 
}
    
  if(city !== null && city !== " " && city !== undefined)
 
   { map.flyTo([city.latitude, city.longitude], 11, {
      duration: 1,
    });  
}
  



    const Markers = ({ data }) => {
      const [width, setWidth] = useState(150);
      const [height, setHeight] = useState(150);
  
      const map = useMap();  
      useEffect(() => {
        setTimeout(() => {
          map.invalidateSize();
        }, 500);
      });
      
      function handleMouseIn(e) {
        setHeight(150);
        setWidth(150);
      }
      function handleMouseOut(e) {
        setHeight(150);
        setWidth(150);
      }
    return (
      data.length > 0 &&
      data.map((formation) => {
        return (
  
         <Marker 
       eventHandlers={{
        click: () => {
          map.setView([formation.latitude, formation.longitude], 19);
        },
      }
    } 
    key={formation._id}
      position={[formation.latitude, formation.longitude]}
      
     icon={ myIcon}
     >
      
       <Popup> 
        <div className={classes.popup} >
     
     
        <img   className={classes.image}
            src={ formation.selectedimage}
            onMouseOver={handleMouseIn}
            onMouseOut={handleMouseOut}
            width={width}
            height={height}
                      /> 
     
     <div className={classes.svg}>
          <div className={classes.Container}>
          <div className={classes.price}>
          <span  className={classes.prix}>{formation.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
          </div>
          <div>
          <ReactLogo className={classes.mauve} />
          </div>
          </div>
        </div>
        <div className={classes.namecard} >
        <Link style={{color:"#4e3e8c", textDecoration:"none"}} href={ `/formation/${formation._id}`}>{formation.name}</Link>
        </div>
        </div>
       </Popup>
     </Marker>  
      
       
        );
      })
    );
    
    
    
    
    };
  
   


   
return (
    

    <div >
        <MapContainer   whenCreated={setMap} className={classes.div} center={center} zoom={13} scrollWheelZoom={true}
         maxBounds={[
          [-80, -180],
          [80, 180],
        ]}

        
        >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     
   <Markers data= {FilteredTraining}  />  
   </MapContainer>

    </div>
  );
  
    };
    export default MapComponent;