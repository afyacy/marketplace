import React, { useState } from 'react'
import { useSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Navbar from '../../components/layout/Navbar'
import Appointment from '../../components/booking/appointment'

export default function Email ({ email, fullName }) {
  const [session] = useSession()
  const link = 'https://www.getmonto.com/'
  const [value] = useState(`${link}booking/${email}`)
  const [copySuccess, setCopySuccess] = useState('copy')

  if (!session) {
    return (
      <>
        <Appointment name={fullName}/>
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

        <button>See events</button>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ query }) {
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({ where: query })
  const email = user.email
  const fullName = user.fullName
  return {
    props: { email, fullName }
  }
}
