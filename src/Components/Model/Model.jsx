import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import chair from "../../Assets/office/chair-4.avif"
export const Model = ({ color }) => {
  const texture = useLoader(THREE.TextureLoader, chair);

  return (
    <mesh>
        <planeGeometry args={[6, 6]} /> 
      <meshStandardMaterial color={color} map={texture} />
    </mesh>
  );
};