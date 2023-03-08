import {auth} from "@/utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";
import BoHome from "@/components/bohome.js";


export default function Host() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    console.log(user);
    if (loading) return <h1>Loading...</h1>;
    if (!user) route.push("/auth/login");
    if (user)
    return(
        <div className=" flex flex-col py-1" >
            <h1 className="py-4">Become a Bosunaire host</h1>
            <BoHome/>
        </div>
    )
}