import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div class="max-w-7xl mt-10 mx-auto block lg:flex px-7">
        <div class="w-full lg:w-1/2">
          <div class="font-semibold text-4xl md:text-6xl text-gray-900 mb-8">
              <h2 class="max-w-[450px] text-5xl">
              All you need to manage and grow your local business in Africa.
              </h2>
          </div>
          <p class="text-gray-500 mb-11 text-2xl font-light">
            Organize your business with automated online booking, reminders, payments and more—from one easy-to-use platform.
          </p>
          <a class="py-3 px-4 bg-blue-800 text-gray-100 font-semibold rounded-lg shadow-md focus:outline-none cursor-pointer">
            Request Access
          </a>
        </div>
        <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:px-24">
          <Image src='/images/header.png' alt="Header Image" width="443px" height="401px"/>
        </div>
      </div>
    </>
  )
}
