import React from 'react'
import NavBar from '../components/navBar'
import Image from 'next/image'

const page = () => {
  return (
    <section className='main-abt'>
      <NavBar/>
      <div className='main-abt-2'>
      <div className='abt-img'>
        <Image src={'/OIP.jfif'} alt='about image' width={500} height={500} className='rounded-md'/>
      </div>
      <div>
        <h2 className='abt-heading'>About ME</h2>
        <p className='abt-p'>{
        "Hello! I'm a web developer who has learned HTML, CSS, TypeScript, and Next.js. While I'm still working on mastering these technologies, I'm passionate about building functional and visually appealing websites. I'm always eager to take on new challenges and learn more along the way. I'm excited to continue growing and expanding my skills as I work on new projects."}
        </p>
        <h3 className='skl-heading'>Skills</h3>
        <ul className='skil-li'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Next js</li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default page