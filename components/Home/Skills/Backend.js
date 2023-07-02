import React from 'react'
import { BiLogoPhp } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { SiLaravel } from "react-icons/si";


function Backend() {
  return (
    <div className='skills__content'>
    <h3 className='skills__title'><span className='span-green'>Backend </span> Developer</h3>

    <div className='skills__box'>
      <div className='skills__group'>
          <div className='skills__data'>
              <BiLogoPhp />
              <div>
                  <h3 className='skills__name'>PHP</h3>
                  <span className='skills__level'></span>
              </div>
          </div>
          <div className='skills__data'>
              <BiLogoNodejs />
              <div>
                  <h3 className='skills__name'>Node Js</h3>
                  <span className='skills__level'></span>
              </div>
          </div>
          <div className='skills__data'>
              <SiMysql />
              <div>
                  <h3 className='skills__name'>Mysql</h3>
                  <span className='skills__level'></span>
              </div>
          </div>
          <div className='skills__data'>
              <BiLogoFirebase />
              <div>
                  <h3 className='skills__name'>Firebase</h3>
                  <span className='skills__level'></span>
              </div>
          </div>
          <div className='skills__data'>
              <SiLaravel />
              <div>
                  <h3 className='skills__name'>Laravel</h3>
                  <span className='skills__level'></span>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Backend
