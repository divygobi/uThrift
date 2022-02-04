import type { NextPage } from 'next'
import LandingNav from '../components/LandingNav'
import Layout from '../components/Layout'
import SignInButton from '../components/SignInButton'
import SignedIn from '../components/SignedIn'
import MenuAppBar from '../components/NavBar'

function Home() {
  return (
    <>
      <MenuAppBar />
      <Layout>
        <h1>
          Welcome to Uthrift!
        </h1>
        <SignInButton />
        <SignedIn />
      </Layout>
    </>
  )
}

export default Home
