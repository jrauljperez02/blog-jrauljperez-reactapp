
import React from 'react'
import './skills.css'

const Bar = ({props}) => {
  return (
    <div className='bar'>
        <div className="info">
            <span>{props.name}</span>
            <span>{props.level}</span>
        </div>
        <div className= {`line ${props.styles}`}></div>
    </div>
  )
}

export default Bar