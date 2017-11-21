import React from 'react'
import Modal from 'react-modal'

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding               : '6rem 8rem',
    borderRadius          : '4px',
    background            : 'rgb(15, 15, 15)',
    border                : 'none',
    textAlign             : 'center'
  }
}

const TaskModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        contentLabel="todo list"
        style={customStyle}
        overlayClassName="Overlay"
        onRequestClose={props.closeModal}
    >
        <h2>{props.selectedTask}</h2>
        <button 
            onClick={props.closeModal} 
            className="btn btn-rounded btn-outlined orange-btn"
        >
            Close
        </button>
    </Modal>
)

export default TaskModal;