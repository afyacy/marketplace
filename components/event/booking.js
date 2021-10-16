import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Booking () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const router = useRouter()
  const onSubmit = async (data) => {
    try {
      await axios.post('/api/booking', {
        data
      })
      alert('Success')
      router.push('/booking/successBooking')
    } catch (error) {
      alert(error)
    }
    console.log(data)
  }
  return (
    <div>
      <form className="mt-8 md:w-5/12 m-auto" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="ml-9 text-xl">Book an appointment</h1>
          <div className="sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

            <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter your full name" />
                </div>
                {errors.name && <span className="ml-2">This field is required</span>}
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('email', { required: true })}
                    type="text"
                    name="email"
                    id="email"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter your email" />
                </div>
                {errors.email && <span className="ml-2">This field is required</span>}
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                  {...register('eventName', { required: true })}
                    type="text"
                    name="eventName"
                    id="eventName"
                    className="p-3 pl-6 rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter event name. Eg. Fix hair" />
                </div>
                {errors.eventName && <span className="ml-2">This field is required</span>}
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('companyEmail', { required: true })}
                    type="text"
                    name="companyEmail"
                    id="companyEmail"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter company email" />
                </div>
                {errors.companyEmail && <span className="ml-2">This field is required</span>}
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <span>
                    <label className="ml-2">Start datetime:</label>
                    <input
                      type="datetime-local"
                      name="startDate"
                      min={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)}
                      className="border px-1 mr-3"
                      {...register('startDate', { required: true })}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <label className="justify-self-end">End datetime:</label>
                      <input
                        type="datetime-local"
                        name="endDate"
                        min={new Date().toISOString().substring(0, (new Date().toISOString().indexOf('T') | 0) + 6 | 0)}
                        className="border px-1 mr-3"
                        {...register('endDate', { required: true })}
                      />
                  </span>
                </div>
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
  )
}
