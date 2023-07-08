import React from 'react'
import { FcIdea } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";

export default function Info() {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <FcIdea className='about__icon' />
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>+ 3 Years</span>
        </div>

        <div className='about__box'>
            <FcBriefcase className='about__icon' />
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>+ 10 Projects</span>
        </div>

        <div className='about__box'>
            <FcAssistant className='about__icon'/>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>

      

    </div>
  )
}
