import React, { useState } from 'react'
import { useSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Navbar from '../../components/layout/Navbar'
import Appointment from '../../components/booking/appointment'

export default function Email ({ email, fullName, userId, events }) {
  const [session] = useSession()
  const link = 'https://www.getmonto.com/'
  const [value] = useState(`${link}booking/${email}`)
  const [copySuccess, setCopySuccess] = useState('copy')
  if (!session) {
    return (
      <>
        <Appointment name={fullName} userId={userId}/>
      </>
    )
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-teal-dark text-center">
        <div className="text-white p-10">
          <h1 className="p-4 md:text-4xl text-2xl">Welcome, {fullName}</h1>
          <p>Copy event link and share with others to stay connected</p>
        </div>
        <div className="flex items-center justify-center w-screen">
          <div className="rounded-full bg-white shadow flex w-4/12 p-2 justify-center">
            <input
              type="text"
              defaultValue={value}
              className="w-full rounded-tl-full rounded-bl-full py-2 px-6"
            />
            <button className="rounded-tr-full rounded-br-full py-2 px-4">
              <p className="font-semibold text-base uppercase">
                <CopyToClipboard text={value}
                    onCopy={() => setCopySuccess('Copied')}>
                    <span>{ copySuccess }</span>
                </CopyToClipboard>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-sm w-8/12 m-auto my-6">
        <h1 className="text-3xl text-gray-700">Events</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
              </th>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
              </th>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State Date
              </th>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
              </th>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendee Name
              </th>
              <th scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendee Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
           {events.map((event) => (
            <tr key={event.id}>
              <td className="px-6 py-4 whitespace-nowrap">{event.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.startDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.endDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.attendee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.attendee.email}</td>
            </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ query }) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({ where: query })
  const email = user.email
  const fullName = user.fullName
  const userId = user.id

  const events = await prisma.event.findMany({
    where: {
      userId: userId
    },
    include: {
      attendee: { select: { name: true, email: true } }
    }
  })
  return {
    props: { email, fullName, userId, events: JSON.parse(JSON.stringify(events)) }
  }
}
