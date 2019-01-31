import React, { Component } from 'react';
import {Link} from 'react-router-dom';
function Header(){

    return(
        <header style={HeaderStyle}>
            <h1 style={HeaderStyle}>Todo Application </h1>
            <Link to={"/"} className="links" >Home</Link> - <Link to={"/about"} className="links">About</Link>
        </header>
    );

}
const HeaderStyle ={
        background:'#519872',
        textAlign: 'center',
        color:'#FFFFFF',
        padding:'15px'
}
export default Header ;