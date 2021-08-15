import React, { useState, useEffect } from 'react'
import '../index.css'
import { FaAirbnb, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import images from '../data'
import { useGlobalContext } from '../context'
const OurWork = () => {
  const { openModal, closeModal } = useGlobalContext()
  const [value, setValue] = useState(0)
  const { imageOne, text } = images[value]
  const checkNumber = (number) => {
    let lastIndex = images.length - 1
    if (number < 0) {
      return lastIndex
    }
    if (number > lastIndex) {
      return 0
    }
    return number
  }
  const nextSlide = () => {
    setValue((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const prevSlide = () => {
    setValue((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  useEffect(() => {
    let slide = setInterval(() => {
      setValue((index) => {
        let newIndex = index + 1
        return checkNumber(newIndex)
      })
    }, 3000)
    return () => clearInterval(slide)
  }, [value])
  return (
    <section className='work-sec' id='work'>
      <div className='work-wrapper'>
        <h1 className='text-center' onClick={closeModal}>
          Our Work
        </h1>
        <div className='work-info-div' onClick={closeModal}>
          <p className='text-center'>
            "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh,
            ut porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia."
          </p>
        </div>
        <div className='work-slider'>
          <div className='slider-uno' onClick={closeModal}>
            <FaAirbnb className='slider-icon' />
            <h2>Host your event</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              aut inventore repellendus adipisci illo excepturi, natus deleniti
              atque laudantium autem recusandae dolorum! Quaerat deleniti
              molestiae illo blanditiis? Nostrum obcaecati odio accusamus
              perspiciatis, rerum, excepturi assumenda ipsum neque molestias
              incidunt sunt.
            </p>
          </div>
          <div className='slider-duo'>
            <div className='slider-border'>
              <button className='button-left' onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <div className='slide-image' onClick={openModal}>
                <img src={imageOne} alt={text} />
                <p>{text}</p>
              </div>
              <button className='button-left' onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
