import React from 'react'
import { BiSend } from "react-icons/bi";

export default function Data() {
  return (
    <div className='home__data' id='particle-js'>
        <h1 className="home__title">
            Kristopher Jafeth
        </h1>
        <h3 className="home__subtitle">
            Web Developer
        </h3>
        <p className='home__description'>
            I am creative web developer based in Venezuela, Im very passionate and dedicated to my work.
        </p>
        <a href='https://www.instagram.com/kristopherjafeth/' className='button button--flex mt-4 button-hello'>
            Say Hello 
            <span className='pl-4'> 
                <BiSend />
                </span>
        </a>
    </div>
  )
}
