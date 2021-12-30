import Link from 'next/link'

export default function CallToAction () {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 ">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Transform your local business with Monto
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Try Monto, and explore all the tools and services you need to manage, run, and grow your local business.
              </p>
            </div>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-8 inline-flex rounded-md shadow">
                  <Link href="/register">
                    <a className="py-2 px-4 bg-blue-800 text-gray-100 font-semibold rounded-lg shadow-md focus:outline-none cursor-pointer">
                      Request Access
                    </a>
                  </Link>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}
