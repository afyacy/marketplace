import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Navbar () {
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
    <nav className="bg-white shadow-lg">
      <div className="max mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
                <a href="#" className="flex items-center py-4 px-2">
                  <Image src='images/logo.png' alt="Logo" className="h-8 w-10 mr-2" width="35px" height="30px"/>
                  <span className="font-semibold text-gray-500 text-lg">MarketPlace</span>
                </a>
              </div>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-2">
              <a href="" className="py-4 px-2 text-green-500 border-b-4 border-teal-light font-semibold ">Home</a>
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
              <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              <a href="login" className="py-2 px-2 font-medium text-white rounded bg-teal-light hover:text-white transition duration-300">Log In</a>
              <a href="register" className="py-2 px-2 font-medium bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
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
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
          <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
          <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
          <li><a href="login" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Log In</a></li>
          <li><a href="register" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  </>
  )
}
