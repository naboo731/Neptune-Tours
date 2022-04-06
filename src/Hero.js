import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
import ReactPlayer from 'react-player'
import heroVideo from './images/herovid.mp4'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <ReactPlayer url={heroVideo} playing loop muted width="100%" height="100%"/>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Exploring the World 
            made simpler
          </h1>
          <p>
            Want to get away but don't know where to start? Rimor is here to help! <br/>
            Book with Rimor and gain expert insight, irresistible rates, and 
            help every step of the way to give you peace of mind. Happy travels!
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
