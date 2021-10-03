
import Image from 'next/image'


export default function Integrations() {
  return (
    <div className="py-12 bg-blue-50 mt-24 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            It’s all about connecting 🤝
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Integrate Monto with calendars, social media, payment providers, and a range of tools that help you manage and grow your local business.
          </p>
        </div>

        <div className="mt-10 pb-8">
          <dl className="flex space-y-10 md:space-y-0 md:grid md:grid-cols-6 md:gap-x-8 md:gap-y-10 justify-center">
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/google-calendar-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/outlook-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/facebook-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/instagram-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/flutterwave-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
            <dt className="items-center justify-center">
              <div className="col-span-1 justify-center flex md:col-span-2 lg:col-span-1">
                <Image src="/images/landing-page/paystack-logo.svg" alt="Header Image" width="100%" height="100%"/>
              </div>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  )
}