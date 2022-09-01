import React from 'react'
import './UserForm.css'
import data from './form.json'
import Card from './Card';
import UserForm from './UserForm';




const ContactPage = () => {
  return (
    <section className="contact" >
      <div className="title reveal">
        <h2 className="section-title">{data.title}</h2>
      </div>
      <div className="content">
        <div className="row">
          {data.cards.map((item) => {
            return(
              <Card key = {item.id} props = {item} />
            )
          })}
        </div>
          <UserForm/>
      </div>
    </section>
  )
}

export default ContactPage