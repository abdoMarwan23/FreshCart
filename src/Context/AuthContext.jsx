import {createContext, useState } from "react";


export const AuthContext = createContext();


export default function AuthContextProvider({ children }) {
    
    let [userToken, setUserToken] = useState(localStorage.getItem('token') ?? '');

    return <AuthContext.Provider value={{userToken, setUserToken}}>
        {children}
    </AuthContext.Provider>
}