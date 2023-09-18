import React from 'react'
import { BiLogoReact } from "react-icons/bi";
import { BiLogoVuejs} from "react-icons/bi";
import { BiLogoHtml5} from "react-icons/bi";
import { BiLogoTailwindCss} from "react-icons/bi";
import { BiLogoBootstrap} from "react-icons/bi";
import { BiLogoJavascript} from "react-icons/bi";
import { BiLogoCss3} from "react-icons/bi";


const Frontend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'><span className='span-green'>Frontend </span> Developer </h3>

      <div className='skills__box'>
        <div className='skills__group'>
            <div className='skills__data'>
                <BiLogoHtml5 className='icon-skill' />
                <div>
                    <h3 className='skills__name'>HTML</h3>
                </div>
            </div>
            <div className='skills__data'>
                <BiLogoCss3 className='icon-skill' />
                <div>
                    <h3 className='skills__name'>CSS</h3>
                </div>
            </div>
            <div className='skills__data'>
                <BiLogoJavascript className='icon-skill' />
                <div>
                    <h3 className='skills__name'>Javascript</h3>
                </div>
            </div>
            <div className='skills__data'>
                <BiLogoBootstrap className='icon-skill'/>
                <div>
                    <h3 className='skills__name'>Bootstrap</h3>
                </div>
            </div>
            <div className='skills__data'>
                <BiLogoTailwindCss className='icon-skill'/>
                <div>
                    <h3 className='skills__name'>Tailwind</h3>
                </div>
            </div>
            <div className='skills__data'>
                <BiLogoVuejs className='icon-skill'/>
                <div>
                    <h3 className='skills__name'>Vue Js</h3>
                </div>
            </div>

            <div className='skills__data'>
                <BiLogoReact className='icon-skill'/>
                <div>
                    <h3 className='skills__name'>React Js</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
