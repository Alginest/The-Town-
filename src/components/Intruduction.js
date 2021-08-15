import React from 'react'
import '../index.css'
import theTown from '../images/the-town-01.jpg'
import { FaBus, FaBicycle, FaCity } from 'react-icons/fa'
import { useGlobalContext } from '../context'
const Intruduction = () => {
  const { closeModal } = useGlobalContext()
  return (
    <section className='intruduction' id='intro' onClick={closeModal}>
      <div className='intro-wrapper'>
        <div className='intro-main'>
          <div className='intro-img'>
            <img src={theTown} alt='the town' />
          </div>
          <div className='intro-info'>
            <h1>Introduction</h1>
            <p>
              The Town is simple CSS template built on Bootstrap v4.1.3 and this
              is a little parallax layout that you can use for your websites.
            </p>
            <p>
              Please tell your friends about our site templatemo. Thank you.
              Curabitur dapibus tristique enim a imperdiet. Etiam tristique sem
              sed condimentum posuere.
            </p>

            <a href=''>Read More</a>
          </div>
        </div>

        <div className='intro-place'>
          <div className='intro-trio'>
            <FaBus className='intro-icon' />
            <h2>Bus traveling across town</h2>
            <p>
              Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida
              nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus.
              Duis imperdiet lacus justo.
            </p>
          </div>
          <div className='intro-trio'>
            <FaBicycle className='intro-icon' />
            <h2>Bike traveling across town</h2>
            <p>
              Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
              Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
              nisi, sed fringilla purus. In hac habitasse platea.
            </p>
          </div>
          <div className='intro-trio'>
            <FaCity className='intro-icon' />
            <h2>Bus traveling across town</h2>
            <p>
              Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc.
              Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus
              nisi, sed fringilla purus. In hac habitasse platea.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intruduction
