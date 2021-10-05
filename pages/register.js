/* eslint-disable no-unused-vars */
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
  const { redirect } = router.query
  password.current = watch('password', '')

  const registerUser = async ({ companyName, fullName, email, password }) => {
    try {
      const { data } = await axios.post('/api/register', {
        companyName,
        fullName,
        email,
        password
      })
      alert('Successfully registered')
      router.push(redirect || '/login')
    } catch (error) {
      alert('User already exist or invalid details')
    }
  }

  return (
    <>
    <Navbar/>
      <form className="mt-8" onSubmit={handleSubmit(registerUser)}>
        <div className="sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="col-span-3 sm:col-span-2">
                <div className="mt-1 flex rounded-full border text-teal ml-2">
                  <input
                    {...register('companyName', { required: true })}
                    type="text"
                    name="companyName"
                    id="companyName"
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent"
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
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent"
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
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent"
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
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent"
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
                    className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent"
                    placeholder="Repeat password" />
                </div>
                {errors.repeatPassword && <span className="ml-2">{errors.repeatPassword.message}</span>}
              </div>

              <div className="col-span-3 sm:col-span-2 ">
                <div className="flex rounded-md text-teal ml-2 mt-16">
                  <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-teal-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="text-white text-lg">Register</span>
                  </button>
                </div>
              </div>
              <div className="text-center mt-2">
                  Already have an account? <Link href="/login"><a className="text-teal-light"> Sign In</a></Link>
              </div>
          </div>
        </div>
      </form>
    </>
  )
}
