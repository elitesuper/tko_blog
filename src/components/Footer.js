import React from 'react';
import '../index.css';
import butter from '../butter-b.png'

const Footer = () => (
  <footer classname ="home-footer">
    <br />
    <br />
    <p className='footer-text'>Powered by </p> <img src= {butter} alt='butter logo' className='butter' />

  </footer>
)

export default Footer;

