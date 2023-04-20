import BoHome from "@/components/bohome.js";
import Map from '@/components/map';
import {useState} from "react";
import {mapContext} from "@/components/Context";

export default function Search() {
//    37.0902° N, 95.7129° W

    const [position, setNewPosition] = useState( [37.0902, -95.7129]);
    const [markerPosition, setNewMarkerPosition] = useState( [37.0902, -95.7129]);
    const zoom = 4;
    function sayHello() {
        console.log('You clicked me! NewPostion:', position);
//        setNewPosition(newPosition);
        getNewValues();
    }

    function getNewValues () {
        console.log("get the new values and set them");
        setNewMarkerPosition(position);
    }

    function SubmitButton () {
            return (
                <button onClick={sayHello}> ReSubmit </button>
            )
    }

    return(
        <mapContext.Provider value={{position, setNewPosition}}>
        <div className="mx-auto max-w-prose " >
            <SubmitButton/>
            <div>
                <Map
                    position={position}
                    zoom={zoom}
                    text={"5 Bosunaire hosts within 10 miles"}
                    textWords={"5 Bosunaire hosts within 10 miles. Plus a bunch more words/text"}
                    markerPosition={markerPosition}
                />
            </div>

            <div className="pt-3">
                <BoHome/>
            </div>
        </div>
        </mapContext.Provider>
    )
}