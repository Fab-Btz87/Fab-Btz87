import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {TfiYoutube} from 'react-icons/tfi'
const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/fabi%C3%A1n-benitez-75623489/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Fab-Btz87" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://www.youtube.com/@Fab-Btz-Dev" target="_blank" rel="noreferrer"><TfiYoutube/></a>
    </div>
  )
}

export default HeaderSocial