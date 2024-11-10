"use client"

import Image from 'next/image'
import React from 'react'

import { TypeAnimation } from 'react-type-animation'



const HeroSection = () => {
  return (
    <section>
      <div className='sec'>
        <div className='hero-content'>
          <h1 className='hreo-head'>
            <span className='h1-span'>
              Hello, I am {' '} <br />
            </span>
            <TypeAnimation
              sequence={[
                'Kashif ALi',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}  
              repeat={Infinity}
            />

          </h1>
          <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit ullam quidem doloribus tempore ut ipsum cumque laboriosam odio, dolorem quod, tempora, minus nobis cum eius atque modi quos? Doloremque.</p>
          <div>
            <button className='hire-btn'>Hire me</button>

            <button className='Cv-btn'>
              <span className='cv-span'>
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="img-div">
          <div className='img-div-2'>
            <Image src="/main.png" alt='pic' height={300} width={300} className='img-styl' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection