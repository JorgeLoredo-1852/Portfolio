/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/PilarVitale.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group001.geometry}
        material={materials["Material.005"]}
        position={[1.07, 19.44, -1.02]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group002.geometry}
        material={nodes.MedGlobal_Group002.material}
        position={[1.07, 13.98, 1.58]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group003.geometry}
        material={nodes.MedGlobal_Group003.material}
        position={[1.07, 37.09, 4.03]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MedGlobal_Group004.geometry}
        material={nodes.MedGlobal_Group004.material}
        position={[1.07, 20.27, -3.75]}
        rotation={[0, 0, -Math.PI / 2]}
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
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.001"]}
        position={[1.56, 33.52, 3.82]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[700, 1, 700]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.002"]}
        position={[1.56, 33.52, 3.82]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[700, 1, 700]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.003"]}
        position={[1.56, 33.52, 3.82]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[700, 1, 700]}
      />
    </group>
  );
}

useGLTF.preload("/PilarVitale.glb");
