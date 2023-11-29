import Container from './layouts/Container'
import Flex from './layouts/Flex'
import React from 'react'
import Img from './layouts/Img'
import fLogo from '../assets/Logo.png'
import List from './layouts/List'
import ListItem from './layouts/ListItem'

const Footer = () => {
  return (
    <footer className='bg-[#2F2E41] py-[60px]'>
        <Container>
            <Flex className=' items-center justify-between'>
                <div>
                    <Img src={fLogo}/>
                    <p className='font-raleway text-[#9291A1] text-base font-semibold w-[190px] mt-[18px]'>The most trusted Courier company in your area.</p>
                </div>
                <Flex className='justify-between w-1/2'>
                    <List className='font-raleway text-base font-semibold text-[#9291A1]'>
                        <h4 className='font-ox text-white text-xl font-bold mb-[22px]'>Other links</h4>
                        <ListItem title='Blogs'/>
                        <ListItem title='Movers website'/>
                        <ListItem title='Traffic Update'/>
                    </List>
                    <List className='font-raleway text-base font-semibold text-[#9291A1]'>
                        <h4 className='font-ox text-white text-xl font-bold mb-[22px]'>Services</h4>
                        <ListItem title='Corporate goods'/>
                        <ListItem title='Artworks'/>
                        <ListItem title='Documents'/>
                    </List>
                    <List className='font-raleway text-base font-semibold text-[#9291A1]'>
                        <h4 className='font-ox text-white text-xl font-bold mb-[22px]'>Customer Care</h4>
                        <ListItem title='About Us'/>
                        <ListItem title='Contact US'/>
                        <ListItem title='Get Update'/>
                    </List>
                </Flex>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer