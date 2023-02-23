import Link from "next/link"
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';

export default function Nav() {
    const [user, loading] = useAuthState(auth);

    return(
        <nav className={"flex justify-between items-center py-1"}>
            <Link href="/">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-10"
                     title="Home"
                />
            </Link>

            <Link href="/page2">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-10"
                     title="page2"
                />
            </Link>

            <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                 referrerPolicy="no-referrer"
                 className="w-10"
            />
            <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                 referrerPolicy="no-referrer"
                 className="w-10"
            />
            <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                 referrerPolicy="no-referrer"
                 className="w-10"
            />

            <ul>
                {!user && (
                <Link className="py-2 px-4 text-lg bg-my-green text-white rounded-lg font-medium ml-8" title="Sign In" href="/auth/login">
                        Sign In
                </Link>
                )}
                {user && (
                    <div className="flex-col flex justify-between items-center py-1">

                        <Link href="/dashboard">
                            <img src={user.photoURL}
                                 alt="avatar"
                                 referrerPolicy="no-referrer"
                                 className="w-10 rounded-full"
                            />
                        </Link>
                        <button className="text-xs hover:bg-stone-200" onClick={() => auth.signOut()}>Sign out</button>
                    </div>
                )}
            </ul>
        </nav>
    );
}

//<h2 className="">{user.displayName}</h2>