import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from '../../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef()
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    //  Play animation
    useEffect(() => {
        if (isRotating) {
            actions["Take 001"].play()
        } else {
            actions["Take 001"].stop()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actions, isRotating])
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane
