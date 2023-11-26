import Container from './layouts/Container'
import Img from './layouts/Img'
import vBackground from '../assets/vBackground.png'
import React from 'react'

const Video = () => {
  return (
    <section className='mb-[178px]'>
        <Container>
            <Img src={vBackground}/>
        </Container>
    </section>
  )
}

export default Video