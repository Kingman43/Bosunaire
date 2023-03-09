import {auth} from "@/utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";

export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    console.log(user);
    if (loading) return <h1>Loading...</h1>;
    if (!user) route.push("/auth/login");
    if (user)
    return(
        <div className="mx-auto max-w-prose flex flex-col py-1" >
            <h5 className="py-4">Account Page</h5>
            <h5 className="py-6">{user.displayName}</h5>

            <button className="text-lg hover:text-my-purple" onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}