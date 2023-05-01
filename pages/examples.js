import BoHome from "@/components/bohome.js";
import YoyoWithBo from "@/components/yoyowithbo";

export default function Examples() {

    return(
        <div className="mx-auto max-w-prose flex flex-col  py-1" >
            <h1 className="py-2 text-xl">Examples</h1>

            <h2 className="py-2">
                <b>Privately list your home for sale: </b>
                List your house for sale on Bosunaire and we will email you when your house matches a user
                looking to buy a house similar to yours. The exact location of your house is never made public.
                You choose who you want to email with specifics.
            </h2>

            <h2 className="py-2">
                <b>Buy a house before it actually goes on the market: </b>
                Click 'Search', enter your desired specs, submit. We will email the owners of houses
                that are for sale in our database that match your desires.
                Some of these houses exist online exclusively on Bosunaire.
            </h2>

            <h2 className="py-2">
                <b>Bed and Breakfast: </b>
                Need a place to stay tonight (or next month) while you're traveling? Search the Bosunaire
                map to match
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
                return the favor next year when the opposing team hosts. Subsequently, you search on the map to find a BnB for the
                game. You see "The full experience" is available. You select it. Bosunaire.com notifies applicable
                hosts. Hosts email you directly to confirm details.
            </h2>

            <h2 className="pt-2">
                <b>Bosunaire swapping: </b>
                Connect with someone that will host you in their city for a weekend. You agree to return the favor
                to host them in your city at a later date.
            </h2>

            <YoyoWithBo/>
            <BoHome/>

        </div>



    )
}
