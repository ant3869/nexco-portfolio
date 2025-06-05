import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  useEffect(() => {
    if (!pointsRef.current) return;
    
    // Create points around the globe
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const style = getComputedStyle(document.documentElement);
    const primary = new THREE.Color(`hsl(${style.getPropertyValue('--primary')})`);
    const accent = new THREE.Color(`hsl(${style.getPropertyValue('--accent')})`);
    const color = new THREE.Color();
    
    for (let i = 0; i < 2000; i++) {
      const radius = 1.2;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      
      positions.push(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      );
      
      // Random color between primary and accent
      color.copy(primary).lerp(accent, Math.random());
      colors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    pointsRef.current.geometry = geometry;
  }, []);
  
  useFrame(({ clock }) => {
    if (!globeRef.current || !pointsRef.current) return;

    // Rotate the globe
    globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;

    const material = pointsRef.current.material as THREE.PointsMaterial;
    const hsl = { h: 0, s: 0, l: 0 } as THREE.HSL;
    material.color.getHSL(hsl);
    hsl.h = (hsl.h + 0.0005) % 1;
    material.color.setHSL(hsl.h, hsl.s, hsl.l);
  });
  
  return (
    <group>
      <Sphere ref={globeRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#1e40af"
          transparent
          opacity={0.2}
          wireframe
        />
      </Sphere>
      
      <points ref={pointsRef}>
        <pointsMaterial
          size={0.015}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}