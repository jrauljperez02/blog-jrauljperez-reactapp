import React from 'react'
import './footer.css'
import data from './footer.json'

const Footer = () => {
  return (
    <footer className='footer'>
        <span className="footer-title">{data.name}</span>
        <p>{data['privacy-politics']}</p>
    </footer>
  )
}

export default Footer