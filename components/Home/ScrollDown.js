import React from 'react'
import { BiMouse } from "react-icons/bi";
import { BiSolidDownArrowAlt } from "react-icons/bi";

function ScrollDown() {
  return (
    <div className='home__scroll'>
        <a href='#about' className='home__scroll-button button--flex'>
      
          <BiMouse />
          <span className='home__scroll-name'>
            Scroll Down
          </span>
          <BiSolidDownArrowAlt />
        </a>
    </div>
  )
}

export default ScrollDown
