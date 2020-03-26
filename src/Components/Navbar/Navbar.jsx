import React,{useState} from 'react'
import './Navbar.scss'

const Navbar = () => {
    const [bgNavbar, setBgNavbar] = useState(false)


    const bgNavbars = () => {
        setBgNavbar(!bgNavbar)
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${bgNavbar === true ? 'bg-dark' : 'bg-transparent'} `} >
        <p
            style={{ color: 'white', cursor: 'pointer' }}
            className='navbar-brand'
            href='#'
        >
           <img className='img-fluid mt-2' style={{width:'60px',height:'45px'}} src={require('../../Assets/logoD.png')} alt=""/>
        </p>
        <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
            
        >
            <i onClick={bgNavbars} style={{color:'white'}} className="fa fa-list"></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='mr-auto'></div>
            <div className='navbar-nav text-center'>
            <p
                style={{ color: 'white', cursor: 'pointer' }}
                className='nav-item nav-link active'
                href='#'
            >
                Home <span className='sr-only'>(current)</span>
            </p>
            <p
                style={{ color: 'white', cursor: 'pointer' }}
                className='nav-item nav-link'
                href='#'
            >
                Profile
            </p>
            <p
                style={{ color: 'white', cursor: 'pointer' }}
                className='nav-item nav-link'
                href='#'
            >
                Portofolio
            </p>
            <p
                style={{ color: 'white', cursor: 'pointer' }}
                className='nav-item nav-link disabled'
                href='#'
                tabIndex={-1}
                aria-disabled='true'
            >
                about
            </p>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
