import React, { Component } from 'react';
import './Card1Title.css';

const Card1Title = (props) => {
    return (
        <h3 className='card1Title'>{props.card1Title}</h3>
      );
}
 
export default Card1Title;