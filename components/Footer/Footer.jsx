import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/assets/logo.svg'

export default function Footer() {
  return (
    <footer className='mt-24 footer'>
        <div className="footer__container container">
        <Link href={`/`} className='nav__logo'>

<Image
src={Logo}
width={80}
height={50}
alt="Picture of the author"
className='logo-image mx-auto'
/>
</Link>

            <ul className='footer__list'>
                <li>
                    <a href="#" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#" className='footer__link'>Services</a>
                </li>
                <li>
                    <a href="#" className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href="#" className='footer__link'>Blog</a>
                </li>
            </ul>

            <span className='footer__copy'>Created by Kristopher Jafeth 🔥</span>

        </div>

    </footer>
  )
}
