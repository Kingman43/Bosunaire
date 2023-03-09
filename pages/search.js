import BoHome from "@/components/bohome.js";
import Map from '@/components/map';
export default function Search() {
    const locations = [
        {"name": "Mark King was here", position: [35.91086, -78.69078]},
        {"name": "Beth Allen was here", position: [35.7, -78.4]},
        {"name": "A third  test marker", position: [35.93, -78.4]},
        {"name": "A fourth test marker", position: [35.8, -78.69]},
        {"name": "A fifth test marker", position: [35.78, -78.6]},
        {"name": "A sixth test marker", position: [35.83, -78.65]},
    ];
    const position = [35.91086, -78.69078];
    const zoom = 10;

    return(
        <div className="mx-auto max-w-prose " >
            <h1 className="p-3">Testing out some map stuff</h1>

            <div>
                <Map
                    position={position}
                    locations={locations}
                    zoom={zoom}
                />
            </div>

            <div className="pt-3">
                <BoHome/>
            </div>
        </div>


    )
}