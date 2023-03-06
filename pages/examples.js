import Link from "next/link";

export default function Examples() {

    return(
        <div className="flex-col flex  py-1" >
            <h1 className="py-3 text-xl">Examples</h1>

            <h2 className="py-2">
                <b>Bed and Breakfast: </b>
                Need a place to stay tonight (or next month) while you're traveling? Click the Bosunaire map to match
                with available hosts that meet your specific parameters.
            </h2>

            <h2 className="py-2">
                <b>Event hosting - quid-pro-quo: </b>
                A Bosunaire that regularly attends home football games for Clemson University offers to host
                opposing fans to join them for the pre-game tailgate and game. The Bo host also offers a place to stay,
                a ride to the game, airport pickup/dropoff. The full experience.
                The host prefers to match with someone that will
                return the favor next year when the opposing team hosts.
            </h2>

            <h2 className="py-2">
                <b>Bosunaire swapping: </b>
                Connect with someone to will host you in their city, and you return the favor.
            </h2>

            <div>
                <Link href="/travel" title="Find a Bosunaire">
                    <h1 className=" bg-gradient-to-r from-my-bg to-green-500 text-4xl rounded-xl mt-3"> Yoyo with Bo</h1>
                </Link>

            </div>

        </div>



    )
}