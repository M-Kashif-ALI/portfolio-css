import React from 'react'
import NavBar from '../components/navBar'

const page = () => {
  return (
    <div className='main-cont'>
      <NavBar />

      <div className='content'>
        <h2 className='heading-2'>{`let's work together`}</h2>
        <p className='cont-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui dolor atque molestias ducimus blanditiis ex delectus aliquam natus nostrum dolore eveniet..</p>

        <div className='form-cont'>

          <div>
            <label htmlFor="name" className='lab'>Name: </label>
            <input type="text" name='name' id='name' className='inp' />
          </div>

          <div>
            <label htmlFor="name" className='lab'>Email: </label>
            <input type="text" name='name' id='name' className='inp' />
          </div>
        </div>

        <div className='text-center'>
        <div>
          <label htmlFor="phone" className='lab'>Phone:</label>
          <input type="text" name="phone" id="phone" className='inp' />
          </div>
          </div>

          <div className='cont-textarea'>
            <textarea className='text' placeholder='Message'></textarea>
          </div>

          <div className='cont-btn'>
          <button type='submit' className='send'>Send</button>
          </div>


      </div>
    </div>
  )
}

export default page