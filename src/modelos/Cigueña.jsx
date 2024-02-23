
import React, { useRef } from "react";
import { useGLTF , useAnimations} from "@react-three/drei";

export default function Cigueña(props) {
 // const group = useRef();
  const { nodes, materials, animations } = useGLTF("./static/ganso.glb");
  //const { actions } = useAnimations(animations, group);
  //console.log(actions)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ganso.geometry}
        material={materials.Material__2}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
        position={[0,20,0]}
        
      />
    </group>
  );
}

useGLTF.preload("./static/ganso.glb");