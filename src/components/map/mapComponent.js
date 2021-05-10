import {useEffect, useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerCustom from "../assets/img/mapBite.svg";
import { Link } from "react-router-dom";



const MapComponent = () => {

  const [addresses, setAddresses] = useState()

  useEffect(()=>{
    const getAddresses = async () =>{
      const res = await fetch ('http://localhost:5000/services/')
      const data = await res.json()

      const resFromGeocoder = await Promise.all(
        data.map(add => fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${add.address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`))
      )
      const dataFromGeocoder = await Promise.all(
        resFromGeocoder.map(res => res.json())
      )
      setAddresses(dataFromGeocoder)
    }
    getAddresses()
  }, [])
console.log(addresses);
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
          addresses && addresses.map((add)=>{
            console.log(add.lat, add.lon)
            return ( 
              <Marker position={[add.results[0].geometry.location.lat, add.results[0].geometry.location.lng]} icon={icon}>
                <Popup>
                  <h6></h6> <br />
                </Popup>
              </Marker>
              )
          })
        } 
      </MapContainer>
    </div>
    </>
  );
};


export default MapComponent;