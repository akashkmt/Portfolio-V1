import React from 'react';
import './Contact.css';
import {IoCall} from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { SyncLoader } from 'react-spinners';


function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1 className='c-title'>CONTACT</h1>
      <div className='contact-part'>
        <div className='c-left'>
        <img src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966" alt="" />
        </div>
        <div className='c-right'>
        <p><IoCall style={{marginTop:'2px'}} /><a href='/'>+91 9079938742</a></p>
          <p><HiOutlineMail style={{marginTop:'2px'}} /><a href="mailto:akashkmt963@gmail.com" target='blank'>akashkmt963@gmail.com</a></p>
          <p><BsLinkedin style={{marginTop:'2px'}} /><a href="https://www.linkedin.com/in/akashkmt/" target='blank'>https://www.linkedin.com/in/akashkmt/</a></p>
          <p><AiFillGithub style={{marginTop:'2px'}} /><a href="https://github.com/akashkmt/" target='blank'>https://github.com/akashkmt/</a></p>
        </div>
      </div>
      <br />
      <div style={{display:"flex",justifyContent:"center"}}><SyncLoader /></div>
      <h1 className='c-title' style={{marginBottom:'0px'}}>Thank you</h1>
      {/* <p className='footer-part'>Design and Developed by Akash Kumawat</p> */}
    </div>
  )
}

export default Contact
