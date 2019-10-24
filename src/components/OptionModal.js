import React from 'react'
import Modal from 'react-modal'



const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleSelectedOption}
        contentLabel="Selected Option"
        appElement={document.getElementById('app')} //to make it accessible for screen readers
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleSelectedOption}>Got it!</button>
    </Modal>
)


export default OptionModal