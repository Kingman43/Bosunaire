import MySelect from "@/components/myselect.js";
import MyCheckbox from "@/components/myCheckbox";
import {useContext} from "react";
import {mapContext} from "@/components/Context";

function MapFilter() {
    const listingTypes = [
        { label: 'All Listings', value: 0 },
        { label: 'Homes for Sale', value: 1 },
        { label: 'Homes for Rent', value: 2 },
        { label: 'Bed and Breakfasts', value: 3 },
        { label: 'Event Hosts', value: 4 },
    ];
//    const [listingType, setType] = useState( 0);
    let {setShowButton, filter, setFilter} = useContext(mapContext);

    const newListingType = (event) => {
        setFilter(filter => ({
            ...filter,
            ...{listingType:event.target.value}
        }));
        setShowButton(true);
    };

    const handleChangeOneBedroom = () => {
        setFilter(filter => ({
            ...filter,
            ...{oneBedroom:!filter.oneBedroom}
        }));
        setShowButton(true);
    };
    const handleChangeTwoBedroom = () => {
        setFilter(filter => ({
            ...filter,
            ...{twoBedroom:!filter.twoBedroom}
        }));
        setShowButton(true);
    };
    const handleChangeOneBath = () => {
        setFilter(filter => ({
            ...filter,
            ...{oneBath:!filter.oneBath}
        }));
        setShowButton(true);
    };
    const handleChangeOneAndHalfBath = () => {
        setFilter(filter => ({
            ...filter,
            ...{oneAndHalfBath:!filter.oneAndHalfBath}
        }));
        setShowButton(true);
    };
    function FilterParms () {
        if (filter.listingType == 1)
            return homesForSale();
        else if (filter.listingType == 2)
            return homesForRent();
        else if (filter.listingType == 3)
            return bedAndBreakfast();
        else if (filter.listingType == 4)
            return eventHost();

    }
    function homesForSale () {
        return (
            <div>
                <div className="flex flex-row justify-around items-center text-purple-900">
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bedroom" value={filter.oneBedroom} onChange={handleChangeOneBedroom}/>
                        <MyCheckbox label=" 2 Bedrooms" value={filter.twoBedroom} onChange={handleChangeTwoBedroom}/>
                    </div>
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bath" value={filter.oneBath} onChange={handleChangeOneBath}/>
                        <MyCheckbox label=" 1.5 Bath" value={filter.oneAndHalfBath} onChange={handleChangeOneAndHalfBath}/>
                    </div>
                </div>
                <div className="text-xl">Show Additional Parms</div>
            </div>
        )
    }
    function homesForRent () {
        return (
            <div>
                <div className="flex flex-row justify-around items-center text-purple-900">
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bedroom" value={filter.oneBedroom} onChange={handleChangeOneBedroom}/>
                        <MyCheckbox label=" 2 Bedrooms" value={filter.twoBedroom} onChange={handleChangeTwoBedroom}/>
                    </div>
                    <div className=" flex flex-col  ">
                        <MyCheckbox label=" 1 Bath" value={filter.oneBath} onChange={handleChangeOneBath}/>
                        <MyCheckbox label=" 1.5 Bath" value={filter.oneAndHalfBath} onChange={handleChangeOneAndHalfBath}/>
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
                    value={filter.listingType}
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