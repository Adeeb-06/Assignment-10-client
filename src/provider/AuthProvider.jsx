import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

const provider = new GoogleAuthProvider()

    
    const registerUser = async (email, password, name, photoURL) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            if (!userCredential) throw new Error("Registration failed")
            await updateProfile(userCredential.user,{
                displayName: name,
                photoURL
            })
            return userCredential
        } catch (error) {
            console.log(error)
        }
    }
    console.log(user)
    const logout = async (auth) => {
        try {
            setUser(null)
            return signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (email, password) => {
        // eslint-disable-next-line no-useless-catch
        try {
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw error
        }
    }

    const googleSignIn = async () => {
        try {
         const res = await signInWithPopup(auth, provider)
         return res
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
        })

        return () => unsubscribe()
    })

    const authData = {
        user,
        setUser,
        registerUser,
        googleSignIn,
        logout,
        loginUser
    }
  return <AuthContext value={authData}> {children} </AuthContext>
}

export default AuthProvider