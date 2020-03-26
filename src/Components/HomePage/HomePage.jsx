import React from 'react'
import './HomePage.scss'
import Navbar from '../Navbar/Navbar'


const HomePage = ({handleChange, handleSubmit, loading, alert}) => {
    return (
        <>
        <Navbar />
        <div className='container-fluid page d-flex align-items-center  '>
            <div className='row'>
            <div className='col-md-12 col-text d-flex justify-content-center'>
                <div className='card bg-transparent card-text'>
                <h1>I'm Frontend Developer.</h1>
                <div className='card bg-tranparent'></div>
                <p className='mt-3' style={{ color: 'white' }}>
                    {' '}
                    Assalammualaikum... On this occasion, allow me to make an
                    introduction to who I am. My name is Dimas Anugerah P. I was
                    born in Bekasi, February 14th 2001. Currently, I live in
                    Yogyakarta ( temporary).I have a dream to become a fullstack
                    developer in 2021 and become an expert programmer.
                </p>
                <div className='col-md-12 icon'>
                    <i className='fa fa-facebook-square m-1'></i>
                    <i className='fa fa-twitter-square m-1'></i>
                    <i className='fab fa-google-plus-square m-1'></i>
                    <i className='fab fa-github-square m-1'></i>
                    <i className='fab fa-whatsapp-square m-1'></i>
                </div>
                </div>
            </div>
            </div>
            <i
            data-toggle='modal'
            data-target='#exampleModal'
            data-whatever='@mdo'
            style={{ color: 'white' }}
            className='fa fa-comment-dots icon-pesan m-4'
            ></i>
            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Kirim kan pendapat anda tentang saya :-)</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                <form >
                    <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Message :</label>
                    <textarea onChange={handleChange} className="form-control" name='message' id="message-text" defaultValue={""} />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
             <button onClick={handleSubmit} type="submit" className="btn btn-primary">{loading === true ? 'loading...' : 'kirim'}</button>
             
                </div>
                <i className='m-2' style={{color:'red', fontSize:'10px'}}>*nama pengirim pesan tidak akan di ketahui oleh saya :-)</i>
            </div>
            </div>
        </div>
            {/* modal */}
            <p className='txt-pesan mr-3 mb-2'>Klik ini yaa... </p>
            {alert === true ? <div style={{position:'fixed', zIndex:'9999'}} className="alert alert-success" role="alert">
 Berhasil terkirim!
</div> : null }
            
        </div>
        </>
    )
}

export default HomePage
