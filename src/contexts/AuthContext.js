import React,{useState,useContext,useEffect} from "react"

import {auth } from "../firebase";

const AuthContext = React.createContext()

export const useAuth =()=>{
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
    const [currentUser,setCurrentUser]  = useState()
    const [loading,setLoading] = useState()

    const signUp =(email,password)=>{
        return auth.createUserWithEmailAndPassword(email,password);
    }

    const logIn = (email,password) =>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    const logout = ()=>{
        return auth.signOut()
    }

    useEffect(() =>{
        setLoading(true)
        const unSubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unSubscribe;
    },[])

    const value = {
        signUp,
        currentUser,
        logIn,
        logout,
    }

    return (
        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}