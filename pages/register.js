import { useForm } from 'react-hook-form'
//  import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Navbar from '../components/layout/Navbar'
export default function Register () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  //  const router = useRouter()

  const [media, setMedia] = useState('')

  const imageUpload = async () => {
    const data = new FormData()
    data.append('file', media)
    data.append('upload_preset', 'marketplace_uploads')
    const res = await fetch('https://api.cloudinary.com/v1_1/afyacy/image/upload', {
      method: 'POST',
      body: data
    })
    const res2 = await res.json()
    return res2.url
  }

  const registerUser = async (data) => {
    try {
      const mediaUrl = await imageUpload()
      await axios.post('api/register', { mediaUrl, data })
      //  alert('sucess')
      //  router.push('login')
    } catch (error) {
      alert('User already exist or invalid details')
    }
  }

  return (
    <>
    <Navbar/>
      <form className="mt-8 md:w-5/12 m-auto" onSubmit={handleSubmit(registerUser)} encType="multipart/form-data">
        <div className="sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Full Name</label>
                <input
                  {...register('fullName', { required: true })}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                  placeholder="John Doe"
                />
                {errors.fullName && <span className="ml-2 text-red-400">This field is required</span>}
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Company Name</label>
                  <input
                    {...register('companyName', { required: true })}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                    placeholder="Vestir Mart Ent"
                  />
                  {errors.companyName && <span className="ml-2 text-red-400">This field is required</span>}
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Password</label>
                  <input
                    {...register('password', {
                      required: 'You must specify a password',
                      minLength: {
                        message: 'Password must have at least 4 characters'
                      }
                    })}
                    type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="******"/>
                    {errors.password && <span className="ml-2 text-red-400">{errors.password.message}</span>}
              </div>
              <div>
                <label htmlFor="email-adress-icon" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Repeat Password</label>
                <input
                  {...register('repeatPassword', {
                    validate: value => value === password.current || 'The passwords do not match'
                  })}
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                  placeholder="******"
                />
                {errors.repeatPassword && <span className="ml-2 text-red-400">{errors.repeatPassword.message}</span>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">What do you do?</label>
                <select
                  name="category"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                  {...register('category', { required: true })}>
                  <option>Choose a category</option>
                  <option value="1">Salon</option>
                  <option value="2">Plumber</option>
                  <option value="3">Electrician</option>
                  <option value="14">Painter</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Mobile No.</label>
                  <input
                    {...register('mobile', { required: true })}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" placeholder="0501431357"/>
                    {errors.mobile && <span className="ml-2 text-red-400">{errors.mobile.message}</span>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Picture</label>
                <fieldset className="w-full space-y-1 border-2 border-dashed rounded-md">
                <div className="flex">
                  <input
                    accept="image/*"
                    onChange={
                      (e) => {
                        setMedia(e.target.files[0])
                      }
                    }
                    type="file"
                    className="px-8 py-12"/>
                  <img src={media ? URL.createObjectURL(media) : '' } className="w-20 h-20 rounded-full my-auto"/>
                </div>
              </fieldset>
              </div>
              <div className="flex">
                <div className="mr-20">
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Town</label>
                  <input
                    {...register('town', { required: true })}
                    type="text"
                    placeholder="Asokwa"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5" />
                    {errors.town && <span className="ml-2 text-red-400">{errors.town.message}</span>}
                </div>
                <div className="mr-20">
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">City</label>
                  <input
                    {...register('city', { required: true })}
                    type="text"
                    placeholder="Kumasi"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"/>
                    {errors.city && <span className="ml-2 text-red-400">{errors.city.message}</span>}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Region</label>
                  <select
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                    {...register('region', { required: true })}>
                    <option>Choose a category</option>
                    <option value="1">Ahofo Region</option>
                    <option value="2">Ashanti Region</option>
                    <option value="3">Bono East Region</option>
                    <option value="4">Bono Region</option>
                    <option value="5">Central Region</option>
                    <option value="6">Eastern Region</option>
                    <option value="7">Greater Accra Region</option>
                    <option value="8">North East Region</option>
                    <option value="9">Northern Region</option>
                    <option value="10">Oti Region</option>
                    <option value="11">Savannah Region</option>
                    <option value="12">Upper East Region</option>
                    <option value="13">Upper West Region</option>
                    <option value="14">Volta Region</option>
                    <option value="15">Western North Region</option>
                    <option value="16">Western Region</option>
                  </select>
                  {errors.region && <span className="ml-2 text-red-400">{errors.region.message}</span>}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Description</label>
                <textarea
                  placeholder="I have been doing this for a number of
                  years for many people with exceptional
                  experience in the industry I do great with
                  every job I get..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-green-light focus:border-transparent block w-full p-2.5"
                  rows={4}></textarea>
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
