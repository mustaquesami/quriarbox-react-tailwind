import React from 'react'
import Img from '../layouts/Img'
import CountUp from 'react-countup';

const Counter = ({src,end,duration,suffix,factTitle}) => {
  return (
    <div className='flex-col'>
        <Img src={src} imageClassName='inline-block text-center w-[69px] h-[50px]' className='text-center'/>
        <h4 className='text-center text-[#F95C19] font-raleway text-[39px] font-extrabold leading-[42px] lining-nums proportional-nums mt-5 mb-[6px]'><CountUp end={end} duration={duration} suffix={suffix}/></h4>
        <p className='text-center text-[#464558] font-raleway font-bold text-xl'>{factTitle}</p>
    </div>
  )
}

export default Counter