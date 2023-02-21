import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineHomeRepairService} from 'react-icons/md'
import {SlBriefcase} from 'react-icons/sl'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#header"><GoHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BsBookmarkStar /></a>
      <a href="#services"><MdOutlineHomeRepairService /></a>
      <a href="#portfolio"><SlBriefcase /></a>
      <a href="#contact"><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav