import React from 'react';
import p from  '../../p.jpg';
import './intro.css';
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm a Dinesh</span>
        <p className="content"></p>
      </div>
      <img src={p} ait="image" className='bg'/>
    </section>
  )
}

export default Intro;