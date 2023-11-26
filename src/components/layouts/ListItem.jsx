import React from 'react'

const ListItem = ({className,link,linkClassName,title}) => {
  return (
    <li className={className}><a href={link} className={linkClassName}>{title}</a></li>
  )
}

export default ListItem