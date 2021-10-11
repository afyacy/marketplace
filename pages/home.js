import { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import router from 'next/router'
import Navbar from '../components/layout/Navbar'
import Booking from '../components/event/booking'

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
      <Booking />
    </>
  )
}
