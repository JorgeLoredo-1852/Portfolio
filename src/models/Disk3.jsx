
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/disks/disk3.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.17, -0.3, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gameboy_chip_v1_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gameboy_chip_v1_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.004"]}
        position={[0, 0.07, 0.42]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.12, 1, 0.99]}
      />
    </group>
  );
}

useGLTF.preload("/disks/disk3.glb");
