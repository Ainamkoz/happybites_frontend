import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerCustom from "../assets/img/mapBite.svg";
import { Link } from "react-router-dom";

const MapComponent = ({ result }) => {
  console.log("RESULT IN MAPCOMPONENET", result);
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
        {result && 
          result.map((markerlocation, result) => (
          <div key={result.id}>
            <Marker position={[markerlocation.lat, markerlocation.long]} icon={icon}>
              <Popup>
               <Link to={`/company/${markerlocation.id}`}>{markerlocation.restaurantname}, {markerlocation.adress}</Link>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
    </>
  );
};

export default MapComponent;