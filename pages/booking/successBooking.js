import React from 'react'
import Image from 'next/image'

export default function SuccessBooking () {
  return (
    <>
      <small className="text-gray-400 p-3 bg-white">
            Thanks for choosing Monto
            <Image src='/images/logo.png' alt="Logo" className="h-8 w-10 mr-2" width="15px" height="15px"/>
      </small>
      <div className="text-center m-auto md:w-6/12 rounded overflow-hidden shadow-lg">
        <Image src='/images/success-icon.png' alt="Logo" className="" width="150px" height="150px"/>
        <p className="p-10 text-2xl text-gray-600">Your appointment has been booked Successfully</p>
      </div>
    </>
  )
}
