import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, DeviceMobileIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Manage all client appointments',
    description:
      'Manage all of your bookings through one online appointment scheduler. Seamless automation enables your business to run like clockwork.',
    icon: AnnotationIcon,
  },
  {
    name: 'Build your online presence',
    description:
      'Create your online presence so the right people will find your business—no experience needed.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Cut back on admin',
    description:
      'Save time with our all-in-one platform for managing your local business-so you can focus on the important things.',
    icon: LightningBoltIcon,
  },
  {
    name: 'All in one place, on any device',
    description:
      'Run your business from anywhere with one dashboard, available on desktop or mobile.',
    icon: DeviceMobileIcon,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Transform your local business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Monto is your all-in-one platform to bring your local business online.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gray-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-500">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}