import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { signOut, useSession } from 'next-auth/client'

export default function Navbar () {
  const [session, loading] = useSession()
  // <!-- Toggle for mobile view -->
  const [showMe, setShowMe] = useState(false)
  function toggle () {
    setShowMe(!showMe)
  }
  return (
  // <!-- Navbar goes here -->
  <>
    <Head>
      <title>MarketPlace</title>
    </Head>
    <nav className="bg-white shadow-sm">
      <div className="max mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
                <Link href="/">
                  <a className="flex items-center py-4 px-2">
                  <Image src='/images/logo.svg' alt="Logo" className="h-8 w-10 mr-2" width="132px" height="36px"/>
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="#">
                <a className="py-4 px-2 hover:text-green-500 transition duration-300">Services</a>
              </Link>
              <Link href="#">
                <a className="py-4 px-2 hover:text-green-500 transition duration-300">About</a>
              </Link>
              <Link href="#">
                <a className="py-4 px-2 hover:text-green-500 transition duration-300">Contact Us</a>
              </Link>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              {
                !loading && !session && (
                  <>
                    <Link href="/login">
                      <a className="py-2 px-2 font-medium hover:text-gray-500 transition duration-300">Log In</a>
                    </Link>
                    <Link href="/register">
                    <a className="py-2 px-4 bg-teal-dark hover:bg-teal-default text-white font-semibold rounded-lg shadow-md focus:outline-none cursor-pointer">
                      Request Access
                    </a>
                    </Link>
                  </>
                )
              }
              { session && (
                <Link href="/api/auth/signout">
                  <a onClick={e => {
                    e.preventDefault()
                    signOut()
                  }} className="block text-sm px-2 py-4 hover:text-gray-500 transition duration-300">Log Out</a>
                </Link>
              )
              }
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={toggle}>
                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      {/* <!-- mobile menu --> */}
      <div className="hidden mobile-menu px-8" style={{
        display: showMe ? 'block' : 'none'
      }}>
        <ul>
          <li>
            <Link href="#">
              <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a>
            </Link>
          </li>
          {
            !loading && !session && (
              <>
                <li>
                <Link href="/login">
                  <a className="block text-sm px-2 py-4 hover:text-gray-500 transition duration-300">Log In</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a className="block text-sm px-2 py-4 hover:text-gray-500 transition duration-300">Request Access</a>
                </Link>
              </li>
            </>
            )
          }
          <li>
            { session && (
              <Link href="/api/auth/signout">
                <a onClick={e => {
                  e.preventDefault()
                  signOut()
                }} className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Log Out</a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}
