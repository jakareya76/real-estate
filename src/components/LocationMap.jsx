import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  return (
    <MapContainer
      center={[51.5074, -0.1278]}
      zoom={12}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.5074, -0.1278]}>
        <Popup>
          London City <br /> The capital city of England.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
