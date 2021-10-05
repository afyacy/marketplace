import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <a>
          <Image src='/images/logo.svg' alt="Logo" className="h-8 w-10 mr-2" width="132px" height="36px"/>
        </a>
        <div>
          <Link href="/login">
            <a className="py-2 px-4 text-gray-800 font-semibold cursor-pointer mx-4">
              Login
            </a>
          </Link>
          <Link href="/register">
            <a className="py-2 px-4 bg-blue-800 text-gray-100 font-semibold rounded-lg shadow-md focus:outline-none cursor-pointer">
              Request Access
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
