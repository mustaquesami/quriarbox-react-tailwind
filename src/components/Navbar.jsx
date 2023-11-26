import Container from './layouts/Container'
import React from 'react'
import Flex from './layouts/Flex'
import List from './layouts/List'
import Img from './layouts/Img'
import logo from '../assets/Logo.png'
import ListItem from './layouts/ListItem';

const Navbar = () => {
  return (
    <nav className='py-4 bg-orange-50'>
        <Container>
            <Flex className='justify-between'>
                <Img src={logo} />
                <div className='flex'>
                <List className='flex gap-6 items-center font-raleway text-base text-[#817382] font-bold'>
                    <ListItem title='Home' link='#'/>
                    <ListItem title='Our Services' link='#'/>
                    <ListItem title='About Us' link='#'/>
                    <ListItem title="What's New" link='#'/>
                </List>
                    <svg className='ml-10' width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="49" height="49" rx="6" fill="#FFEDC9"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M29.7576 27.1883L35.6753 33.1062C35.8833 33.3143 36.0001 33.5966 36 33.8909C35.9999 34.1851 35.8829 34.4673 35.6748 34.6753C35.4666 34.8833 35.1844 35.0001 34.8901 35C34.5958 34.9999 34.3137 34.8829 34.1057 34.6747L28.188 28.7569C26.4189 30.1271 24.1943 30.7719 21.9668 30.5601C19.7392 30.3484 17.676 29.2959 16.1968 27.6169C14.7177 25.9379 13.9337 23.7584 14.0044 21.5218C14.0751 19.2853 14.9951 17.1597 16.5773 15.5774C18.1596 13.9951 20.2851 13.0751 22.5216 13.0044C24.7581 12.9337 26.9375 13.7177 28.6165 15.1969C30.2955 16.6761 31.3479 18.7394 31.5597 20.967C31.7715 23.1946 31.1267 25.4192 29.7565 27.1883H29.7576ZM22.8004 28.3994C24.5508 28.3994 26.2294 27.704 27.4671 26.4663C28.7048 25.2286 29.4001 23.5499 29.4001 21.7995C29.4001 20.0491 28.7048 18.3704 27.4671 17.1327C26.2294 15.895 24.5508 15.1997 22.8004 15.1997C21.0501 15.1997 19.3714 15.895 18.1337 17.1327C16.896 18.3704 16.2007 20.0491 16.2007 21.7995C16.2007 23.5499 16.896 25.2286 18.1337 26.4663C19.3714 27.704 21.0501 28.3994 22.8004 28.3994Z" fill="#FFAF0F"/>
                    </svg>
                    <button className=' py-3 px-5 bg-[#FFE4D9] rounded ml-3 font-ox text-[#F95C19] text-xl font-bold'>Contact us</button>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar