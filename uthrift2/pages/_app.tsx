import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContext } from './api/authContext'
import { userdata, app } from '../FirebaseConfig/firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import React, { useState, useEffect } from 'react'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../util/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache
  const [data, setData] = React.useState(userdata)
  React.useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        setData({
          isSignedIn: true,
          displayName: user.displayName,
          uid: user.uid,
          pfp: user.photoURL
        }
        )
      } else {
        setData({
          isSignedIn: false,
        }
        )
        console.log("not signed in")
      }
    }
    )
  })

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <AuthContext.Provider value={[data, setData]}>
            <Component {...pageProps} />
          </AuthContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
