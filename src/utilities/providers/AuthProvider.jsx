import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';
import { app } from '../../config/firebase.init';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth(app);

    const signUp = async (email, password) => {
        try {
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }
    const login = async (email, password) => {
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }
    const logout = async () => {
        try {
            return await signOut(auth)
        } catch (error) {
            setError(error.code)
            throw error
        }
    }
    const updateUser = async (displayName , photo) => {
        try {
            await updateProfile(auth.currentUser, { displayName: displayName , photoURL : photo })
            setUser(auth.currentUser)

        } catch (error) {
            setError(error.code)
            throw error
        }
    }
    console.log(user)
    // Observe user state (auth)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                setLoader(false); // Move this line here

                axios.post('http://localhost:5000/api/set-token', { email: user.email, name: user.displayName })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('token', data.data.token)
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                localStorage.removeItem('token');
                setLoader(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const contextVale = { user, loader, setLoader, signUp, login, logout, updateUser  , error , setError}
    return (
        <AuthContext.Provider value={contextVale}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;