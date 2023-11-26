import React from 'react'
import Img from './Img'
import List from '../layouts/List'


const Card = ({src,serviceTitle,serviceDesc,children,btnTitle}) => {
  return (
    <div className='mt-[86px] bg-white px-[62px] rounded-2xl border border-white'>
        <Img src={src} className='mt-[67px] text-center' imageClassName='text-center inline'/>
        <h2 className='text-[#464558] font-raleway text-2xl font-extrabold text-center mt-[29px] mb-[31px]'>{serviceTitle}</h2>
        <p className='w-[301px] text-[#7B7A8B] font-raleway text-base font-normal'>{serviceDesc}</p>
        <List className='font-raleway text-[#7B7A8B] text-base font-normal mt-[34px] mb-[60px] list-disc ml-[18px]'>
            {children}
        </List>
        <button className='font-ox text-xl font-bold text-[#F95C19] py-3 px-5 border border-[#F95C19] rounded w-[301px] mb-[49px] hover:bg-[#F95C19] hover:text-white ease-in'>{btnTitle}</button>
    </div>
  )
}

export default Card