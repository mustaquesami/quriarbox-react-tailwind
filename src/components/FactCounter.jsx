import Container from './layouts/Container'
import Counter from './layouts/Counter'
import Flex from './layouts/Flex'
import React from 'react'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import a5 from '../assets/a5.png'

const FactCounter = () => {
  return (
    <section className='mb-[80px]'>
        <Container>
            <Flex className=' flex-col gap-3 md:flex-row md:justify-between'>
                <Counter src={a1} end='26' duration='5' suffix='+' factTitle='Awards won'/>
                <Counter src={a2} end='65' duration='5' suffix='+' factTitle='States covered'/>
                <Counter src={a3} end='689' duration='5' suffix='K+' factTitle='Happy clients'/>
                <Counter src={a4} end='130' duration='5' suffix='M+' factTitle='Goods delivered'/>
                <Counter src={a5} end='130' duration='5' suffix='M+' factTitle='Business hours'/>
            </Flex>
        </Container>
    </section>
  )
}

export default FactCounter