import MySelect from "@/components/myselect.js";
import {useState} from "react";
function MapFilter({onFilterChange, onCancel, parms}) {
    const listingTypes = [
        { label: 'All Listings', value: 0 },
        { label: 'Homes for Sale', value: 1 },
        { label: 'Bed and Breakfasts', value: 2 },
        { label: 'Event Hosts', value: 3 },
    ];
    const [listingType, setType] = useState( 0);

    const newListingType = (event) => {
        setType(event.target.value);
        onFilterChange();
    };
    return (
        <div className="py-2 text-purple-900">
                    <MySelect
                        options={listingTypes}
                        value={listingType}
                        onChange={newListingType}
                    />
        </div>
    )
}

export default MapFilter