import Link from "next/link";

export default function Connect() {

    return(
        <div className="flex flex-col py-1" >
            <h1 className="py-8">Show the map with search bar, etc</h1>


            <Link className="flex justify-center  " href="/">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-40"
                     title="Home"
                />
            </Link>
        </div>


    )
}