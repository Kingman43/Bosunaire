import BoHome from "@/components/bohome.js";
import YoyoWithBo from "@/components/yoywithbo";

export default function Privacy() {

    return(
        <div className="mx-auto max-w-prose flex flex-col  py-1" >
            <h1 className="py-3 text-xl">Privacy</h1>
            <h2 className="pt-2">
                We do not read your browser cookies.
                We do not mine your personal data.
                We do not sell your data.
                We will not show your location on the map.
                The map shows only a summary/total of the hosts in the area.
            </h2>

            <h2 className="pt-8">
                Note, the Host and traveler data stored in our private database are to assist other
                Bosunaires for matching purposes. We have zero other uses for your travel specifications.
            </h2>
            <h2>
                I am a software developer in North Carolina connecting one Bosunaire to another. I do not
                care who you are, where you are or anything about you.
            </h2>

            <YoyoWithBo/>
            <BoHome/>
        </div>
    )
}