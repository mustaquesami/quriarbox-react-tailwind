import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import contact from '../assets/contact.png'
import Input from './layouts/Input'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section className='mb-[200px]'>
        <Container>
            <Flex className='w-[872px] m-auto'>
                <div className='w-[424px]'>
                    <Img src={contact}/>
                    <h4 className='font-ox text-[#F95C19] text-2xl font-bold'>REQUEST A CALLBACK</h4>
                    <h2 className='font-raleway text-[#222132] text-[39px] font-extrabold'>We will contact in the shortest time.</h2>
                    <h5 className='font-raleway text-[#9291A1] text-2xl font-semibold'>Monday to Friday, 9am-5pm.</h5>
                </div>
                <form action='' className='w-[423px] mt-2'>
                    <Input type='text' placeholder='Name' className='w-full py-4 border-2 border-[#C5C5D2] rounded-2xl bg-transparent outline-[#C5C5D2] mb-4 px-5'/>
                    <Input type='text' placeholder='Email' className='w-full py-4 border-2 border-[#C5C5D2] rounded-2xl bg-transparent outline-[#C5C5D2] mb-4 px-5'/>
                    <textarea placeholder='Message' className=' w-full py-4 border-2 border-[#C5C5D2] rounded-2xl bg-transparent outline-[#C5C5D2] mb-4 h-[154px] px-5'>

                    </textarea>
                    <button className='px-5 py-3 bg-[#F95C19] text-white text-center font-ox text-xl font-bold w-[424px] rounded mt-[54px]'>Send Message <IoIosSend className='inline-block' /></button>
                </form>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact