import React from 'react'
import './HomePage.scss'
import Navbar from '../Navbar/Navbar'
import Modal from './Modal/modal'

const HomePage = ({ handleChange, handleSubmit, loading}) => {
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
            {/* modal */}
           <Modal handleChange={handleChange} handleSubmit={handleSubmit} loading={loading} />
            {/* modal */}
            <p className='txt-pesan mr-3 mb-2'>Klik ini yaa... </p>
        </div>
        </>
    )
}

export default HomePage
