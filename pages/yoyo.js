import YoyoWithBo from "@/components/yoywithbo";
import Bohome from "@/components/bohome";

export default function Yoyo() {

    return(
        <div className="mx-auto max-w-prose flex flex-col  py-1" >
            <h1 className="py-3 text-3xl">You're on your own</h1>

            <h2 className="py-2 text-xl ">
                This cannot be stressed enough. You are very much <b> ON YOUR OWN </b>regarding verification
                of others you are matched with.
            </h2>

            <h2 className="py-2">
                Bosunaire.com highly recommends some type of face-to-face real-time video
                as a basis for a relationship with another Bo. If a BnB is involved, face-to-face real-time video should
                include enough real-time video of the residence to confirm the host is indeed at
                the address they are specifying
            </h2>

            <h2 className="pt-2">
                Payments are handled outside of Bosunaire.com.
                Remember, you're on your own.
                Bosunaire.com cannot refund you.
                Bosunaire.com cannot verify details of the person on the other side of your match.
                Bosunaire is simply a tool to connect people. After connecting, you're on your own.
            </h2>

            <YoyoWithBo/>
            <Bohome/>
        </div>

    )
}