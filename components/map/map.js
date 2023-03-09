import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
function Map( props ) {
    //const position = [35.91086, -78.69078]
    const myIcon = new Icon({
        iconUrl: "/boMapIcon.png",
        iconSize: [24, 17],
        iconAnchor: [12, 9],
        popupAnchor: [0, 0],
    });

    return (
        <MapContainer className={style.map} center={props.position} zoom={props.zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
            </TileLayer>
            {props.locations.map((location) => (
                <Marker position={location.position}  icon={myIcon}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}

        </MapContainer>
    )
}

//<Marker position={props.locations[1].position}  icon={myIcon}>
//    <Popup>{props.locations[0].name}</Popup>
//</Marker>

//<Marker position={props.position}  icon={myIcon}>
//    <Popup>{props.mypopup}</Popup>
//</Marker>

//{props.locations.map((location) => (
//    <Marker position={location.position} icon={myIcon}>
//
//    </Marker>
//))}

export default Map;