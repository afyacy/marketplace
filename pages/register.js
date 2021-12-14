import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import React, { useRef } from 'react'
import Navbar from '../components/layout/Navbar'
export default function Register () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = useRef({})
  const router = useRouter()
  password.current = watch('password', '')
  const registerUser = async (data) => {
    try {
      await axios.post('api/register', data)
      alert('sucess')
      router.push('login')
    } catch (error) {
      alert('User already exist or invalid details')
    }
  }

  return (
    <>
    <Navbar/>
      <form className="mt-8 md:w-5/12 m-auto" onSubmit={handleSubmit(registerUser)}>
        <div className="sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Full Name</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="John Doe"/>
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Company Name</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="Vestir Mart Ent"/>
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
                  <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="******"/>
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Repeat Password</label>
                  <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="******"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">What do you do?</label>
                <select name="category" className="text-gray-900 text-sm w-full p-2.5 bg-gray-50 border border-gray-300">
                  <option>Choose a category</option>
                  <option value="1">Salon</option>
                  <option value="2">Plumber</option>
                  <option value="3">Electrician</option>
                  <option value="14">Painter</option>
                </select>
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Last Name</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className='fa fa-user'></i>
                  </div>
                  <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full pl-10 p-2.5" placeholder="name@gmail.com"/>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Mobile No.</label>
                  <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="0501431357"/>
              </div>
              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('companyName', { required: true })}
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent"
                    placeholder="Enter company name" />
                </div>
                {errors.companyName && <span className="ml-2">This field is required</span>}
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('fullName', { required: true })}
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter your full name" />
                </div>
                {errors.fullName && <span className="ml-2">This field is required</span>}
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
                    {...register('password',
                      {
                        required: 'You must specify a password',
                        minLength: {
                          value: 4,
                          message: 'Password must have at least 4 characters'
                        }
                      })}
                    type="password"
                    name="password"
                    id="password"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Enter password" />
                </div>
                {errors.password && <span className="ml-2">{errors.password.message}</span>}
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('repeatPassword',
                      {
                        validate: value => value === password.current || 'The passwords do not match'
                      })}
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-1 focus:ring-teal-light focus:border-transparent"
                    placeholder="Repeat password" />
                </div>
                {errors.repeatPassword && <span className="ml-2">{errors.repeatPassword.message}</span>}
              </div>

              <div className="col-span-3 sm:col-span-2 ">
                <div className="flex rounded-md text-teal ml-2 mt-16">
                  <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium bg-green-light hover:bg-green-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="text-white text-lg">Register</span>
                  </button>
                </div>
              </div>
              <div className="text-center mt-2">
                  Already have an account? <Link href="/login"><a className="hover:text-black text-green-light"> Sign In</a></Link>
              </div>
          </div>
        </div>
      </form>
    </>
  )
}
