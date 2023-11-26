import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div>
        <h2 className=' text-center text-[#F95C19] font-ox font-bold text-3xl'>{title}</h2>
        <h3 className=' text-center text-[#11111D] font-raleway font-extrabold text-[40px]'>{subTitle}</h3>
    </div>
  )
}

export default Heading