import Link from "next/link";

function Bohome() {
    return (

        <div className="p-1">
            <Link className="flex justify-center  " href="/">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-12"
                     title="Home"
                />
            </Link>
        </div>
    )
}

export default Bohome