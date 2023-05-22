import React from 'react';
import './Footer.css';
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMailOpen } from 'react-icons/hi';

function Footer() {
  return (
    <div className='footer' >
        <div style={{fontSize:'16px'}}>© 2022</div>
        <div style={{fontSize:'16px'}}>Design and Developed by Akash Kumawat</div>
        <div className='socials-icon'>
            <a href="https://wa.me/919079938742" target='_blank' rel="noreferrer"><SiWhatsapp size={'18px'} /></a>
            <a href="mailto:akashkmt963@gmail.com" target='_blank' rel="noreferrer"><HiOutlineMailOpen size={'22px'}/></a>
            <a href="https://linkedin.com/in/akashkmt" target='_blank' rel="noreferrer"><SiLinkedin size={'18px'}/></a>
            <a href="https://github.com/akashkmt" target='_blank' rel="noreferrer"><SiGithub size={'20px'}/></a>
        </div>
    </div>
  )
}

export default Footer