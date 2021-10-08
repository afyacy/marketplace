import { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import router from 'next/router'
import Navbar from '../components/layout/Navbar'

export default function Home () {
  const [session] = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [])

  return (
    <>
      <Navbar />
        <h1> Protected Page | Home </h1>
    </>
  )
}
