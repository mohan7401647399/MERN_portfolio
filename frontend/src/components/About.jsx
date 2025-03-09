import React from 'react';

export default function About() {
    return (
        <section id="about" className="flex justify-center items-center min-h-screen bg-gray-900 text-white px-5">
            <div className="max-w-3xl p-8 rounded-lg shadow-lg border border-blue-500 bg-gray-800 text-center transform transition duration-500 hover:scale-105">
                {/* Title */ }
                <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>

                {/* Introduction */ }
                <p className="text-lg text-gray-300 leading-relaxed">
                    👋 Hello! I'm <span className="text-blue-300 font-semibold">Mohan</span>, a passionate **MERN Stack Developer** with expertise in **MongoDB, Express.js, React, and Node.js**.
                    I specialize in crafting high-performance **full-stack web applications** that seamlessly integrate both frontend and backend technologies.
                </p>

                {/* Skills & Passion */ }
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                    🚀 I enjoy solving complex problems, optimizing user experiences, and staying ahead in the **ever-evolving world of web technologies**.
                    I love learning new frameworks and contributing to **open-source projects**.
                </p>

                {/* Call to Action */ }
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                    🤝 Looking for collaboration? Feel free to <span className="text-blue-300 font-semibold">connect with me</span> for **exciting projects and new opportunities**!
                </p>
            </div>
        </section>
    );
}
