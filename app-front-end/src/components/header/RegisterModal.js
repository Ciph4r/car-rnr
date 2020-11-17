import {React , useState} from 'react'
import Modal from 'react-modal'
import '../../css/loginRegisterModal.scss'
import TextField from '@material-ui/core/TextField';



export const RegisterModal = ({openRegister , closeRegisterHandler}) => {

    return (
        <Modal isOpen={openRegister} className='login-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modal-btn' onClick={closeRegisterHandler}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
                <TextField id="standard-basic" label="FirstName" />
                <TextField id="standard-basic" label="LastName" />
                <hr/>
                <TextField id="standard-basic" label="Email" />
                <hr/>
                <TextField id="standard-basic" label="Password" />
            </div>
            <div className='login-btn' onClick = {() =>{}}>
                <h2>Register</h2>
            </div>
        </Modal>
    )

}