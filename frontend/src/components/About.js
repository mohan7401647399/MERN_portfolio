import React from 'react'
// import GithubCalender from './GithubCalender'

export default function About() {
    return (
        <>
            <div id='about' className='text-center' style={{ backgroundColor: "rgba(255, 99, 71,0.2)" }}>
                <div className='m-5 p-3'>
                    <h1>About Me</h1>
                    <p>Hello! I'm Mohan, a passionate MERN stack developer with experience in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I have a strong foundation in both frontend and backend development, allowing me to create dynamic and responsive web applications that meet user needs and business goals.</p>
                    <p>I'm constantly seeking new challenges and opportunities to expand my knowledge and skills in web development. I enjoy learning about emerging technologies and trends to stay updated in the fast-paced world of tech.</p>
                    <p> Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to connect or collaborate, please don't hesitate to reach out!</p>
                </div>
            </div>
            {/* <GithubCalender /> */}
        </>
    )
}
