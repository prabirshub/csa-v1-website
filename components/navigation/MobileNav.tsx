'use client'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { NavLinks } from '@/constants'
import Link from 'next/link'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='text-2xl cursor-pointer'>
      {!open ? (
        <FiMenu className='' onClick={() => setOpen(true)} />
      ) : (
        <IoMdClose onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className='bg-brandYellow text-3xl font-semibold absolute left-0 top-24 h-[calc(100vh-6rem)] flex justify-center items-center flex-col w-full gap-8 z-10 uppercase'>
          {NavLinks.map((nav) => (
            <Link
              href={nav.path}
              key={nav.key}
              className='text-brandPink hover:bg-gray-50 hover:text-brandPink w-[95%] py-1 text-center transition duration-300'
              onClick={() => setOpen(false)}
            >
              {nav.label}
            </Link>
          ))}
          <div
            className='text-brandPink flex items-center justify-center gap-4 border-y border-y-yellow-600 w-[80%] py-4'
            onClick={() => setOpen(false)}
          >
            <Link href='/'>
              <FaLinkedin className='hover:text-white transition duration-300' />
            </Link>
            <Link href='/'>
              <FaInstagram className='hover:text-white transition duration-300' />
            </Link>
            <Link href='/'>
              <FaFacebookSquare className='hover:text-white transition duration-300' />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
export default MobileNav
