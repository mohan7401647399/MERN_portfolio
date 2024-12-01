import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../../assets/icons/arrow.svg'

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1) {
        return (
            <div className='info-box'>
                <p className='font-mono text-center'>
                    Hi, I'm
                    <span className='font-semibold mx-2 text-white'>Mohan 👋</span>
                    <br />
                    A Software Developer from India
                    <br />
                </p>
                <Link to="/home" className='neo-brutalism-white neo-btn flex items-center justify-center gap-3'>
                    HomePage
                    <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
                </Link>
            </div>
        )
    } else if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-mono text-center'>
                    With specialized skills, <br /> MERN specializes in web development
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
                <p className='font-mono text-center'>
                    May many projects succeed in the year <br /> and work with many projects
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
                <p className=' font-mono text-center'>
                    Want to make a project or looking for a dev? <br /> I'm still in a few keystrokes
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
