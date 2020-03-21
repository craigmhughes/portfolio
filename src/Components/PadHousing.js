import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { animated } from 'react-spring/three';

const PadHousing = ()=>{
    const [model, setModel] = useState();

    useEffect(()=>{
        if(!model){
        new GLTFLoader().load(require("../beat-pad.gltf"), (obj)=>{
            obj.scene.traverse((child)=>{
                if (!child.isMesh) return;
                child.material.wireframe = true;
            });
            setModel(obj);
        });
        }
    });

    return model ? <primitive object={model.scene} rotation-x={1}/> : null;
}

export default PadHousing;