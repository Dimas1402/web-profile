import React from 'react'
import './Portofolio.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Portofolio = () => {
    return (
        <>
        <div className='row portofolio'>
            <div className='col-sm'>
            {' '}
            
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/Aiwah-Chat" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/aiwah.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                <h5 className='card-title'>Chat App</h5>
                <p className='card-text'>Make a simple chat application</p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React Js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Laravel" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/laravel-2.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Bootstrap" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' alt="" />
                </div>
                </div>
            
            </div>
            
            </div>
            <div className='col-sm'>
            {' '}
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/alpha-post-app" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/pos.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                <h5 className='card-title'>POS App</h5>
                <p className='card-text'>
                    Create a Point of Sales application for cashiers
                </p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Node Js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Express" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/express-109.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Bootstrap" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' alt="" />
                </div>
                </div>
            </div>
            </div>
            <div className='col-sm'>
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/Supercamp-programmer" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/super.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                <h5 className='card-title'>Supercamp Programmer</h5>
                <p className='card-text'>Create a Supercamp Programmer website</p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React Js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Laravel" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/laravel-2.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Bootstrap" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className='row mt-5 portofolio'>
            <div className='col-sm'>
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/web-3-tugas" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/event.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                <h5 className='card-title'>Dashboard Event</h5>
                <p className='card-text'>Create the dashboard display</p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React Js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Laravel" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/laravel-2.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Bootstrap" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' alt="" />
                </div>
                </div>
            </div>
            </div>
            <div className='col-sm'>
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/pondok-programmer" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/pp.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                <h5 className='card-title'>Pondok Programmer</h5>
                <p className='card-text'>Create a Pondok Programmer Website</p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React Js" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Laravel" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/laravel-2.svg' alt="" />
                <img data-toggle="tooltip" data-placement="bottom" title="Bootstrap" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' alt="" />
                </div>
                </div>
            </div>
            </div>
            <div className='col-sm'>
            <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='card mt-3'>
            <a href="https://github.com/Dimas1402/Dzikir-app_with_React_Native" target="_blank"  rel="noopener noreferrer" >
                <img
                className='card-img-top img-fluid img-pro'
                src={require('../../Assets/dzikir.png')}
                alt=''
                />
                </a>
                <div className='card-body'>
                    
                <h5 className='card-title'>Dzikir App with React Native</h5>
                <p className='card-text'>Create a Dzikir Application</p>
                <div  className="img-projek m-1">
                <img data-toggle="tooltip" data-placement="bottom" title="React Native" className='m-1' style={{width:'20px', height:'20px'}} src='https://cdn.worldvectorlogo.com/logos/react.svg' alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Portofolio
