import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerCustom from "../assets/img/mapBite.svg";

const SingleMap = ({ value }) => {
  console.log("RESULT IN MAPCOMPONENET", value);
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],

});
  return (
    <div>
      <MapContainer center={[52.517949885246125, 13.40569756502596]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <div>
          {value &&
            <Marker position={[52.517949885246125, 13.40569756502596]} icon={icon}>
              <Popup>
                This is text
              </Popup>
            </Marker>}
          </div>
        ))
      </MapContainer>
    </div>
  );
};

export default SingleMap