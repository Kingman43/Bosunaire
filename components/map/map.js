import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
function Map( props ) {
    //const position = [35.91086, -78.69078]

    return (
        <MapContainer className={style.map} center={props.position} zoom={props.zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
            </TileLayer>
            <Marker position={props.position}>
                <Popup>You are here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;