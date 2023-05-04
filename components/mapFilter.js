import MySelect from "@/components/myselect.js";
import MyCheckbox from "@/components/myCheckbox";
import {useContext, useState} from "react";
import {mapContext} from "@/components/Context";

function MapFilter() {
    const listingTypes = [
        { label: 'All Listings', value: 0 },
        { label: 'Homes for Sale', value: 1 },
        { label: 'Bed and Breakfasts', value: 2 },
        { label: 'Event Hosts', value: 3 },
    ];
//    const [listingType, setType] = useState( 0);
    let {listingType, setListingType, setShowButton} = useContext(mapContext);
    const [checkedOneBedroom, setCheckedOneBedroom] = useState(true);
    const [checkedTwoBedroom, setCheckedTwoBedroom] = useState(true);

    const handleChangeOneBedroom = () => {
        setCheckedOneBedroom(!checkedOneBedroom);
        setShowButton(true);
    };
    const handleChangeTwoBedroom = () => {
        setCheckedTwoBedroom(!checkedTwoBedroom);
        setShowButton(true);
    };

    const newListingType = (event) => {
        setListingType(event.target.value);
        setShowButton(true);
    };
    function FilterParms () {
        if (listingType == 1)
            return homesForSale();
        else if (listingType == 2)
            return bedAndBreakfast();
        else if (listingType == 3)
            return eventHost();

    }
    function homesForSale () {
        return (
            <div>
                <div className="flex flex-row justify-around items-center text-purple-900">
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bedroom" value={checkedOneBedroom} onChange={handleChangeOneBedroom}/>
                        <MyCheckbox label=" 2 Bedrooms" value={checkedTwoBedroom} onChange={handleChangeTwoBedroom}/>
                    </div>
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bath" value={checkedOneBedroom} onChange={handleChangeOneBedroom}/>
                        <MyCheckbox label=" 1.5 Bath" value={checkedTwoBedroom} onChange={handleChangeTwoBedroom}/>
                    </div>
                </div>
                <div className="text-xl">Show Additional Parms</div>
            </div>
        )
    }
    function bedAndBreakfast () {
        return (
            <div className="text-xl">
                Show the BnB parms
            </div>
        )
    }
    function eventHost () {
        return (
            <div className="text-xl">
                Show the Event Hosting parms
            </div>
        )
    }

    return (
        <div>
            <div className="text-l text-purple-900">
                <MySelect
                    options={listingTypes}
                    value={listingType}
                    onChange={newListingType}
                />
            </div>
            <div>
                 <FilterParms/>
            </div>
        </div>
    )
}

export default MapFilter