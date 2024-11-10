import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='main-footer'>
      <div>
        <ul className='footer-ul'>
          <li><Link href={'/'}>Home</Link></li>
          <li><Link href={'/project'}>projects</Link></li>
          <li><Link href={'/about'}>About</Link></li>
          <li><Link href={'/contact'}>Contct</Link></li>
        </ul>
      </div>
      <p className='copyright'>&copy;2024 All Rights Reserved by Kashif Ali</p>
    </div>
  )
}

export default Footer