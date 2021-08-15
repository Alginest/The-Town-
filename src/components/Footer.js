import React from 'react'
import '../index.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id='contact'>
      <div className='contact-wrapper'>
        <div className='contact-text'>
          <h1>Contact Us</h1>
          <div className='underline'></div>
          <div className='underline-thick'></div>
          <p>
            Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt
            dui, non tempus sem turpis vitae lorem. Maecenas eget odio in sapien
            ultrices viverra vitae vel leo. Curabitur at elit eu risus pharetra
            pellentesque at at velit.
          </p>
        </div>
        <div className='contact-info'>
          <div className='contact-forth'>
            <FaPhone className='contact-icon' />
            <a
              href='tel:+
010-020-0340'
            >
              010-020-0340
            </a>
          </div>
          <div className='contact-forth'>
            <FaMapMarkerAlt className='contact-icon' />
            <p>Location on Maps</p>
          </div>
          <div className='contact-forth'>
            <FaEnvelope className='contact-icon' />
            <a href='mailto:info@company.co'>info@company.co</a>
          </div>
          <div className='contact-input'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Subscribe your email'
            />
            <button type='submit'>Submit</button>
          </div>
        </div>
        <p className='text-center'>
          Copyright © 2019 Company Name - Design: Ado Durak
        </p>
      </div>
    </footer>
  )
}

export default Footer
