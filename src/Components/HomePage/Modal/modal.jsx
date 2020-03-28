import React from 'react'
import './modal.scss'

const Modal = ({handleChange,handleSubmit, loading}) => {
    return(
        <>
        <i
        data-toggle='modal'
        data-target='#exampleModal'
        data-whatever='@mdo'
        style={{ color: 'white' }}
        className='fa fa-comment-dots icon-pesan m-4'
        ></i>
        {/* modal */}
        <div
        className='modal fade'
        id='exampleModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        >
        <div className='modal-dialog modal-message' role='document'>
            <div className='modal-content'>
            <div className='modal-header'>
                <h5 className='modal-title ' id='exampleModalLabel'>
                Send your opinions, criticisms or questions to me.
                </h5>
                <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                >
                <span aria-hidden='true'>×</span>
                </button>
            </div>
            <div className='modal-body'>
                <form>
                <div className='form-group'>
                    <label htmlFor='message-text' className='col-form-label'>
                    Message :
                    </label>
                    <textarea
                    onChange={handleChange}
                    className='form-control'
                    name='message'
                    id='message-text'
                    defaultValue={''}
                    required
                    />
                </div>
                </form>
            </div>
            <div className='modal-footer'>
                <button
                style={{background:'#095471', color:'white'}}
                onClick={handleSubmit}
                type='submit'
                className='btn'
                >
                {loading === true ? 'loading...' : 'kirim'}
                </button>
            </div>
            <i className='m-2' style={{ color: 'red', fontSize: '10px' }}>
                *nama pengirim pesan tidak akan di ketahui oleh saya :-)
            </i>
            </div>
        </div>
        </div>
        </>
    )
}
export default Modal