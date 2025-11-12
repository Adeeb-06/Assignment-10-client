/* eslint-disable no-useless-catch */
import React, { useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config'
import axios from 'axios'

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const provider = new GoogleAuthProvider()

    
    const registerUser = async (email, password, name, photoURL) => {
        try {
            setLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            if (!userCredential) throw new Error("Registration failed")
            await updateProfile(userCredential.user,{
                displayName: name,
                photoURL
            })
            const res = await axios.post('http://localhost:3000/users/',{
                name,
                email,
                password,
                photoURL
            })
            console.log(res)
            setLoading(false)
            return userCredential
        } catch (error) {
            throw error
        }
    }
    console.log(user)
    const logout = async (auth) => {
        try {
            setLoading(true)
            setUser(null)
            return signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (email, password) => {
        // eslint-disable-next-line no-useless-catch
        try {
            setLoading(true)
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            throw error
        }
    }

    const googleSignIn = async () => {
        try {
            setLoading(true)
         const res = await signInWithPopup(auth, provider)

          const existingUser = await axios.get(`http://localhost:3000/users/${user.email}`);
          if(!existingUser.data){
            const user = await axios.post('http://localhost:3000/users/',{
                  name: res.user.displayName,
                  email: res.user.email,
                  password: res.user.email,
                  photoURL: res.user.photoURL
              })
          }
         return res
        } catch (error) {
            throw error
        }
    }


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    })

    const authData = {
        user,
        setUser,
        registerUser,
        googleSignIn,
        logout,
        loginUser,
        loading
    }
  return <AuthContext value={authData}> {children} </AuthContext>
}

export default AuthProvider