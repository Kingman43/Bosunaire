import BoHome from "@/components/bohome.js";
import YoyoWithBo from "@/components/yoyowithbo";

export default function Privacy() {

    return(
        <div className="mx-auto max-w-prose flex flex-col  py-1" >
            <h1 className="py-3 text-xl">Privacy</h1>
            <h2 className="pt-2">
                <ul>Locations are not shown publicly</ul>
                <ul>Profiles are not shown publicly</ul>
                <ul>Reviews are not shown publicly</ul>
                <ul>We do not read your browser cookies</ul>
                <ul>We do not mine your personal data</ul>
                <ul>We do not sell your data</ul>
                <ul>We never ask for your location</ul>
            </h2>

            <h2 className="py-4">
                The data stored in our private database are to assist other
                Bosunaires for matching purposes. We have zero other uses for your travel specifications.
            </h2>
            <h2>
                I am a software developer connecting travellers to hosts. I do not
                care who you are, where you are or anything about you.
            </h2>

            <YoyoWithBo/>
            <BoHome/>
        </div>
    )
}