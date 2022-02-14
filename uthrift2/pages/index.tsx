import type { NextPage } from 'next'
import LandingNav from '../components/LandingNav'
import { AuthContext } from './api/authContext'
import { useState, useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import SignInButton from '../components/SignInButton'
import SignedIn from '../components/SignedIn'
import MenuAppBar from '../components/NavBar'

function Home() {
  let value = useContext(AuthContext)
  const [signedIn, setSignedIn] = useState<Boolean>(false);
  useEffect(() => {
    setSignedIn(value[0].isSignedIn)
  })
  return (
    <>
      <MenuAppBar />
      <Layout>
        <h1>
          Welcome to Uthrift!
        </h1>
        <SignInButton signedIn={signedIn} />
        {/* <SignedIn /> */}
      </Layout>
    </>
  )
}

export default Home
