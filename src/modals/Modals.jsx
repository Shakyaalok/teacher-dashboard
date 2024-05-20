import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'


const BackDrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose} />
  }
  


const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modals = (props) => {
 const PortalElement = document.getElementById('overlays')

  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </>
  )
}

export default Modals
