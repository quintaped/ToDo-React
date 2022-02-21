import React from "react";
import logo from './logo.svg';
function Header(props){
    const style={
        width:props.logoWidth

    }
    return (
        <div> 
            <img src={logo} style={style}/> 
            {props.titleText}
        </div>
    );
}
export default Header;