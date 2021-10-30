import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../pages/Login/Firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('');


    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // Google Sign In 

    const signInWithGoogle = () => {
        setIsLoading(false);
        return signInWithPopup(auth, GoogleProvider)

    }

    // Google SignOut 

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setUserName('');
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Observer 

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setUserName(user?.displayName)
            }
            else {
                setUser({});
                setUserName('');
            }
            setIsLoading(false)
        })
    }, [])

    // Create User 

    const createUserWithEmailPassword = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password,)
            .then(res => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setUser(res.user);
                        setUserName(name);
                    });
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })


    }

    // Sign in user 

    const signInUserWithEmailPassword = (email, password) => {
        setIsLoading(false);
        return signInWithEmailAndPassword(auth, email, password)

    }

    return {
        user,
        setUser,
        error,
        setError,
        signInWithGoogle,
        googleSignOut,
        createUserWithEmailPassword,
        signInUserWithEmailPassword,
        isLoading,
        setIsLoading,
        userName
    }
}

export default useFirebase;


