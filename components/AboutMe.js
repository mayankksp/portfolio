'use client';
import React from 'react';
import Snowfall from 'react-snowfall';
import Image from 'next/image';

const AboutMe = () => {

    return (
        <section className='bg-about-me w-[31.25rem] bg-center bg-cover h-[75.688rem] transform -translate-y-20 text-white font-roboto text-center flex flex-col items-center'>
            <div className='bg-magical-underline bg-no-repeat bg-center w-full'>
                <h1 className='font-wonder-magic pt-56 text-7xl'><span className='text-magical-yellow'>About</span> Me</h1>
            </div>
            {/* <div className='w-full h-[40rem] bg-scroll h-96 bg-center bg-no-repeat' >
            
            </div> */}
            <div className="stage">
      <div className="mariposa">
        <div className="mariposa-turn">
          <div className="mariposa-flutter"></div>
        </div>
      </div>
    </div>
    <div className="holder">
  <div className="candle">
    <div clasName="blinking-glow"></div>
    <div className="thread"></div>
    <div className="glow"></div>
    <div className="flame"></div>
  </div>
</div>


    
        </section>
    )
}

export default AboutMe;