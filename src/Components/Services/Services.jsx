import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf';

function Services() {
  return (
    <div className='services' id='services'>
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>MERN Stack Development <br /> ( Frontend & Backend )</span>
        <a href={Resume} download><button className='button s-button'>Download CV</button></a>
        {/* <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div> */}
      </div>
      <div className="cards">
        <div >
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            details = {"Chakra UI, Material UI, Styled-Components, Bootstrap & more"}
            />
        </div>
        <div >
            <Card
            emoji = {Glasses}
            heading = {'Development'}
            details = {"HTML, CSS, JavaScript, React, Redux, NodeJs, ExpressJs, MongoDB, Mongoose"}
            />
        </div>
        <div >
            <Card
            emoji = {Humble}
            heading = {'Tools | USE'}
            details = {"VS Code, Git, Postman, Github, NPM, Yarn"}
            />
        </div>
        {/* <div className="blur s-blur2" style={{ background:"var(--purple)" }}></div> */}
      </div>
    </div>
  )
}

export default Services;
