'use client'
import Image from 'next/image'
import MobileNav from './MobileNav'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='h-16 flex items-center justify-between border-b border-b-brandPink paddings'>
      {/* Logo */}
      <div>
        <Link href='/'>
          <Image
            src='/main-logo-black.svg'
            alt='black main logo'
            width={133}
            height={33}
            className='md:h-9 md:w-40'
          />
        </Link>
      </div>
      {/* DESKTOP MENU */}
      <div className='hidden md:flex md:items-center gap-4'>
        <div className='flex items-center gap-2 cursor-pointer px-1 lg:p-2 lg:text-base bg-brandYellow rounded-md md:absolute top-1 right-3 lg:static'>
          <BsFillPhoneVibrateFill className='text-brandPink' />
          <span className='text-sm font-semibold text-brandPink'>
            123 456 778
          </span>
        </div>
        {NavLinks.map((nav) => (
          <Link
            href={nav.path}
            key={nav.key}
            className='hover:text-brandPink transition duration-300 capitalize font-medium'
          >
            {nav.label}
          </Link>
        ))}
        <Link
          href='/contact'
          className='flex items-center py-1 px-3 border-2 border-brandPink text-brandPink hover:bg-brandPink hover:text-white transition duration-300 rounded-md font-semibold capitalize '
        >
          Corporate enquiry
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div className='md:hidden'>
        <MobileNav />
      </div>
    </div>
  )
}
export default Navbar
