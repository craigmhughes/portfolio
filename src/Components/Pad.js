import React, { useRef, useState } from 'react';
import { useSpring, a } from 'react-spring/three';

/**
 * Model representation of the counters variable found in Game.js
 * 
 * @param {*} param0 = States from parent
 */
const Pad = ({col, row})=>{

    

    const [hit, setHit] = useState(false);
    const handleClick = ()=>{
        setHit(true);
        setTimeout(()=>setHit(false), 250);
    };

    const props = useSpring({
        color: hit ? "red" : "#e5e5e5",
    });

    return (
        <a.mesh onClick={()=>handleClick()} rotation-x={1} position={[-0.49 + (0.325 * col), 0.5 - (0.26 * row), -0.1 + (0.18 * row)]}>
            <boxGeometry attach="geometry" args={[0.25,0.125,0.25]} />
            <a.meshPhongMaterial attach="material" color={props.color}/>
        </a.mesh>
    )
}

export default Pad;