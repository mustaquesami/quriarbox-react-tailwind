import React from 'react'
import Heading from './layouts/Heading'
import Img from './layouts/Img'
import quote from '../assets/quote.png'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import { IoMdStar } from "react-icons/io";
import t1 from '../assets/t1.png'

const Testimonial = () => {
  return (
    <section>
        <Container>
            <Flex className=' justify-center relative w-[872px] m-auto'>
                <Img src={quote} className='absolute top-0 left-10'/>
                <Heading title='TESTIMONIAL' subTitle='Our Awesome Clients'/>
            </Flex>
            <div className='bg-white w-[872px] m-auto mt-[89px]'>
                <h3>Fantastic service!</h3>
                <p>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                <div className='flex justify-between'>
                    <div>
                        <IoMdStar className='text-[#F95C19]' />
                        <IoMdStar className='text-[#F95C19]' />
                        <IoMdStar className='text-[#F95C19]' />
                        <IoMdStar className='text-[#F95C19]' />
                        <IoMdStar className='text-[#F95C19]' />
                    </div>
                    <Img src={t1}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Testimonial