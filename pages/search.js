import BoHome from "@/components/bohome.js";
import MyButton from "@/components/mybutton.js";
import Map from '@/components/map';
import {useState} from "react";
import {mapContext} from "@/components/Context";
import { round } from 'lodash';

let numHosts = 1;
//let origPosition = [ 37.0902, -95.7129];
let origPosition = {
    lat: 37.0902,
    lng: -95.7129,
};

export default function Search() {
//    37.0902° N, 95.7129° W

    const [myText, setMyText] = useState(numHosts + " Bosunaire hosts with 10 miles");
    const [position, setPosition] = useState( origPosition);
    const [markerPosition, setMarkerPosition] = useState( origPosition);

    function reSubmit() {
        console.log('You clicked me! NewPostion:', position);
        setMarkerPosition(position);
        getNewValues();
    }
    function searchPerformed (location) {
        getNewValues();
        setMarkerPosition({ lat: location.y, lng: location.x });
        setPosition({ lat: location.y, lng: location.x });
        console.log("searchPerformed:" , [location.y, location.x]);
    }
    function getNewValues () {
        numHosts++;
        setMyText(numHosts + " Bosunaire Hosts within 10 miles");
    }

    function SubmitButton () {
        if ( (round(position.lat, 4) !== round(markerPosition.lat,4) ) ||
             (round(position.lng,4) !== round(markerPosition.lng,4) ) ) {
            {
                console.log("pos.lat:", round(position.lat,3));
                console.log("mar.lat:", round(markerPosition.lat,3));
                console.log("pos.lng:", round(position.lng,3));
                console.log("mar.lng:", round(markerPosition.lng,3));
                return <MyButton func={reSubmit}/>
            }
        } else
            return null;
    }

    return(
        <mapContext.Provider value={{position, setPosition, markerPosition, setMarkerPosition}}>
        <div className="mx-auto max-w-prose " >
            <div>
                <Map
                    text={myText}
                    textWords={myText}
                    markerPosition={markerPosition}
                    searchPerformed={searchPerformed}
                />
            </div>
            <SubmitButton/>
            <div className="pt-3">
                <BoHome/>
            </div>
        </div>
        </mapContext.Provider>
    )
}