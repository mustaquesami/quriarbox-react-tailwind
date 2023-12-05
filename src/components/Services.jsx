import React from 'react'
import Heading from './layouts/Heading'
import Card from './layouts/Card'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import ListItem from './layouts/ListItem'

const Services = () => {
  return (
    <section className='mb-[173px]'>
        <Heading title='SERVICES' subTitle='Our services for you'/>
        <Container>
            <Flex className='flex-col px-2'>
                <Card serviceTitle='Business Services' serviceDesc='We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.' src={s1} btnTitle='Learn more'>
                    <ListItem title='Corporate goods'/>
                    <ListItem title='Shipment'/>
                    <ListItem title='Accesories'/>
                </Card>
                <Card serviceTitle='Statewide Services' serviceDesc='Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.' src={s2} btnTitle='Learn more'>
                    <ListItem title='Personal items'/>
                    <ListItem title='Percels'/>
                    <ListItem title='Documents'/>
                </Card>
                <Card serviceTitle='Personal Services' serviceDesc='You can trust us to safely deliver your most sensitive documents to the specific area in a short time.' src={s3} btnTitle='Learn more'>
                    <ListItem title='Gifts'/>
                    <ListItem title='Package'/>
                    <ListItem title='Documents'/>
                </Card>
            </Flex>
        </Container>
    </section>
  )
}

export default Services