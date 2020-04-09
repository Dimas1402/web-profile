import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import anime from 'animejs/lib/anime.es.js'
import Data from './data.json'
import {Redirect, NavLink} from 'react-router-dom'
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();
const NavbarTwo = () => {
    const [bgNavbar, setBgNavbar] = useState(false)
    const [loadPage, setLoadPage] = useState(false)
    const [id, setId] = useState(0)
    const[nvbar, setNvbar] = useState(false)
    const [listId, setListId] = useState(false)


    useEffect(() => {
        (handleLoadPage())
        window.addEventListener("scroll", listenScrollEvent);
        console.log('use effecct', id)
    }, [id])

    const bgNavbars = () => {
        setBgNavbar(!bgNavbar)
    }
    const listenScrollEvent = e => {
        if (window.scrollY > 100) {
          setNvbar(true)
        } else {
          setNvbar(false)
        }
      };

    const handleLoadPage = () => {
        setLoadPage(true)
        anime({
        targets: '.box-1',
        width: '100%', // -> from '28px' to '0',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: 50
        // loop: true
        })
        anime({
        targets: '.box-2',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: 200
        // loop: true
        })
        anime({
        targets: '.box-3',
        width: '100%', // -> from '28px' to '0',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: 400
        // loop: true
        })
        setTimeout(() => {
        setLoadPage(false)
        }, 2500)
    }

    return (
        <>
        {id === 2 ? <Redirect to="/profile"/> : null }
        {id === 1 ? <Redirect to="/"/> : null }
        <span
            className={
            loadPage === true ? `${'flex-container'}` : `${'flex-container-none'}`
            }
        >
            <span className='box-1'></span>
            <span className='box-2'></span>
            <span className='box-3'></span>
        </span>
        {/* page load animation */}
        <nav
            className={`navbar navbar-expand-lg navbar-light fixed-top ${
           nvbar === true || bgNavbar === true ? 'bg-darks' : 'bg-transparent'
            } `}
        >
            <p
            style={{ color: 'white', cursor: 'pointer' }}
            className='navbar-brand'
            >
            <img
                className='img-fluid mt-2'
                style={{ width: '60px', height: '45px' }}
                src={require('../../Assets/logoD.png')}
                alt=''
            />
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
            <i
                onClick={bgNavbars}
                style={{ color: 'white' }}
                className='fas fa-stream'
            ></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='mr-auto'></div>
            <div className='navbar-nav text-center'>
                {/* {console.log(Data.Name[0].name)} */}
                <NavLink exact activeClassName='active-list' to={"/"} >
                <p
                    style={{ color: 'white', cursor: 'pointer' }}
                    className='nav-item nav-link name-navbar m-1'
                    onClick={e => {
                    setTimeout(() => setId(1),300)
                    }}
                >
                    Home
                </p>
                </NavLink>
                 {Data.NameTwo.map(res => (
                     <a
                     key={res.id}
                     style={{ color: 'white', cursor: 'pointer' }}
                     className={`nav-item nav-link name-navbar m-1 ${listId === res.id ? "active-list" : null}`}
                     href={res.link} 
                     onClick={() => setListId(res.id)}
                 >
                     {res.name}
                 </a>
                ))}
            </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarTwo