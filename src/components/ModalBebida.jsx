import React from 'react'
import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../Hooks/useBebibas'

const ModalBebida = () => {

    const {handleModalClick, openModal} = useBebidas()

  return (
    <Modal show={openModal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo de modal
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida