import Container from './layouts/Container'
import Flex from './layouts/Flex'
import React from 'react'
import Heading from './layouts/Heading'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Find = () => {
  return (
    <section>
        <Heading title='FIND US' subTitle='Access us easily'/>
        <Container>
            <Flex className=' gap-6 mt-[85px] mb-[30px] flex-col'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1376424213063!2d90.41055427502391!3d23.742470589081275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b861d1a50c51%3A0xd14728a23d61d0e6!2sTwin%20Tower%20Concord%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1701199975360!5m2!1sen!2sbd" width="100%" height="428" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='w-full bg-[#FEFCFA] p-2'>
                    <h4 className='font-raleway text-[#464558] text-xl font-bold mb-[39px]'>Contact with us</h4>
                    <Flex className='items-center gap-3 mb-[18px]'>
                        <IoLocationOutline className='text-[#FFAF0F] w-[27px] h-[27px]' />
                        <address className='text-[#5C5B6C] font-raleway text-base font-normal'>2277 Lorem Ave, San Diego, CA 22553</address>
                    </Flex>
                    <Flex className='items-center gap-3 w-[285px] text-[#5C5B6C] font-raleway text-base font-normal mb-[18px]'>
                        <IoMdTime className='text-[#FFAF0F] w-[27px] h-[27px]'/>
                        <p>Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm</p>
                    </Flex>
                    <Flex className='items-center gap-3'>
                        <MdOutlineMailOutline className='text-[#FFAF0F] w-[27px] h-[27px]'/>
                        <p className='text-[#5C5B6C] font-raleway text-base font-normal'>info@quriarbox.com</p>
                    </Flex>
                    <Flex className='mt-[30px] w-[114px]'>
                        <BsFacebook className='w-[114px] h-[22px] text-[#F95C19]' />
                        <RiInstagramFill className='w-[114px] h-[22px] text-[#F95C19]'/>
                        <IoLogoTwitter className='w-[114px] h-[22px] text-[#F95C19]'/>
                    </Flex>
                </div>
            </Flex>
        </Container>
        <button className='w-full flex mb-2 py-3 px-3 bg-[#F95C19] text-white rounded font-ox text-xl font-bold'><FaPhoneAlt className='inline-block mr-2' />Call us to delivery  123-456789</button>
    </section>
  )
}

export default Find