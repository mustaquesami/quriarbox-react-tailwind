import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import banner from '../assets/banner.png'
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className='mb-[178px]'>
        <Container>
            <Flex>
                <div>
                    <h1 className='mt-[260px] w-[467px] font-raleway text-[49px] font-normal text-[#261134] leading-[58px]'>A trusted provider of <span className=' font-extrabold'>courier services.</span></h1>
                    <p className='w-[330px] text-[#4D4D4D] font-raleway text-xl font-normal leading-6 mt-4 mb-10'>We deliver your products safely to your home in a reasonable time.</p>
                    <button className='bg-[#F95C19] px-5 py-3 rounded text-white font-ox text-base font-bold'>Get started<FaArrowRight className='inline-block' /></button>
                </div>
                <Img src={banner} className='mt-[170px]'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner