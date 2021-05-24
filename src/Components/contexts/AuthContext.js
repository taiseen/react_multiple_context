import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    let [userStatus, setUserStatus] = useState(true);

    const toggleAuth = () => {
        setUserStatus(userStatus = !userStatus);
    }

    return (
        <AuthContext.Provider value={
            { userStatus, toggleAuth }
        }>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;