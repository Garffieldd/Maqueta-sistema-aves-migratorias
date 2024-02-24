import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cloud(props) {
  const { nodes, materials } = useGLTF("./static/nube.glb");
  return (
    <group {...props} dispose={null} position={[-70,80,-50]} scale={90}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloud_Polygon_Blender_1.geometry}
        material={materials.Cloud}
      />
    </group>
  );
}

useGLTF.preload("./static/nube.glb");