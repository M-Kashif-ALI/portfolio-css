import React from 'react'
import { projects } from '../components/data'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/navBar'

const page = () => {
  return (
    <div className='bg-slate-950'>
      <NavBar />
      <div> <h1 className='projects-heading'>Projects</h1>

        <div className='projects'>
          {projects.map((projects) => {
            return <div key={projects.id} className='pjt-hov'>
              <Link href={projects.url} target='_blank'>
                <Image src={projects.image} alt='projects' width={300} height={200} className='pjt-img'/>
              </Link>

            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default page