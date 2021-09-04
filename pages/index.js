import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";


export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const registerUser = async (data) => {
    const res = await fetch('/api/register', {
        body: JSON.stringify({
          cname: data['cname'],
          fname: data['fname'],
          email: data['email'],
          password: data['password'],
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    const result = await res.json()
    console.log(result);
  }

  return (

          <form onSubmit={handleSubmit(registerUser)}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="" htmlFor="username">
                Company name
              </label>
              <input 
                {...register("cname", { required: true })}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                id="cname" 
                name="cname" 
                type="text" 
                placeholder="company name" />
                {errors.cname && <span>This field is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Enter your full name
              </label>
              <input 
                  {...register("fname", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="fname"
                  name='fname'
                  type="text" 
                  placeholder="full name"/>
                  {errors.fname && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input 
                  {...register("cpassword", { required: true })}
                  className="border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline" 
                  id="cpassword" 
                  name="cpassword"
                  type="password" 
                  placeholder="******************"/>
                  {errors.cpassword && <span>This field is required</span>}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </div>
          </form>
  )
}
