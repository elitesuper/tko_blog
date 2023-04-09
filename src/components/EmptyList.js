import React from 'react';
import logo from '../confused.png'
import '../index.css';
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={logo} alt='empty' />
    <p>No categories here</p>
  </div>
);
export default EmptyList;