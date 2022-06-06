import React from "react";
import logo from './logo.svg';
//     
const Footer = (props) =>{
    // const currentDate = new Date();
    // const year =currentDate.getFullYear();
    const style={
      width:props.logoWidth

  }
    return (
      <img src={logo} style={style}/> ,
        {props}
    )
}
 export default Footer;