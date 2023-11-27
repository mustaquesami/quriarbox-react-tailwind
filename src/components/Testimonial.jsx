import React from 'react'
import Heading from './layouts/Heading'
import Img from './layouts/Img'
import quote from '../assets/quote.png'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import { IoMdStar } from "react-icons/io";
import t1 from '../assets/t1.png'
import Slider from "react-slick";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <section className='mb-[266px]'>
        <Container>
            <Flex className=' justify-center relative w-[872px] m-auto'>
                <Img src={quote} className='absolute top-0 left-10'/>
                <Heading title='TESTIMONIAL' subTitle='Our Awesome Clients'/>
            </Flex>
            <Slider {...settings}>
                <div>
                    <div className='bg-white w-[872px] m-auto mt-[89px] rounded-2xl shadow-[rgba(0, 19, 119, 0.05)] px-10 pt-[40px] pb-[34px]'>
                        <h3 className='w-[221px] text-[#F95C19] font-raleway text-2xl font-bold'>Fantastic service!</h3>
                        <p className='w-[800px] text-[#464558] font-raleway text-base font-normal leading-6 mt-3 mb-2'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                        <Flex className='items-center justify-between'>
                            <Flex>
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                            </Flex>
                            <Flex className='text-right font-raleway gap-x-3'>
                                <div>
                                    <h5 className='text-[#222132] font-bold text-base'>Yves Tanguy</h5>
                                    <p className='text-[#464558] font-normal text-base'>Chief Executive, DLF</p>
                                </div>
                                <Img src={t1} className='w-[60px] h-[60px] rounded-full'/>
                            </Flex>
                        </Flex>
                    </div>
                </div>
                <div>
                    <div className='bg-white w-[872px] m-auto mt-[89px] rounded-2xl shadow-[rgba(0, 19, 119, 0.05)] px-10 pt-[40px] pb-[34px]'>
                        <h3 className='w-[221px] text-[#F95C19] font-raleway text-2xl font-bold'>Fantastic service!</h3>
                        <p className='w-[800px] text-[#464558] font-raleway text-base font-normal leading-6 mt-3 mb-2'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                        <Flex className='items-center justify-between'>
                            <Flex>
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                                <IoMdStar className='text-[#F95C19]' />
                            </Flex>
                            <Flex className='text-right font-raleway gap-x-3'>
                                <div>
                                    <h5 className='text-[#222132] font-bold text-base'>Yves Tanguy</h5>
                                    <p className='text-[#464558] font-normal text-base'>Chief Executive, DLF</p>
                                </div>
                                <Img src={t1} className='w-[60px] h-[60px] rounded-full'/>
                            </Flex>
                        </Flex>
                    </div>
                </div>
            </Slider>
        </Container>
    </section>
  )
}

export default Testimonial