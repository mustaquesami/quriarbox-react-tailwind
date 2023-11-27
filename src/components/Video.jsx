import Container from './layouts/Container'
import vBackground from '../assets/vBackground.png'
import React from 'react'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import vIcon from '../assets/vIcon.png'

const Video = () => {
  return (
    <section className='mb-[178px]'>
        <Container>
            <div style={{backgroundImage:`url(${vBackground})`}}>
                <Flex className='pt-[126px] pb-[168px] bg-[rgba(10,9,13,.8)] rounded-2xl flex-col items-center'>
                    <Img src={vIcon}/>
                    <h2 className='font-ox text-[32px] font-bold text-[#F95C19] mt-5 mb-7'>FASTEST DELIVERY</h2>
                    <p className='w-[673px] text-center font-raleway text-[25px] font-normal text-white leading-[30px]'>You can get your valuable item in the fastest period of  time with safety. Because your emergency  is our first priority.</p>
                </Flex>
            </div>
        </Container>
    </section>
  )
}

export default Video