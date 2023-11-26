import React from 'react'

const Img = ({className,src,alt,imageClassName}) => {
  return (
    <div className={className}>
        <picture>
            <img src={src} alt={alt} className={imageClassName} />
        </picture>
    </div>
  )
}

export default Img