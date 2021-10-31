import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
// import { useHistory, useLocation } from 'react-router-dom';



initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/plans';

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();



        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)  
                // history.push(redirect_uri);   
            })
            .finally(() => setIsLoading(false));
            
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;