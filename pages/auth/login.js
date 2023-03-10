import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from "react-icons/ai";
import {GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from 'firebase/auth';
import {auth} from '@/utils/firebase';
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAuthState, useUpdateProfile} from "react-firebase-hooks/auth";

export default function Login() {
    const [user] = useAuthState(auth);
    const route = useRouter();
        // Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }
    // Sign in with Facebook
    const fbProvider = new FacebookAuthProvider();
    const FacebookLogin = async () => {
        try {
//            const result = await signInWithPopup(auth, fbProvider);
//            const credential = await FacebookAuthProvider.credentialFromResult(result);
//            const token = credential.accessToken;
//            let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
//            await useUpdateProfile({auth: auth.currentUser}, {photoUrl: photoUrl});

            const result = await signInWithPopup(auth, fbProvider);
            const credential = await FacebookAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
            await useUpdateProfile({auth: auth.currentUser}, {photoUrl: photoUrl});


            console.log(result);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user) {
            route.push("/dashboard");
        } else {
            console.log('login');
        }
    }, [user]);
    return(
        <div className="mx-auto max-w-prose shadow-xl mt-5 p-5">

            <div className="py-4">
                <h3 className="py-4">Sign in with one of the providers</h3>
            </div>
            <div className="flex flex-col items-center gap-4">
                <button onClick={GoogleLogin} className="text-white bg-gray-700 p-4 w-30 font-medium rounded-lg flex align-middle gap-2">
                    <FcGoogle className="text-2xl"/>Sign in with Google
                </button>
                <div className="text-xl">Or</div>
                <button onClick={FacebookLogin} className="text-white bg-gray-700 p-4 w-100 font-medium rounded-lg flex align-middle gap-2 ">
                    <AiFillFacebook className="text-2xl text-blue-400"/> Sign in with Facebook
                </button>
            </div>
            <div className="text-xl pt-4 ">Or</div>
            <div className="flex justify-center py-4">
                <button className="text-white bg-gray-500 p-2 w-30 font-medium rounded-lg flex align-middle gap-2">
                    Sign in with email
                    not yet implemented. Use Google or Facebook for now
                </button>
            </div>
        </div>
    );
}