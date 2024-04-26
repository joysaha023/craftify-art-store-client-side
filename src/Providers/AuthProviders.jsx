import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const AuthContaxt = createContext(null);
const auth = getAuth(app);




const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in unsubscribe', currentUser);
            setUser(currentUser);
        });
        return() => {
            unSubscribe();
        }
    })



    const authInfo = {
        user,
        createUser,
        SignIn
    }
    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProviders;