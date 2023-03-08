import BoHome from "@/components/bohome.js";
import Map from '@/components/map';
export default function Search() {
    const position = [35.91086, -78.69078];
    const zoom = 15;
    const marker = [35.91086, -78.69078];
    return(
        <div className="" >
            <h1 className="py-8">Trying to get the map to work</h1>

            <div>
                <Map
                 position={position}
                 zoom={zoom}
                 marker={marker}
                />
            </div>

            <div className="pt-3">
                <BoHome/>
            </div>
        </div>


    )
}