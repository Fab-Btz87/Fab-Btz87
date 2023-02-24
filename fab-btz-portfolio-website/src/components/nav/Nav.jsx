import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {SlBriefcase} from 'react-icons/sl'
import {BiMessageDetail} from 'react-icons/bi'

import { useState } from 'react'

const Nav = () => {
  const {activeNav, setActiveNav} = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" className='active'><BsBookmarkStar /></a>
      <a href="#services"><MdOutlineHomeRepairService /></a>
      <a href="#portfolio"><SlBriefcase /></a>
      <a href="#contact"><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav