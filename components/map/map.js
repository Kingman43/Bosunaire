import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import 'node_modules/leaflet-geosearch/dist/geosearch.css';
import {OpenStreetMapProvider, GeoSearchControl} from 'leaflet-geosearch';

function SearchBar () {
    const map  = useMap();
    try {
        useEffect(() => {
            const prov = new OpenStreetMapProvider();
            const searchControl = new GeoSearchControl({
                provider: prov,
                style: 'bar',
                showMarker: false,
                retainZoomLevel: true,
                autoClose: true,
                searchLabel: 'Bosunaire destination',
            })
            map.addControl(searchControl);
            return () => map.removeControl(searchControl)
        }, []);
        return null;
    } catch (e) {
        console.log("SearchBar failure:" , e);
        return null;
    }
}
function MyComponent() {
    const [newZoomLevel, setNewZoomLevel] = useState( 5);
    const [newCenter, setNewCenter] = useState([0,0]);
    const mapEvents = useMapEvents({
        zoomend: () => {
            setNewZoomLevel(mapEvents.getZoom());
        },
        centerend: () => {
            setNewCenter(mapEvents.getCenter());
        },
    });

    console.log("newZoomLevel:" , newZoomLevel);
    console.log("newCenter:" , newCenter);

    return null
}

function Map( props ) {
    const myIcon = new Icon({
        iconUrl: "/boMapIcon.png",
        iconSize: [24, 17],
        iconAnchor: [12, 9],
        popupAnchor: [0, 0],
    });
    const text = L.divIcon({iconSize: [400, 0], html: props.text, className: "text-2xl text-purple-900 text-opacity-90"});
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
            <SearchBar/>
            <MyComponent/>
            <Marker position={props.position} icon={text} autoPanOnFocus={false}>
                <Popup>
                    {props.textWords}
                </Popup>
            </Marker>
            <Marker position={props.position}  icon={myIcon}>
                <Popup>
                    {props.text}
                </Popup>
            </Marker>
        </MapContainer>
    )
}


// import {useMapEvents} from "react-leaflet";
// import {useState} from "react";
// Kingman - if you add this back, put <MyComponent/> just before </MapContainer>
// function MyComponent() {
//     const [zoomLevel, setZoomLevel] = useState( 5); // initial zoom level provided for MapContainer
//     const [center, setCenter] = useState([0,0]); // initial zoom level provided for MapContainer
//
//     const mapEvents = useMapEvents({
//         zoomend: () => {
//             setZoomLevel(mapEvents.getZoom());
//         },
//         centerend: () => {
//             setCenter(mapEvents.getCenter());
//         },
//     });
//
//     console.log("ZoomLevel:" ,zoomLevel);
//     console.log("center:" , center);
//
//     return null
// }


//
// <Marker position={props.position}  icon={text}>
//     <Popup>{props.text}</Popup>
// </Marker>

// {props.locations.map((location) => (
//     <Marker position={location.position}  icon={myIcon}>
//         <Popup>{location.name}</Popup>
//     </Marker>
// ))}

export default Map;
