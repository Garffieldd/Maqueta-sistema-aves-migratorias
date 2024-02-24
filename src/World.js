

import { Center, OrbitControls, PointerLockControls, PresentationControls, Environment } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";
import Cigueña from "./modelos/Cigueña"
import { Vector3 } from "three";
import { Canvas } from '@react-three/fiber'
import Mapamundi from "./modelos/Mapamundi";
import Ocean from "./modelos/Ocean"
import Camada_cigueñas from "./modelos/Camada_cigueñas";
import Cloud from "./modelos/Cloud"

export function World(){
    
    const cigueñaRef = useRef()
    

    // Variable HDRI para el cielo
    const env = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/industrial_sunset_02_puresky_4k.hdr'

    // const {camera, gl} = useThree()
   
    useFrame((state, delta) => {
        
        const cigueña = cigueñaRef.current;

        
        const elapsedTime = state.clock.getElapsedTime();
        const radius = 60   ; 
        const posX = Math.cos(elapsedTime) * radius;
        const posZ = Math.sin(elapsedTime) * radius;

        if (cigueña) {
            const nextPosX = Math.cos(elapsedTime + delta) * radius;
            const nextPosZ = Math.sin(elapsedTime + delta) * radius;

            cigueña.position.x = posX;
            cigueña.position.z = posZ;

            cigueña.lookAt(new Vector3(nextPosX, cigueña.position.y, nextPosZ));
        }
    });
    
    return <>
        <OrbitControls
            enableRotate = {true}
        />  
       
       <ambientLight intensity={0.3} /> 

        <Environment files={env} ground={{ height: 5, radius: 4096, scale: 400 }}/>

        <mesh ref={cigueñaRef}>
        <Camada_cigueñas />
        </mesh>

        <Cloud/>

        <Mapamundi />
        
        <Ocean/>
        

        
    </>
}