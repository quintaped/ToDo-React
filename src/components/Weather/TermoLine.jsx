import React from 'react';
import { useState } from 'react';
import Weather from './Weather';
import classes from './Weather.module.css';

const TermoLine =(props)=>{
    const { children ,height} = props;
    const styles={height: height};
   return(   
         <div style={styles} className={classes.termoLineLevel}/>
   )
   }
   export default TermoLine;