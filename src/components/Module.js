import React, { useState } from 'react'
import '../index.css'
import { FaArrowLeft, FaArrowRight, FaWindowClose } from 'react-icons/fa'
import moduleData from '../ModuleData'
import { useGlobalContext } from '../context'
import { useEffect } from 'react/cjs/react.development'
const Module = () => {
  const { showModal, closeModal } = useGlobalContext()
  const [value, setValue] = useState(0)
  const { text, imageOne } = moduleData[value]
  const innerWidth = window.innerWidth >= 1600
  const checkNumber = (number) => {
    let lastIndex = moduleData.length - 1
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
  const backgroundBlack = () => {
    if (showModal && innerWidth) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }
  const closeWidth = () => {
    if (window.innerWidth <= 1600) {
      closeModal()
    }
  }
  useEffect(() => {
    backgroundBlack()
    closeWidth()
  }, [showModal, innerWidth])

  return (
    <>
      {showModal && (
        <div className='module'>
          <div className='module-div'>
            <button>
              <FaArrowLeft onClick={prevSlide} />
            </button>
            <div className='module-img'>
              <img src={imageOne} alt={text} />
            </div>
            <button>
              <FaArrowRight onClick={nextSlide} />
            </button>
          </div>
          <FaWindowClose className='close-btn' onClick={closeModal} />
        </div>
      )}
    </>
  )
}

export default Module
