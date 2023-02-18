import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile/perfil3-removebg.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h3>Hello I'm</h3>
        <h1>Fabián Benitez</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
        <CTA />

        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" height="300" width="200px"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header