import React from 'react';
import { useState } from 'react';
import Weather from './Weather';
import classes from './Weather.module.css';
import TermoLine from './TermoLine';


const Temp =(props)=>{
 const { children } = props;
 const  calcLevelHeight=(grad)=> {
    return Math.abs(-50 - grad);
  }
  let degree = calcLevelHeight(children);
   const tempLevel = degree + "%";
    console.log(tempLevel);
return(
   <div className={classes.container }>
    <div className={classes.termocontainer}>
    <ul className={classes.termo}>
      <li >+50</li>
      <li >+40</li>
      <li >+30</li>
      <li >+20</li>
      <li >+10</li>
      <li >0</li>
      <li >-10</li>
      <li >-20</li>
      <li >-30</li>
      <li >-40</li>
      <li >-50</li>
    </ul>
    <div className={classes.termoLine}>
      <TermoLine height={tempLevel}/>
    </div>
  </div>
  </div> 
)
}
export default Temp;