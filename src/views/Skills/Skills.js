import React from 'react'
import {
    Link,
  } from "react-router-dom";

import Bar from './Bar';
import './skills.css'
import skills from './skills.json'


const Skills = () => {

  return (
    <section className='skills'>
        <div className='title'>
            <h2 className='section-title'>{skills.title}</h2>
        </div>
        
        <div className='content'>
            <React.Fragment>
                <div className='column col-left'>
                    <h2 className='content-title'>{skills.subtitle}.</h2>
                    <p>{skills.content}</p>
                    <Link className = 'btn' to = 'projects'>{skills['button-description']}</Link>
                </div>
            </React.Fragment>
       
          <div className="column col-right reveal">
            {skills.technologies.map((item,id)=> {
              return(
                <Bar key = {id} props = {item} />
              )
            })}
          </div>
        </div>
    </section>
  )
}

export default Skills