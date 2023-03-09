import BoHome from "@/components/bohome.js";
import YoyoWithBo from "@/components/yoywithbo";

export default function Examples() {

    return(
        <div className="mx-auto max-w-prose flex flex-col  py-1" >
            <h1 className="py-2 text-xl">Examples</h1>

            <h2 className="py-2">
                <b>Bed and Breakfast: </b>
                Need a place to stay tonight (or next month) while you're traveling? Click the Bosunaire map to match
                with available hosts that meet your specific parameters. Bosunaire.com notifies
                applicable hosts. Hosts email you directly. Then you're on your own regarding
                costs, method of payment, etc.
            </h2>

            <h2 className="py-2">
                <b>Event hosting - quid-pro-quo: </b>
                A Bosunaire that regularly attends home football games for Clemson University offers to host
                opposing fans to join them for the pre-game tailgate and game. The Bo host also offers a place to stay,
                a ride to the game, airport pickup/dropoff. "The full experience."
                The host prefers to match with someone that will
                return the favor next year when the opposing team hosts. You click on the map to find a BnB for the
                game. You notice "The full experience" is available. You select it. Bosunaire.com notifies applicable
                hosts. Hosts email you directly to confirm details.
            </h2>

            <h2 className="pt-2">
                <b>Bosunaire swapping: </b>
                Connect with someone that will host you in their city, and you return the favor
                to host them in your city.
            </h2>

            <YoyoWithBo/>
            <BoHome/>

        </div>



    )
}