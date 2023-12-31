import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import Input  from './layouts/Input'

const Subscribe = () => {
  return (
    <section className='bg-[#222132] py-[84px]'>
        <Container>
            <Flex className='flex-col md:flex-row md:justify-between'>
                <div className='font-raleway'>
                    <h2 className='text-white text-[39px] font-extrabold md:w-[300px] xl:w-[648px]'>Get an update every week</h2>
                    <p className='w-full text-[#C5C5D2] text-base font-normal md:w-[300px] xl:w-[501px]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                <div className='mt-7'>
                    <h5 className='text-[#F95C19] font-ox text-lg font-bold mb-3'>SUBSCRIBE TO NEWSLETTER</h5>
                    <Flex className='flex-col gap-2 md:flex-row md:gap-2'>
                        <Input type='text' placeholder='Enter your mail' className='w-full py-4 px-5 border border-[#C5C5D2] bg-transparent rounded xl:w-[386px]'/>
                        <button className='bg-[#F95C19] w-full px-5 py-3 text-white font-ox font-bold text-xl rounded xl:px-5 xl:py-3'>Subscribe</button>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Subscribe