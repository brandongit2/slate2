import React, {useContext} from "react"

import type {FC} from "react"

import ModalContext from "./ModalContext"

const Modal: FC = ({children}) => {
  const {setIsModalVisible} = useContext(ModalContext)

  function handleClick() {
    setIsModalVisible(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50" onClick={handleClick} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6">
        {children}
      </div>
    </>
  )
}

export default Modal
