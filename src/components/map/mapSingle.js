import React from 'react';
import {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerCustom from "../assets/img/mapBite.svg";

const SingleMap = ({ value }) => {
  console.log("RESULT IN MAPCOMPONENET", value);

  const [singleAddresses, setSingleAddresses] = useState()
  const { id } = useParams();


  useEffect(()=>{
    const getSingleAddresses = async () =>{
      const res = await fetch (`http://localhost:5000/services/${id}`)
      const data = await res.json()

      const resFromGeocoder = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${data[0].address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      
      const dataFromGeocoder = await resFromGeocoder.json()
      
      setSingleAddresses({service:data, ...dataFromGeocoder})
      console.log(data)
    }
    getSingleAddresses()
  }, [])
  console.log(singleAddresses);
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });
  return (
    <>
    <div>
    <MapContainer center={[52.517949885246125, 13.40569756502596]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {
          singleAddresses && 
              <Marker position={[singleAddresses.results[0].geometry.location.lat, singleAddresses.results[0].geometry.location.lng]} icon={icon}>
                <Popup>
                  <h4>{singleAddresses.service[0].service_name}</h4><h5><Link>{singleAddresses.results[0].formatted_address}</Link></h5>
                </Popup>
              </Marker>
        } 
      </MapContainer>
    </div>
    </>
  );
};

export default SingleMap;