import React, { Component } from 'react';

function About(params) {
    return (
        <React.Fragment>
            <h1 style={{margin : '20px' ,textAlign:"center" , textDecoration:'underline'}} > About</h1>
            <p style={{margin:'15px', textAlign:'center' ,fontSize:'20px'}}><span style={{fontSize:'30px'}}>T</span>odo Application v 1.0.0 done by waseem , I opted to keep it as simple as possible by adding the Todo list in the state (Localy) instead of fetching it using Axios HTTP library or fetch Api the regular javascript.</p>
        </React.Fragment>
    );
    
}

export default About ;