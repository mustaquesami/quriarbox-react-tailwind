import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'

const CopyRight = () => {
  return (
    <section className='bg-[#222132] py-[30px]'>
        <Container>
            <Flex className='flex-col'>
                <p className='font-raleway text-[#DBDBE9] text-[13px] font-medium'>All rights Reserved © Your Company, 2021</p>
                <p className='text-[#E0DEDE] font-raleway text-[13px] font-medium'>Made with heart by ThemeWagon</p>
            </Flex>
        </Container>
    </section>
  )
}

export default CopyRight