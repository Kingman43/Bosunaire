import BoHome from "@/components/bohome.js";
import Map from '@/components/map';
export default function Search() {
    const locations = [
        {"name": "Mark King was here", position: [35.91086, -78.69078]},
        {"name": "Beth Allen was here", position: [35.7, -78.3]},
    ];
    const position = [35.91086, -78.69078];
    const zoom = 9;
    const marker = [35.91086, -78.69078];
    const popupText = "Mark King was here"
    return(
        <div className="" >
            <h1 className="p-3">Testing out some map stuff</h1>

            <div>
                <Map
                    position={position}
                 locations={locations}
                 zoom={zoom}
                 marker={marker}
                 mypopup={popupText}
                />
            </div>

            <div className="pt-3">
                <BoHome/>
            </div>
        </div>


    )
}