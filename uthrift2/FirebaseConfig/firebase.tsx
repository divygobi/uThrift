// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { promisify } from "util";
import { useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCTHuRGeBlZkPFY3S9BVN_MHuRtH5eseH0",
    authDomain: "uthrift-backend.firebaseapp.com",
    projectId: "uthrift-backend",
    storageBucket: "uthrift-backend.appspot.com",
    messagingSenderId: "400710483650",
    appId: "1:400710483650:web:38375c23fe1049a45c055b",
    measurementId: "G-ZZTMD06JWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//info from current user signed in
export var auth = getAuth(app);

const provider = new GoogleAuthProvider();
const db = getFirestore();

//function to sign in

export function signInWithGoogle(): void {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

export interface userData {
    isSignedIn: Boolean,
    displayName?: string | null,
    uid?: string | null,
    pfp?: string | null,

}

export var userdata: userData = {
    isSignedIn: false,
}
