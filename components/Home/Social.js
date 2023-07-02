import React from 'react'
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";

const Social = () => {
  return (
   <div className='home__social'>
        <a href='https://instagram.com/kristopherjafeth' className='home__social-icon' target='_blank'>
                <BiLogoInstagram />
        </a>

        <a href='https://github.com/kristopherjafeth' className='home__social-icon' target='_blank'>
                <BiLogoGithub />
        </a>

        <a href='https://linkedin.com/kristopherjafeth' className='home__social-icon' target='_blank'>
                <BiLogoLinkedin />
        </a>

        <a href='https://www.youtube.com/channel/UCl9WDpIrUU7viTCBAWB1DQA' className='home__social-icon' target='_blank'>
                <BiLogoYoutube />
        </a>
   </div>
  )
}

export default Social
