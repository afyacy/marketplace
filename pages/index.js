import Navbar from '../components/landing-page/Navbar'
import Hero from '../components/landing-page/Hero'
import FeaturesMain from '../components/landing-page/FeaturesMain'
import Integrations from '../components/landing-page/Integrations'
import CallToAction from '../components/landing-page/CallToAction'

export default function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesMain />
      <Integrations />
      <CallToAction />
    </>
  )
}
