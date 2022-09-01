import React from 'react'
import CardBlog from './CardBlog'
import cards from './cards_blog.json'
import './blog.css'

import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='section'>
      <div className = 'title'>
        <h2 className = 'section-title'>{cards.title}</h2>
      </div>
       

      <div className='content-blog'>
        {cards.posts.map((item) => {
              return(
                  <Link key = {item.id} to = {item.link}>
                    <CardBlog props = {item}/>
                  </Link>
                  
              )
          })}
      </div>
        
    </div>
  )
}

export default Blog