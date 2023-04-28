import React from 'react';
import ReactModal from 'react-modal';
import './style.css'

const ModalForm = ({children, trigger, triggerClassName, onSubmitFunc, isOpen, handleOpenModal, handleCloseModal,
                       submitButtonName, cancelButtonName}) => {
    ReactModal.setAppElement('#app');
    return (
        <div>
            <button className={triggerClassName} onClick={handleOpenModal}>{trigger}</button>
            <ReactModal
                isOpen={isOpen}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.50)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        width: '500px'
                    },
                }}
            >
                <form onSubmit={onSubmitFunc}>
                    {children}
                    <button className={"margintopBottom button-aqua text-center width-75 max-width-75"}>{submitButtonName}</button>
                    <button className={"margintopBottom button-wrapper text-center width-100 cancelBtn"} onClick={handleCloseModal}>{cancelButtonName}</button>
                </form>
            </ReactModal>
        </div>
    );
}

export default ModalForm;
