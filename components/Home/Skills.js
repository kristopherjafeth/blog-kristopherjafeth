import React from 'react'
import Frontend from './Skills/Frontend'
import Backend from './Skills/Backend'


function Skills() {
  return (
    <section className="about section" id="about">
    <h1 className="section__title">Ski<span className="span-green">ll</span>s</h1>
    <span className="section__subtitle">My Stack</span>
        <div className='skills__container container grid'>
            <Frontend/>
            <Backend/>
        </div>
  </section>
  )
}

export default Skills
