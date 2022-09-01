import React from 'react'


const Card = ({props}) => {

  console.log(props.icon)
  return (
    <div className="card reveal">
     
        <div className="contact-icon">
            <i className={props.icon}></i>
        </div>
        <div className="info">
            <h3>{props.description}</h3>
            <span></span>
            <span>{props['content-description']}</span>
        </div>
        </div>
  )
}

export default Card