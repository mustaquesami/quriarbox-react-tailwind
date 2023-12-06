import React from 'react'
import Heading from './layouts/Heading'
import Img from './layouts/Img'
import quote from '../assets/quote.png'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Slider from "react-slick";
import SliderContent from './layouts/SliderContent'
import t1 from '../assets/t1.png'
import { IoMdStar } from "react-icons/io";

const generateStarIcons = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<IoMdStar key={i} className='text-[#F95C19]' />);
    }
    return stars;
};

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
    <section className='mb-[80px]'>
        <Container>
            <Flex className='flex-col'>
                <Img src={quote} className='m-auto'/>
                <Heading title='TESTIMONIAL' subTitle='Our Awesome Clients'/>
            </Flex>
            <Slider {...settings}>
                <SliderContent title='Fantastic service!' desc='I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.' name='Yves Tanguy' designation='Chief Executive, DLF' src={t1}>
                    {generateStarIcons(5)}
                </SliderContent>
                <SliderContent title='Fantastic service!' desc='I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.' name='Yves Tanguy' designation='Chief Executive, DLF' src={t1}>
                    {generateStarIcons(5)}
                </SliderContent>
            </Slider>
        </Container>
    </section>
  )
}

export default Testimonial