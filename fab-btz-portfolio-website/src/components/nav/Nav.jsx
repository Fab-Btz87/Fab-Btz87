import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {SlBriefcase} from 'react-icons/sl'
import {BiMessageDetail} from 'react-icons/bi'

import {useState} from 'react'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#home')
  
  
  return (
    <nav>
      <a href='#home' onClick= { () => setActiveNav('#home') } className= { activeNav === '#home' ? 'active' : '' }> <GoHome /> </a>
      <a href="#about" onClick= { () => setActiveNav('#about') } className= { activeNav === '#about' ? 'active' : '' }> <AiOutlineUser /> </a>
      <a href="#experience" onClick= { () => setActiveNav('#experience') } className = { activeNav === '#experience' ? 'active' : '' }> <BsBookmarkStar /> </a> 
      <a href="#services" onClick= { () => setActiveNav('#services') } className = { activeNav === '#services' ? 'active' : '' }> <MdOutlineHomeRepairService /> </a>
      <a href="#portfolio" onClick= { () => setActiveNav('#portfolio') } className = { activeNav === '#portfolio' ? 'active' : '' }> <SlBriefcase /> </a>
      <a href="#contact" onClick= { () => setActiveNav('#contact') } className = { activeNav === '#contact' ? 'active' : '' }> <BiMessageDetail /> </a>
    </nav>
    
  )
  
}

export default Nav