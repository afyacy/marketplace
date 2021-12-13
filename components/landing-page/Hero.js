import Image from 'next/image'
import Link from 'next/link'

export default function Hero () {
  return (
    <>
      <div className="max-w-7xl mt-10 mx-auto block lg:flex px-7">
        <div className="w-full lg:w-1/2">
          <div className="font-semibold text-4xl md:text-6xl text-gray-900 mb-8">
              <h2 className="max-w-[450px] text-5xl text-green-light">
              All you need to manage and grow your local business in Africa.
              </h2>
          </div>
          <p className="text-gray-500 mb-11 text-2xl font-light">
            Organize your business with automated online booking, reminders, payments and more—from one easy-to-use platform.
          </p>
          <Link href="/register">
            <a className="py-3 px-4 border-2 border-green-light text-green-light rounded-full focus:outline-none cursor-pointer">
              Request Access
            </a>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:px-24">
          <Image src='/images/header.png' alt="Header Image" width="443px" height="401px"/>
        </div>
      </div>
    </>
  )
}
