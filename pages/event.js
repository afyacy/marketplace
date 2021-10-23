import Navbar from '../components/layout/Navbar'

export default function Event (props) {
  console.log(props)

  return (
    <>
      <Navbar />
      { props }
    </>
  )
}

export async function getStaticProps (context) {
  return {
    props: { context }
  }
}
