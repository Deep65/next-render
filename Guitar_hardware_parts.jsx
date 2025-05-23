/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 next-render\public\guitar_hardware_parts.glb 
Author: Hineline (https://sketchfab.com/hineline)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/guitar-hardware-parts-5d796fed130941d2a9da71f052d1a97a
Title: Guitar hardware parts
*/
"use client";
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Guitar(props) {
  const { nodes, materials } = useGLTF('/guitar_hardware_parts.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Helix__0.geometry} material={materials['Scene_-_Root']} position={[10, 0, 0]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
        <mesh geometry={nodes.Cylinder004__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Sphere__0.geometry} material={materials['Scene_-_Root']} position={[20, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Helix001__0.geometry} material={materials['Scene_-_Root']} position={[20, 0, 0]} rotation={[Math.PI, 0, Math.PI]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/guitar_hardware_parts.glb')
