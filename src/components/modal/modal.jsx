import React from "react"

const Modal = ({ modalMessage, openModal, setOpenModal }) => {

  return (
    <>
      {openModal === true ?
        <div className="modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button className="close-button" onClick={() => setOpenModal(false)}>&times;</button>
          </div>
        </div> :
        <></>
      }
    </>
  )
}

export default Modal;