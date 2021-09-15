import { useForm } from "react-hook-form";
import {useRouter} from "next/router";
import { useRef } from "react";
import Image  from "next/image";
import Navbar from "../components/layout/Navbar";
import Head from 'next/head';

export default function Register() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = useRef({});
  const router = useRouter();
  password.current = watch("password", "");

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
    if (result['message'] == 'New user created.') {
        router.push("/home")
    }else {
        router.push("/register")
    }
    
  }

  return (
    // <!-- Login goes here -->
    <>
    <Head>
      <title>MarketPlace - Sign up</title>
    </Head>
    <Navbar />
    <div className="flex h-screen justify-center items-center">
      <div className="container w-full lg:w-full w-7/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 shadow-lg">
        {/* Left Section */}
        <div>     
          <h3 className="ml-8 mt-16 text-2xl">Welcome Onboard!</h3>
          <p className="ml-8 mt-4">Let’s help you linkup and get things done.</p>
          <form className="mt-8" onSubmit={handleSubmit(registerUser)}>
            <div className="sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="mt-1 flex rounded-full border text-teal ml-2">
                      <input
                        {...register("companyName", { required: true })}
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
                        {...register("fullName", { required: true })}
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
                        {...register("email", { required: true })}
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
                        {...register("password", 
                        { required: "You must specify a password",
                          minLength: {
                            value: 4,
                            message: "Password must have at least 4 characters"
                          }
                        })}
                        type="password" 
                        name="password" 
                        id="password" 
                        className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent" 
                        placeholder="******************" />
                    </div>
                    {errors.password && <span className="ml-2">{errors.password.message}</span>}
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <div className="mt-1 flex rounded-full border text-teal ml-2">
                      <input
                        {...register("repeatPassword", 
                        {
                          validate: value => value === password.current || "The passwords do not match"
                        })}
                        type="password" 
                        name="repeatPassword" 
                        id="repeatPassword" 
                        className="p-3 pl-6 rounded rounded-full sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-transparent" 
                        placeholder="******************" />
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
                      Already have an account? <a href="login" className="text-teal-light"> Sign In</a>
                  </div>
              </div>
            </div>
          </form>

        </div>

        {/* Right Section */}
        <div className="my-auto">
            <Image src="/images/undraw_creative_team_r90h.svg" alt="Logo" className="h-8 w-10 mr-2" width="550px" height="500px"/>
        </div>
      </div>
    </div>
    </>
  )
}
