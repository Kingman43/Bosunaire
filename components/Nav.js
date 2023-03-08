import Link from "next/link"
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '@/utils/firebase';

export default function Nav() {
    const [user] = useAuthState(auth);
    return(
        <nav className="flex justify-between items-center bg-my-nav-bar rounded-lg  py-1">
            <Link className=" hover:bg-my-nav-hover pl-1 rounded" href="/">
                <img src="/BoPurpleGreenTrans.png" alt="BoLogo"
                     referrerPolicy="no-referrer"
                     className="w-10"
                     title="Home"
                />
            </Link>

            <Link className=" hover:text-my-nav-hover " href="/faqpage" title="Frequently asked questions">
                FAQ
            </Link>

            <Link className=" hover:text-my-nav-hover " href="/search" title="Find a Bosunaire match for you">
                Search
            </Link>

            <Link className=" hover:text-my-nav-hover " href="/host" title="Become a Bosunaire Host">
                Host
            </Link>

            <ul className="pr-1">
                {!user && (
                <Link className=" hover:bg-my-nav-hover bg-green-700  py-1 px-1 text-lg text-white rounded-lg font-medium ml-2" title="Sign In" href="/auth/login">
                        Sign In
                </Link>
                )}
                {user && (
                    <div className="flex-col flex justify-between items-center py-1 hover:bg-my-nav-hover rounded-xl">

                        <Link className="  " href="/dashboard"
                            title="Go to your account page">
                            <img src={user.photoURL}
                                 alt="avatar"
                                 referrerPolicy="no-referrer"
                                 className="w-10 rounded-full"
                            />
                        </Link>

                    </div>
                )}
            </ul>
        </nav>
    );
}

//<h2 className="">{user.displayName}</h2>