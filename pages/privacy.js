import Link from "next/link";

export default function Privacy() {

    return(
        <div className="flex-col flex  py-1" >
            <h1 className="py-3 text-xl">Privacy</h1>
            <h2 className="pt-2">
                We do not read your browser cookies.
                We do not mine your personal data.
                We do not sell your data.
                I am a software developer in North Carolina connecting one Bosunaire to another. I do not
                care who you are, where you are or anything about you.
            </h2>

            <h2 className="pt-8">
                Note, the Host and traveler data stored in our private database are to assist other
                Bosunaires for matching purposes. We have zero other uses for your travel specifications.
            </h2>

            <div>
                <Link href="/connect" title="Find a Bosunaire">
                    <h1 className=" bg-gradient-to-r from-my-bg to-green-500 text-4xl rounded-xl mt-3"> Yoyo with Bo</h1>
                </Link>
            </div>
        </div>
    )
}