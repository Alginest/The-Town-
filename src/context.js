import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const toggleNav = () => {
    setShowNav(!showNav)
  }
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <AppContext.Provider
      value={{ toggleNav, showNav, showModal, openModal, closeModal }}
    >
      {children}
    </AppContext.Provider>
  )
}

//hooke

export const useGlobalContext = () => {
  return useContext(AppContext)
}
