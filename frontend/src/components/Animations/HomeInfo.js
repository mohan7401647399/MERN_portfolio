import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../../assets/icons/arrow.svg'

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Hi, I'm
                    <span className='font-semibold mx-2 text-white'>Mohan</span>
                    <br />
                    A Software Developer from India
                    <br />
                </p>
                <Link to="/home" className='neo-brutalism-white neo-btn flex items-center gap-3'>
                    HomePage
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    } else if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Worked with many companies <br /> and picked up many skills along the way
                </p>
                <Link to="/skills" className='neo-brutalism-white neo-btn flex items-center justify-center gap-3'>
                    Skills
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    } else if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Let's multiple projects to success over the year <br /> Curious about the impact?
                </p>
                <Link to="/projects" className='neo-brutalism-white neo-btn flex items-center justify-center gap-3'>
                    Projects
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    } else if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I'm Just a few keystrokes away
                </p>
                <Link to="/contact" className='neo-brutalism-white neo-btn flex items-center justify-center gap-3'>
                    Contact
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    }
    return null
}

export default HomeInfo
