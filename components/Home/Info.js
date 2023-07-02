import React from 'react'
import { BiAward } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BiSupport } from "react-icons/bi";

export default function Info() {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <BiAward className='about__icon' />
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>3 Years working</span>
        </div>

        <div className='about__box'>
            <BiBriefcaseAlt2 className='about__icon' />
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'>+10 Projects</span>
        </div>

        <div className='about__box'>
            <BiSupport className='about__icon'/>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>

      

    </div>
  )
}
