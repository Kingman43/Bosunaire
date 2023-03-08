import Link from "next/link"
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/utils/firebase';

export default function Nav() {
    const [user] = useAuthState(auth);
    return(
        <nav className="flex justify-between items-center bg-my-nav-bar rounded-lg  py-1">
            <Link className="pl-1" href="/">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-10"
                     title="Home"
                />
            </Link>

            <Link href="/faqpage" title="Frequently asked questions">
                FAQ
            </Link>

            <Link href="/connect" title="Find a Bosunaire match for you">
                Connect
            </Link>

            <Link href="/host" title="Become a Bosunaire Host">
                Host
            </Link>

            <ul className="pr-1">
                {!user && (
                <Link className=" bg-gradient-to-r from-purple-300 to-my-green py-1 px-1 text-lg text-white rounded-lg font-medium ml-2" title="Sign In" href="/auth/login">
                        Sign In
                </Link>
                )}
                {user && (
                    <div className="flex-col flex justify-between items-center py-1">

                        <Link href="/dashboard"
                            title="Go to your account page">
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