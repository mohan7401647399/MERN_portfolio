import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import isIslandScene from "../../assets/3d/island.glb";

function Sea({ isRotating, setIsRotating, setCurrentStage, ...props }) {
  const isLandRef = useRef();
  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(isIslandScene);
  const lastX = useRef(0)
  const rotatingSpeed = useRef(0)
  const dampingFactor = 0.95

  const handleMouseDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)
    const clientX = event.touches ? event.touches.clientX : event.clientX
    lastX.current = clientX
  }

  const handleMouseUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  const handleMouseMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX
      const delta = (clientX - lastX.current) / viewport.width
      isLandRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX
      rotatingSpeed.current = delta * 0.01 * Math.PI
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true)
      isLandRef.current.rotation.y += 0.005 * Math.PI
      rotatingSpeed.current = 0.007
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true)
      isLandRef.current.rotation.y -= 0.005 * Math.PI
      rotatingSpeed.current = -0.007
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") setIsRotating(false)
  }

  useEffect(() => {
    const canvas = gl.domElement

    canvas.addEventListener("pointerdown", handleMouseDown)
    canvas.addEventListener("pointerup", handleMouseUp)
    canvas.addEventListener("pointermove", handleMouseMove)
    canvas.addEventListener("keydown", handleKeyDown)
    canvas.addEventListener("keyup", handleKeyUp)

    return () => {
      canvas.removeEventListener("pointerdown", handleMouseDown)
      canvas.removeEventListener("pointerup", handleMouseUp)
      canvas.removeEventListener("pointermove", handleMouseMove)
      canvas.removeEventListener("keydown", handleKeyDown)
      canvas.removeEventListener("keyup", handleKeyUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, handleMouseDown, handleMouseMove, handleMouseUp])
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useFrame(() => {
    if (!isRotating) {
      rotatingSpeed.current *= dampingFactor
      if (Math.abs(rotatingSpeed.current) < 0.001) {
        rotatingSpeed.current = 0
      }
      isLandRef.current.rotation.y += rotatingSpeed.current
    } else {
      const rotation = isLandRef.current.rotation.y

      const normalization = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

      switch (true) {
        case normalization >= 5.45 && normalization <= 5.85:
          setCurrentStage(4);
          break;
        case normalization >= 0.85 && normalization <= 1.3:
          setCurrentStage(3);
          break;
        case normalization >= 2.4 && normalization <= 2.6:
          setCurrentStage(2);
          break;
        case normalization >= 4.25 && normalization <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }

  })

  return (
    <a.group {...props} ref={isLandRef}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}


export default Sea;