import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Navbar () {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <a>
          <Image src='/images/logo.svg' alt="Logo" className="h-8 w-10 mr-2" width="132px" height="36px"/>
        </a>
        <div>
          <Link href="/login">
            <a className="py-2 px-4 text-gray-600 hover:text-green-light cursor-pointer mx-4">
              Log In
            </a>
          </Link>
          <Link href="/register">
            <a className="py-3 px-8 bg-green-light text-white rounded-full shadow-sm hover:bg-green-default focus:outline-none cursor-pointer">
              Sign Up
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
