import React from 'react'
import './aboutme.css'
import data from './about_me.json'

const AboutMe = () => {
  return (
    <section className='about'>
        <div className = 'title reveal'>
            <h2 className = 'section-title'>{data.title}</h2>
        </div>
        <div className='content'>
            <div className='column col-left reveal'>
                <div className='img-card'>
                    <img alt = '' src = {data['img-profile']} />
                </div>
            </div>
            <div className='col-right reveal'>
                <div className="animated-text">
                    {data.description.map((item,id) => {
                        return(
                            <h3 key = {item.id}>{item.skill}</h3>
                        )
                    })}

                </div>
                <p className="paragraph-text">{data['content']}</p>
                <p className="languaje">{data['english-level']}</p>
                <div className='about-icon'>
                    <i className="fab fa-github el"></i>
                    <i className="fab fa-google el"></i>
                    <i className="fab fa-twitter el"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe