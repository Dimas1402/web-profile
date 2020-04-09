import React from 'react'
import './profile.scss'
import Data from './Data.json'
import Portofolio from "../Portofolio/Portofolio"
import Contact from '../Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarTwo from '../Navbar/Navbar2'
// ..
AOS.init();

const Profile = () => {
  return (
    <>
      <NavbarTwo/>
      <div id="profile" className='jumbotron jumbotron-fluid jumbotron-profile'>
        <div className='container'></div>
      </div>
      <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='container container-profile'>
        <div  className='col-md-12 profile-content'>
          <div className='row text-center'>
            <div className='container box-profile'>
              <div className='row'>
                <div className='col-md-12 box-content-profile   '>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img
                        className='ml-1 mt-5 mb-5 img-fluid'
                        style={{ height: '50vmin', width: '40vmin' }}
                        src='data:image/jpeg;base64,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'
                        alt=''
                      />
                    </div>
                    <div className='col-md-8 text-left'>
                      <div className='chat-container'>
                        <div className='chat-sender msg'>
                          <strong>HELLO</strong>
                        </div>
                      </div>
                      <div
                        style={{ border: 'none' }}
                        className='card mt-4 card-name-user'
                      >
                        <p>
                          <span>I'm</span> Dimas Anugerah Pratama
                        </p>
                        <p id='job'>Frontend Developer</p>{' '}
                        <span id='border'></span>
                      </div>
                      <ul className='list-group list-group-flush list-data-profile mt-3'>
                        {Data.DataUser.map(res => (
                          <>
                            <li key={res.id} className='list-group-item'>
                              <strong>{res.name}</strong>
                              <span className={res.class}></span>
                              <span>{res.isi}</span>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 icon box-icon'>
                  {Data.Icon.map(res => (
                    <i key={res.id} className={res.nameIcon}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button id="skill" className='btn-cv mt-5'>DOWNLOAD CV</button>
        <p  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Skills</p>
        <div className='d-flex justify-content-center mt-5 mb-5 image'>
          {Data.IconSkill.map(res => (
            <img data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className=' image-name' src={res.img} alt='' />
          ))}
        </div>
        <div  className='card p-5 card-skill'>
          <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='row skill'>
            <div className='col-md-6 text-left '>
              <p className='skill-name mt-2'>Javascript</p>
              <div id='ProgressBar'>
                <div id='Progress1'></div>
              </div>
              <p className='skill-name mt-2'>React Js</p>
              <div id='ProgressBar'>
                <div id='Progress2'></div>
              </div>

              <p className='skill-name mt-2'>Redux</p>
              <div id='ProgressBar'>
                <div id='Progress3'></div>
              </div>
              <p className='skill-name mt-2'>Git</p>
              <div id='ProgressBar'>
                <div id='Progress7'></div>
              </div>
            </div>
            <div className='col-md-6 text-left'>
              <p className='skill-name mt-2'>HTML</p>
              <div id='ProgressBar'>
                <div id='Progress4'></div>
              </div>
              <p className='skill-name mt-2'>CSS</p>
              <div id='ProgressBar'>
                <div id='Progress5'></div>
              </div>

              <p className='skill-name mt-2'>Bootstrap</p>
              <div id='ProgressBar'>
                <div id='Progress6'></div>
              </div>
              <p className='skill-name mt-2'>SASS</p>
              <div id='ProgressBar'>
                <div id='Progress8'></div>
              </div>
            </div>
          </div>
        </div>
        <p id="work" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className=' mt-5 title-name'>Work Experience</p>
        <div className='work'>
          <section data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='steps steps-area'>
            <div className='container'>
              <ul className='timeline'>
                <li className='timeline-box wow fadeInLeft'>
                  <i className='icon-layers' />
                  <p style={{ fontSize: '20px' }} className='timeline-title'>
                    Supercamp Programmer
                  </p>
                  <p className='timeline-details'>
                    Create a programmer supercamp website
                  </p>
                  <span>2</span>
                </li>
                <li className='timeline-box wow fadeInRight'>
                  <i className='icon-chat' />
                  <p style={{ fontSize: '20px' }} className='timeline-title'>
                    IT Division at Pondok Programmer
                  </p>
                  <p className='timeline-details'>
                    Create Pondok Programmer Website and make a system on Pondok
                    Programmer website
                  </p>
                  <span id="education">1</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <p  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Education</p>
        <div data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='row card-education'>
          <div className='col-md-6'>
            <div  className='card p-4 m-2'>
              <p className='tahun'>2016 - 2019</p>
              <p className='keterangan'>
                learn computer and network techniques
              </p>
              <p style={{ fontSize: '20px' }}>SMKN 4 Bekasi</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card p-4 m-2'>
              <p className='tahun'>2019 - Now</p>
              <p className='keterangan'>
                learn javascript programming language then learn react js and
                become an IT division
              </p>
              <p style={{ fontSize: '20px' }}>Pondok Programmer</p>
            </div>
          </div>
        </div>
        <p id="projek" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>My Projects</p>
       <Portofolio/>
       <p id="contact" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" className='m-5 title-name'>Contact Me</p>
      <Contact/>
      <p style={{color:'#838181'}} className="mt-5">Dimas Anugerah P @2020</p>
      </div>
    </>
  )
}

export default Profile
