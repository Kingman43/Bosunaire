import {auth} from "../utils/firebase";
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
        <div className="flex-col flex  py-1" >
            <h5>Welcome to your Account Page {user.displayName}</h5>
        </div>
    )
}