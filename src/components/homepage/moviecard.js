import React from 'react';
import './moviecard.css';



//card as a default class always applied,
//plus anything received from children as a className
function Card(props) {
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}
  
export default Card;