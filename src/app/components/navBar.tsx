"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav>
      <div className='mainNav'>
        <Link href={'/'} className='logo'>
        <Image src='/logo1.jfif' alt='logo' width={80} height={80} className='rounded-full'/>
        </Link>
        <div className='mobile-menu'>
          {!isOpen ? (
            <button onClick={ () => setIsOpen(true)} className='togg-btn'><FaBars className='h-5 w-5'/></button>
          ) : (
            <button onClick={ () => setIsOpen(false)} className='togg-btn'><RxCross2 className='h-5 w-5'/></button>
          )}

         {
          isOpen && <div className='scale-in-hor-left side-cont'>
          <ul className='nav-ul'>
            <li>
              <Link href={'/'} className='ul-li'>Home</Link>
            </li>

            <li>
              <Link href={'/project'} className='ul-li'>
              Projects
              </Link>
            </li>

            <li>
              <Link href={'/about'} className='ul-li'>About</Link>
            </li>

            <li>
              <Link href={'/contact'} className='ul-li'>Contact</Link>
            </li>
          </ul>
        </div>
         }

        </div>

        <div className='menu'>
          <ul className='flex space-x-10'>
            <li>
              <Link href={'/'} className='nav-li'>Home</Link>
            </li>

            <li>
              <Link href={'/project'} className='nav-li'>Projects</Link>
            </li>

            <li>
              <Link href={'/about'} className='nav-li'>About</Link>
            </li>

            <li>
              <Link href={'/contact'} className='nav-li'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar