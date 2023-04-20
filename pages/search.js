import BoHome from "@/components/bohome.js";
import Map from '@/components/map';
import {useState} from "react";
import {mapContext} from "@/components/Context";

let numHosts = 1;
let origPosition = [37.0902, -95.7129];
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
        setMarkerPosition([location.y, location.x]);
    }
    function getNewValues () {
        numHosts++;
        setMyText(numHosts + " Bosunaire Hosts within 10 miles");
    }

    function SubmitButton () {

        if (position.lat !== markerPosition.lat || position.lng !== markerPosition.lng) {
            return (<button onClick={reSubmit}> ReSubmit </button>)
        } else
            return null;
    }


    return(
        <mapContext.Provider value={{position, setPosition, markerPosition, setMarkerPosition}}>
        <div className="mx-auto max-w-prose " >
            <SubmitButton/>
            <div>
                <Map
                    text={myText}
                    textWords={myText}
                    markerPosition={markerPosition}
                    searchPerformed={searchPerformed}
                />
            </div>

            <div className="pt-3">
                <BoHome/>
            </div>
        </div>
        </mapContext.Provider>
    )
}