import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { AiFillEye } from "react-icons/ai";

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <Image src={item.image} alt="" className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <Link href={`${item.link}`} className='work__button'>
           <AiFillEye /> <span className='pl-4'>DEMO </span>
        </Link>
    </div>
  )
}

export default WorksItems
