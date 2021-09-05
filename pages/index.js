import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";


export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const registerUser = async (data) => {
    const response = await fetch('/api/register', {
        body: JSON.stringify({
          companyName: data['companyName'],
          fullName: data['fullName'],
          email: data['email'],
          password: data['password'],
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    const result = await response.json()
  }

  return (

          <form onSubmit={handleSubmit(registerUser)}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="" htmlFor="companyName">
                Company name
              </label>
              <input 
                {...register("companyName", { required: true })}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                id="companyName" 
                name="companyName" 
                type="text" 
                placeholder="company name" />
                {errors.companyName && <span>This field is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Enter your full name
              </label>
              <input 
                  {...register("fullName", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="fullName"
                  name='fullName'
                  type="text" 
                  placeholder="full name"/>
                  {errors.fullName && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Enter your email
              </label>
              <input
                  {...register("email", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="email" 
                  name="email"
                  type="text" 
                  placeholder="email" />
                  {errors.email && <span>This field is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                  {...register("password", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="password"
                  name="password"
                  type="password" 
                  placeholder="******************"/>
                  {errors.password && <span>This field is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input 
                  {...register("confirmPassword", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  type="password" 
                  placeholder="******************"/>
                  {errors.confirmPassword && <span>This field is required</span>}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </div>
          </form>
  )
}
