import Link from "next/link";

function YoyoWithBo() {
    return (

        <div className="px-20 py-2">
            <div className=" bg-gradient-to-r from-my-bg via-my-nav-hover to-my-bg rounded-xl">
                <Link href="/search" title="Find a Bosunaire">
                    <h1 className=" text-l "> Yoyo with Bo</h1>
                </Link>
            </div>
        </div>
    )
}

export default YoyoWithBo