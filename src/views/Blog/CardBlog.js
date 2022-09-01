import React from 'react'

const CardBlog = ({props}) => {
  return (
    <div className='content-blog__data'>
        <h2>{props.title}</h2>
        <h4>{props.description}</h4>
        <div className='content-blog__data__img'>
          <img alt = {props.alt} src = {props['img-url']} />
        </div>
       
    </div>
  )
}
export default CardBlog