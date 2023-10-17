import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoading] = useState(true)


    const auth = getAuth(app)



    const googleProvider = new GoogleAuthProvider()


    /**GooGle Pop Up Login**/
    
    const googleLogin = () => {
        setLoading(true)
        console.log('Google login Function testing');
        return signInWithPopup(auth, googleProvider)
    }

    /**Create User With Email & PassWord**/
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin With Email & PassWord
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /**LogOut User**/
    const logOutUser = () => {
        setLoading(true)
        signOut()
    }






    const userInfo = {
        user,
        loader,
        googleLogin,
        createUser,
        signInUser,
        logOutUser
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;