import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import {useMapEvents} from "react-leaflet";
import {useState, useEffect} from "react";


function MyComponent() {
    const [zoomLevel, setZoomLevel] = useState( 5); // initial zoom level provided for MapContainer
    const [center, setCenter] = useState([0,0]); // initial zoom level provided for MapContainer

    const mapEvents = useMapEvents({
        zoomend: () => {
            setZoomLevel(mapEvents.getZoom());
        },
        centerend: () => {
            setCenter(mapEvents.getCenter());
        },
    });

    console.log("ZoomLevel:" ,zoomLevel);
    console.log("center:" , center);

    return null
}

function Map( props ) {
    //const position = [35.91086, -78.69078]
    const myIcon = new Icon({
        iconUrl: "/boMapIcon.png",
        iconSize: [24, 17],
        iconAnchor: [12, 9],
        popupAnchor: [0, 0],
    });

    return (
        <MapContainer className={style.map}
                      center={props.position}
                      zoom={props.zoom}
                      scrollWheelZoom={true}
                      >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.locations.map((location) => (
                <Marker position={location.position}  icon={myIcon}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
            <MyComponent />

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
