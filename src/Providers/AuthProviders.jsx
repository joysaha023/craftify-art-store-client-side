import React, { createContext } from 'react';


export const AuthContaxt = createContext(null);





const AuthProviders = ({children}) => {



    const authInfo = {

    }
    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProviders;