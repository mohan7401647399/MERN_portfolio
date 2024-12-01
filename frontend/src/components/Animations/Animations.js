import React, { Fragment, Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import Sea from '../models/Sea'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from './HomeInfo'

const Animations = () => {

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    //  Adjust screen size
    const adjustSeaScreeSize = () => {
        let screenScale, screenPosition
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
            screenPosition = [0, -0.6, -43.4]
        } else {
            screenScale = [1, 1, 1]
            screenPosition = [0, -6.5, -43.4]
        }
        return [screenScale, screenPosition]
    }

    //  Adjust screen size
    const adjustPlaneScreenSize = () => {
        let screenScale, screenPosition
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
    }

    const [isSeaScale, isSeaPosition] = adjustSeaScreeSize()
    const [planeScale, planePosition] = adjustPlaneScreenSize()

    return (
        <>
            <div className='w-full h-screen relative' >
                <div className='absolute top-2 left-0 right-0 z-10 flex items-center justify-center'>
                    {currentStage && <HomeInfo currentStage={currentStage} />}
                </div>
                <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }} className={`w-fit h-fit bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 5, 10]} intensity={2} />
                        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                        <hemisphereLight skyColor="#ble1ff" groundColor="#000000" intensity={1} />
                        <Sky isRotating={isRotating} />
                        <Sea screenScale={isSeaScale} position={isSeaPosition} rotation={[0.1, 4.7077, 0]} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
                        <Bird />
                        <Plane position={planePosition} scale={planeScale} isRotating={isRotating} rotation={[0, 20.1, 0]} />
                    </Suspense>
                </Canvas>
            </div >
        </>
    )
}

export default Animations;
