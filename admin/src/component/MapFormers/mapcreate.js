import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import icon1 from "../Pictures/place.svg";
import L from "leaflet";

// Cordinates of Marcillac
var center = [36, 9.71117252370879];
var myIcon = L.icon({
  iconUrl: icon1,
  iconSize: [20, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const MapWrapper = (props) => {
   function LeafletgeoSearch({ onGetLocation }) {
   const map = useMap();

    useEffect(() => {
      const provider = new OpenStreetMapProvider();

      function handleRegion() {
        var x1 = map.getCenter().lat;
        var y1 = map.getCenter().lng;
        center = [x1, y1];
        onGetLocation([x1, y1]);
      }
      map.on("click", handleRegion);
      const searchControl = new GeoSearchControl({
        provider,
        marker: {
           click: map.on("click", handleRegion),

          icon: myIcon,

         //title: "lat: " + map.getCenter().lat + " lng :" + map.getCenter().lng,
        },
      });
      map.addControl(searchControl);
     /*  const handleDragEnd = (e) => {
        const { lat, lng } = e.target.getLatLng();
        console.log(`Lat: ${lat}, Lon: ${lng}`);
      }; */
      // map.on("zoom", function (e) {
      //   handleRegion();
      // });

      // map.on("click", function (e) {
      //   handleRegion();
      // });

      return () => map.removeControl(searchControl);
    }, []);

    return null;
  }
/*   const [map, setMap] = useState(center, 8);
 */  // if (props.x1 !== 10 && props.y1 !== 36) {
  //   map.flyTo([props.y1, props.x1], 12, {
  //     duration: 1,
  //   });
  // }
  // console.log(props.x, props.y);
  // if (props.x !== 10 && props.y !== 36) {
  //   map.flyTo([props.y, props.x], 12, {
  //     duration: 1,
  //   });
  // } */
  return (
    <MapContainer
      
      animationMode={"flyTo"}
      center={[props.x, props.y]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "38vh", width: "60vh", marginTop: "auto" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   <LeafletgeoSearch onGetLocation={props.onGetLocation}>
        <Marker>
          <Popup>U are here {center.x}</Popup>
        </Marker>
      </LeafletgeoSearch>
    </MapContainer>
  );
};

export default MapWrapper;
