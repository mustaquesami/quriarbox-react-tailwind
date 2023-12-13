import React from 'react'
import Flex from './Flex'
import Img from '../layouts/Img'

const SliderContent = ({title,desc,children,name,designation,src}) => {
  return (
    <div>
        <div className='bg-white w-full m-auto mt-[89px] rounded-2xl shadow-[rgba(0, 19, 119, 0.05)] px-10 pt-[40px] pb-[34px] lg:w-[872px]'>
            <h3 className='w-full text-[#F95C19] font-raleway text-2xl font-bold'>{title}</h3>
            <p className='w-full text-[#464558] font-raleway text-base font-normal leading-6 mt-3 mb-2'>{desc}</p>
            <Flex className='items-center justify-between'>
                <Flex>
                  {children}
                </Flex>
                <Flex className='text-right font-raleway gap-x-3'>
                    <div>
                        <h5 className='text-[#222132] font-bold text-base'>{name}</h5>
                        <p className='text-[#464558] font-normal text-base'>{designation}</p>
                    </div>
                    <Img src={src} className='w-[60px] h-[60px] rounded-full'/>
                </Flex>
            </Flex>
        </div>
      </div>
  )
}

export default SliderContent