import { Grid } from "@mui/material"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import { Box } from "@mui/system"


export const FeaturedProjects = () => {
    return (
    <>
        <ambientLight intensity={0.5} />
        <OrbitControls maxPolarAngle={Math.PI / 2 - Math.PI / 12} enableZoom={false} minPolarAngle={Math.PI / 2 - Math.PI / 12}></OrbitControls>
        <Environment preset="forest" blur={0.5}/>
        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>
    </>
    )
}
