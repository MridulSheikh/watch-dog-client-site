import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';
firebaseInitialize()
const useFirebase = () => {
    const [user, setUser]=useState({})
    const [error, setError]=useState()
    const [name, setName]=useState('')   // user name 
    const [password,setPassword]=useState('')   // set user password
    const [email, setEmail] = useState('')   // set user email
    const Googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const sininWithgoogle = () =>{
          signInWithPopup(auth, Googleprovider)
          .then(result =>{
              setUser(result.user)
          })
          .catch(error => {
           setError(error)
          })
      }
       // log out user
    const Logout = ()=>{
          signOut(auth)
          .then(()=>{
              setUser({})
          })
      }
      useEffect(()=>{
          onAuthStateChanged(auth, user =>{
              if (user) {
                  setUser(user)
                } 
          })
      },[])
      // set email password
    const EmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    // regitration handle
    const HandleReg = e =>{
        setError('')
        e.preventDefault();
        if(password.length < 6){
          setError('This password must be 6 charecter long')
       return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
          const user = userCredential.user
          console.log(user)
          setError('')
          setuserName();
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
      }
        // handle change name
        const handlechangeName = e =>{
            setName(e.target.value)
        }
        const setuserName = () =>{
            updateProfile(auth.currentUser, {displayName: name})
            .then(result =>{
                // console.log(result.user)
            })
        }

         //user sing in handle
      const HandleSingin = e =>{
        setError('')
        e.preventDefault();
        if(password.length < 6){
          setError('This password must be 6 charecter long')
       return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user =result.user
          console.log(user)
         
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
      }
        //obserb wether user auth state changed or not
     useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
          });
    },[])
    return {
        sininWithgoogle,
        user,
        Logout,
        EmailChange, 
        HandleReg,
        handlechangeName,
        handlePassword,
        error,
        HandleSingin
    };
};

export default useFirebase;