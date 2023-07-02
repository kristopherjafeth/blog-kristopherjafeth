import React, { useState } from 'react'
import { BiHomeAlt } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiBadgeCheck } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import Image from 'next/image'


export default function Header() {

    const[Toggle, showMenu] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='#' className='nav__logo'>
                <Image
                src="./assets/logo.svg"
                width={80}
                height={80}
                alt="Picture of the author"
                />
            </a>

            <div className={Toggle ? "nav__menu show-menu": "nav__menu" }>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href="#" className='nav__link'>
                        <BiHomeAlt className='nav__icon'/> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#about" className='nav__link'>
                        <BiUser className='nav__icon'/> About
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#portfolio" className='nav__link'>
                        <BiBriefcase className='nav__icon'/> Portfolio
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#services" className='nav__link'>
                        <BiBadgeCheck className='nav__icon'/> Services
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#services" className='nav__link'>
                        <BiBadgeCheck className='nav__icon'/> Skills
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href="#contact" className='nav__link'>
                        <BiMessage className='nav__icon'/> Contact
                        </a>
                    </li>
                </ul>
                <div className='nav__close' onClick={() => showMenu(!Toggle)}>
                <BiXCircle />
                </div>
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                <BiGridAlt />
            </div>
        </nav>
    </header>
  )
}
