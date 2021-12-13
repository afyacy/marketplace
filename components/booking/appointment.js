import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Appointment ({ name, userId }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const router = useRouter()
  const onSubmit = async ({ name, email, title, location, startDate, endDate }) => {
    try {
      await axios.post('/api/booking', {
        name, email, title, location, startDate, endDate, userId
      })
      router.push('/booking/successBooking')
    } catch (error) {
      alert('Booking failed')
    }
  }
  return (
    <div>
      <small className="text-gray-400 p-3 bg-white">
            Thanks for choosing Monto
            <Image src='/images/logo.png' alt="Logo" className="h-8 w-10 mr-2" width="15px" height="15px"/>
      </small>
      <div className="flex m-auto md:w-6/12 rounded overflow-hidden shadow-lg">
        <div className="flex-1 my-auto">
          <div className="p-3 text-white text-center">
              <h1 className="text-3xl text-teal-dark">Schedule an Appointment</h1>
              <p className="text-teal-dark">with</p>
              <h3 className="text-xl text-teal-dark">{name}</h3>
          </div>
        </div>
        <div className="flex-1 px-6 pt-4 pb-2">
          <form className="mt-8 m-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

              <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                    Full Name
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      name="name"
                      id="name"
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder="Jane Doe" />
                  </div>
                  {errors.name && <span className="ml-2">This field is required</span>}
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                    Email
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                      {...register('email', { required: true })}
                      type="text"
                      name="email"
                      id="email"
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder="jane@gmail.com" />
                  </div>
                  {errors.email && <span className="ml-2">This field is required</span>}
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                    Title
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                    {...register('title', { required: true })}
                      type="text"
                      name="title"
                      id="title"
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder="Makeup for Bride" />
                  </div>
                  {errors.title && <span className="ml-2">This field is required</span>}
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                    Location
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                      {...register('location', { required: true })}
                      type="text"
                      name="location"
                      id="location"
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder="Location" />
                  </div>
                  {errors.location && <span className="ml-2">This field is required</span>}
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                  Start date & time:
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                      {...register('startDate', { required: true })}
                      type="datetime-local"
                      name="startDate"
                      id="startDate"
                      min={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)}
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)} />
                  </div>
                  {errors.startDate && <span className="ml-2">This field is required</span>}
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 ml-2">
                    End date & time:
                  </label>
                  <div className="mt-1 flex border text-teal ml-2">
                    <input
                      {...register('endDate', { required: true })}
                      type="datetime-local"
                      name="endDate"
                      id="endDate"
                      min={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)}
                      className="p-3 pl-6 sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                      placeholder={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)} />
                  </div>
                  {errors.endDate && <span className="ml-2">This field is required</span>}
                </div>

                <div className="col-span-3 sm:col-span-2 ">
                  <div className="flex text-teal ml-2 mt-16">
                    <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium bg-teal-dark hover:bg-teal-default text-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-none">
                      <span className="text-white  text-lg">Submit</span>
                    </button>
                  </div>
                </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
