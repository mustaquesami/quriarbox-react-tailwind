import React from 'react'

const Input = ({type,placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className=' w-full py-4 border-2 border-[#C5C5D2] rounded-2xl bg-transparent outline-[#C5C5D2] mb-4 px-5'/>
  )
}

export default Input