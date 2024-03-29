/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/PilarMedglobal3.glb");
  return (
<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group001.geometry}
        material={materials["Material.005"]}
        position={[1.07, 16.51, 5.73]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group002.geometry}
        material={nodes.MedGlobal_Group002.material}
        position={[1.07, 14.45, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group003.geometry}
        material={nodes.MedGlobal_Group003.material}
        position={[1.07, 37.29, 7.94]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group004.geometry}
        material={nodes.MedGlobal_Group004.material}
        position={[1.07, 18.67, 6.74]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <group scale={[1, 40, 8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[1, 28.21, 0]}
        scale={[0.2, 7, 7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path19.geometry}
        material={materials["Material.003"]}
        position={[1.62, 21.85, 5.48]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1000, 1, 1000]}
      />
    </group>
  );
}

useGLTF.preload("/PilarMedglobal3.glb");
