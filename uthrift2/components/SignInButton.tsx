import React, { useState, useContext, useEffect } from 'react'
import { signInWithGoogle } from '../FirebaseConfig/firebase';
import styles from '../styles/GButton.module.css';
import { Button } from '@mui/material'
import { getAuth, signOut } from "firebase/auth";


function signout() {
    signOut(getAuth()).then(() => {
        console.log("signed out")
    }).catch((error) => {
        alert("Sign out Failed.")
    })
}

function SignInButton(props: { signedIn: Boolean }) {
    if (!props.signedIn) {
        return (
            <button type='button' className={styles.login} onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        )
    }
    else {
        return (
            <button type='button' onClick={signout}>
                Sign out
            </button>
        )
    }
}

export default SignInButton;
