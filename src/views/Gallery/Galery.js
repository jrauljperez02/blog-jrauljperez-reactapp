import React from 'react'
import './galery.css'
import data from './galery.json'

const Galery = () => {

  return (
    <section className='work'>
        <div className='title'>
            <h2 className='section-title'>{data.title}</h2>
        </div>
        <div className='content'>
          {data.images.map((item) =>{
            return(
              <div key = {item.id} className="card ">
                <div className="card-img">
                  <img src={item.url} alt={item.alt}/>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default Galery