import React, { useState, useEffect } from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com'
import AOS from 'aos'
import swal from 'sweetalert'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('name', name)
  })

  const handleSubmit = e => {
    var templateParams = {
      to_name: 'Dimas Anugerah P',
      from_name: email,
      subject: subject,
      message_html: message,
      reply_to: email
    }
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'gmail',
        'template_q7SiIFDE',
        templateParams,
        'user_2r5ruqFza22BP6Rr4FG9j'
      )
      .then(
        result => {
          console.log(result)
          setLoading(false)
          swal("Success", "You clicked the button!", "success");
        },
        error => {
          console.log(error.text)
          setLoading(false)
          swal("Failed to send message", "You clicked the button!", "error");
        }
      )
  }
  return (
    <div className='row contact'>
      <div className='col-md-6'>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          className='card'
        >
          <p className='mt-5'>Feel free to contact me</p>
          <form id='myfrom' onSubmit={handleSubmit}>
            <div className='group'>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type='text'
                required
              />
              <span className='highlight' />
              <span className='bar' />
              <label>Name</label>
            </div>
            <div className='group'>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
                required
              />
              <span className='highlight' />
              <span className='bar' />
              <label>Email</label>
            </div>
            <div className='group'>
              <input
                value={subject}
                onChange={e => setSubject(e.target.value)}
                type='text'
                required
              />
              <span className='highlight' />
              <span className='bar' />
              <label>Subject</label>
            </div>
            <div className='group'>
              <input
                value={message}
                onChange={e => setMessage(e.target.value)}
                type='text'
                required
              />
              <span className='highlight' />
              <span className='bar' />
              <label>Message</label>
            </div>
            <button type='submit' className='button buttonBlue'>
              {loading === true ? (
                <button className='btn' type='button' disabled>
                  <span
                    className='spinner-grow spinner-grow-sm'
                    role='status'
                    aria-hidden='true'
                  />
                  Loading...
                </button>
              ) : (
                'Send'
              )}
              <div className='ripples buttonRipples'>
                <span className='ripplesCircle' />
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className='col-md-6 right-contact'>
        <div className='row'>
          <div className='col'>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-once='true'
              className='card'
            >
              <table className='table table text-left'>
                <tbody>
                  <tr>
                    <td className='bold'>E-MAIL</td>
                    <td className='name' >anugerahdimas469@gmail.com</td>
                  </tr>
                  <tr>
                    <td className='bold'>PHONE</td>
                    <td  className='name'>0899 3985 800</td>
                  </tr>
                  <tr>
                    <td className='bold'>GITHUB</td>
                    <td  className='name'>Dimas1402</td>
                  </tr>
                  <tr>
                    <td className='bold'>ADDRESS</td>
                    <td  className='name'>Jl.Rh.Umar rt02/04 ,jatiasih , Bekasi Selatan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-once='true'
              className='card'
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.887660749923!2d106.96747531439048!3d-6.278497363205649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d9a6c1f2ae9%3A0xee678beeb965f01e!2sJl.%20R.H.%20Umar%2C%20RT.004%2FRW.002%2C%20Jaka%20Setia%2C%20Kec.%20Bekasi%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1586399356826!5m2!1sid!2sid'
                height='430px'
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden='false'
                tabIndex={0}
                title='rumah saya'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
