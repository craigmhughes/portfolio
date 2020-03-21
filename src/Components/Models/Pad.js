import React, { useRef, useState } from 'react';
import { useSpring, a } from 'react-spring/three';

/**
 * Model representation of the counters variable found in Game.js
 * 
 * @param {col, row} = Defines where pad is in grid
 */
const Pad = ({col, row, id})=>{

    const padSamples = [
        "bass_1", "bass_2", "bass_3", "ride_1",
        "precussion_1", "precussion_2", "precussion_3", "snap_1",
        "snap_2", "snare_1", "hat_1", "hat_2",
        "kick_1", "kick_2", "clap_1", "clap_2"
    ];

    const sound = new Audio(require(`../../Samples/${padSamples[id]}.wav`));

    const [hit, setHit] = useState(false);
    const handleClick = ()=>{
        setHit(true);
        sound.play();
        setTimeout(()=>setHit(false), 500);
    };

    const props = useSpring({
        color: hit ? "#fff" : "#222"
    });

    return (
        <a.mesh onClick={()=>handleClick()} rotation-x={1} position={[-0.49 + (0.325 * col), 0.5 - (0.26 * row), -0.1 + (0.18 * row)]}>
            <boxGeometry attach="geometry" args={[0.25,0.125,0.25]} />
            <a.meshPhongMaterial attach="material" color={props.color} wireframe={true}/>
        </a.mesh>
    )
}

export default Pad;