import React , {useState, useEffect, createContext} from 'react';

import {auth} from './firebase/Firebase';

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from '@firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState('');

    const [loading, setLoading] = useState(false)

    // sign up
    const register = async (email,passWord) => {

        const user = await createUserWithEmailAndPassword(auth,email,passWord);
    
    };

    useEffect(()=>{

        
        onAuthStateChanged(auth,(currentuser)=>{

            setUser(currentuser);
            setLoading(true);
        });

    },[])



    // login
    const login = async (email , passWord)=>{

        const user = await signInWithEmailAndPassword(auth, email , passWord);
        
    }

    // /logout

    const logout = async ()=>{

        await signOut(auth)
    
    
    }


    // provider values
    const authvalues = {
        user,
        register,
        login,
        logout

    };

    return (
        <AuthContext.Provider value = {authvalues}>

            {loading && children}

        </AuthContext.Provider>
    )
}
