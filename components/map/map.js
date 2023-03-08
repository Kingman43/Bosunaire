import 'leaflet/dist/leaflet.css'
import style from '@/styles/Home.module.css';
import { MapContainer, TileLayer } from "react-leaflet";

function Map( props ) {
    //const position = [35.91086, -78.69078]

    return (
        <MapContainer className={style.map} center={props.position} zoom={props.zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            >
            </TileLayer>

        </MapContainer>
    )
}

export default Map;