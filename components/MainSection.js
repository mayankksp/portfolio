'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Snowfall from 'react-snowfall';

const MainSection = () => {
    return (
        <section className='bg-main-image h-[69.75rem] w-[31.25rem] bg-center bg-cover font-roboto text-white text-center flex flex-col items-center'>
            <div className='pt-[1.191rem] px-[1.939rem] flex justify-between w-full items-center'>
                <h1 className='text-6xl uppercase font-wonder-magic'>MK</h1>
                <div className='bg-magical-yellow rounded-md'><Icon className='p-1' icon="icon-park-outline:hamburger-button" color="white" width="36.98" height="35.94" /></div>
            </div>
            <h1 className='font-wonder-magic text-6xl mt-12 px-12'>I am a <br /><span className='text-magical-yellow'>Full Stack Web Dev</span></h1>
            <p className='px-12 leading-7 mt-4'>Hello, I am Mayank Kashyap. I&apos;m currently in my final year of studies at Chandigarh University, Punjab. I have a passion for developing software applications, a field that I have come to love. There&apos;s nothing more fulfilling to me than the realization of my imagination into functional, tangible software. This satisfaction fuels my enthusiasm and dedication towards my work in computer science.</p>
            <Image src='/images/Center Image.png' alt='arrow-down' width='241' height='248' className='mt-12 z-10 hovering-animation' />
            <Snowfall color='#FFC70A' snowflakeCount={20}
                style={{ position: 'absolute', top: 700, left: 120, width: 250, height: 350 }}
            />
            <div className='grid grid-cols-1 w-full mt-12'>
                <div className='flex justify-between w-full px-12'>
                    <div className='w-32'>
                        <h3 className='text-6xl font-wonder-magic text-magical-yellow'>1000<span className='font-roboto'><sup>+</sup></span></h3>
                        <p>CodeForces Rating</p>
                    </div>
                    <div className='w-32'>
                        <h3 className='text-6xl font-wonder-magic text-magical-yellow'>1600<span className='font-roboto'><sup>+</sup></span></h3>
                        <p>CodeChef Rating</p>
                    </div>
                </div>
                <div className='flex justify-between w-full mt-16 px-16'>
                    <div className='w-32'>
                        <h3 className='text-7xl font-wonder-magic text-magical-yellow'>30<span className='font-roboto'><sup>+</sup></span></h3>
                        <p>Leetcode Questions Solved</p>
                    </div>
                    <div className='w-32'>
                        <h3 className='text-7xl font-wonder-magic text-magical-yellow'>300<span className='font-roboto'><sup>+</sup></span></h3>
                        <p>GeeksforGeeks Questions Solved</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection;