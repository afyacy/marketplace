import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap p-6">
        <a>
          <Image src='/images/logo.svg' alt="Logo" className="h-8 w-10 mr-2" width="132px" height="36px"/>
        </a>
        <a class="py-2 px-4 bg-blue-800 text-gray-100 font-semibold rounded-lg shadow-md focus:outline-none cursor-pointer">
          Request Access
        </a>
      </nav>
    </>
  )
}
