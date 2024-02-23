

import { Center, OrbitControls, PointerLockControls, PresentationControls, Environment } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import { useRef } from "react";
import Cigueña from "./modelos/Cigueña"
import { Vector3 } from "three";
import { Canvas } from '@react-three/fiber'

export function World(){
    
    const cigueñaRef = useRef()

    // Variable HDRI para el cielo
    const env = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/industrial_sunset_02_puresky_4k.hdr'

    // const {camera, gl} = useThree()
   
    useFrame((state, delta) => {
        
        const cigueña = cigueñaRef.current;

        
        const elapsedTime = state.clock.getElapsedTime();
        const radius = 20   ; 
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
        <ambientLight/>
        
        <directionalLight position={[10, 3, 3]} intensity={1.5} />

        <Environment files={env} ground={{ height: 5, radius: 4096, scale: 400 }}/>

        <mesh ref={cigueñaRef}>
        <Cigueña />
        </mesh>
        
        
    </>
}