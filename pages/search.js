import BoHome from "@/components/bohome.js";
import MyButton from "@/components/mybutton.js";
import Map from '@/components/map';
import {useState} from "react";
import {mapContext} from "@/components/Context";
import { round } from 'lodash';
import MapFilter from "@/components/mapFilter";

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
    const [bShowSearchButton, setShowButton] = useState( false);
    const [listingType, setListingType] = useState( Number(0));

    const parms = {};

    function reSubmit() {
        console.log('You clicked me! NewPostion:', position);
        setMarkerPosition(position);
        getNewValues();
    }
    function searchPerformed (location) {

        getNewValues();
        setMarkerPosition({ lat: location.y, lng: location.x });
        setPosition({ lat: location.y, lng: location.x });
        setShowButton(false);
        console.log("searchPerformed:" , [location.y, location.x]);
    }
    function getNewValues () {
        numHosts++;
        setShowButton(false);
        setMyText(numHosts + " Bosunaire Hosts within 10 miles");
    }

    function SubmitButton () {
        if ( (round(position.lat, 3) !== round(markerPosition.lat,3) ) ||
            (round(position.lng,3) !== round(markerPosition.lng,3) ) ||
            bShowSearchButton) {
//            console.log("pos.lat:", round(position.lat,3));
//            console.log("mar.lat:", round(markerPosition.lat,3));
//            console.log("pos.lng:", round(position.lng,3));
//            console.log("mar.lng:", round(markerPosition.lng,3));
//            console.log("bShowSearchButton:", bShowSearchButton);
            return <MyButton func={reSubmit} text='Search Again' bActive={true}/>
        } else {
            return <MyButton func={reSubmit} text='Search Again' bActive={false}/>
            // return <MyButton text='Search is up-to-date'/>
        }
    }

    return(
        <mapContext.Provider
            value={{position, setPosition, markerPosition, setMarkerPosition,
                setShowButton, listingType, setListingType}}>
            <div className="mx-auto max-w-prose " >
                Testing out some map stuff
                <div>
                    <Map
                        text={myText}
                        textWords={myText}
                        markerPosition={markerPosition}
                        searchPerformed={searchPerformed}
                    />
                </div>

                <div className="mx-auto max-w-prose flex justify-around items-center">
                    <SubmitButton/>
                </div>

                <MapFilter />


                <div className="pt-3">
                    <BoHome/>
                </div>
            </div>
        </mapContext.Provider>
    )
}