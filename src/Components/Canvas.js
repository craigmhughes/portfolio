import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useLoader, useFrame, useUpdate, useThree } from 'react-three-fiber'
import { useSpring, config, animated } from 'react-spring/three'

import PadHousing from './PadHousing'
/**
 * Game camera, placed looking at center.
 */
const Camera = () => {
    const three = useThree();
    const camera = three.camera;
    camera.position.z = 2.5;
    camera.position.y = 0;
    three.gl.setSize(window.innerWidth, window.innerHeight);

    return null;
};


export default function RenderCanvas(){

    const [props, set] = useSpring(() => ({
        scale: [1, 1, 1],
        rotation: [0, 0, 0],
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
      }))

    return(
        <Canvas onCreated={({ gl }) => ((gl.shadowMap.enabled = true), (gl.shadowMap.type = THREE.PCFSoftShadowMap))}
            className="Canvas" onMouseMove={({ clientX, clientY }) => {
                const x = (clientX / window.innerWidth) * 2 - 1
                const y = -(clientY / window.innerHeight) * 2 + 1
        
                set({
                  scale: [0.75 - y * 0.1, 0.75 - y * 0.1, 0.75],
                  rotation: [-y * (Math.PI / 3) * 0.3, x * (Math.PI / 3) * 0.3, 0]
                })
              }}>
            <Camera/>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.5} position={[20, 5, 10]} angle={0.2} penumbra={1} castShadow />

            <animated.mesh {...props}>
                <PadHousing/>
            </animated.mesh>
            
        </Canvas>
    );
}