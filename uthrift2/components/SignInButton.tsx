import React, { useState } from 'react'
import { signInWithGoogle } from '../FirebaseConfig/firebase';
import styles from '../styles/GButton.module.css';

function SignInButton() {
    return (
        <>
            <div>
                <button type='button' className={styles.login} onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
            </div>
        </>

    )
}

export default SignInButton;
