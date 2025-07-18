'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / document.documentElement.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0xffffff, 0); // transparent black
    renderer.setSize(window.innerWidth, document.documentElement.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // VHS wireframe grid parameters
    const gridRows = 32;
    const gridCols = 32;
    // Calculate cell size so grid cells are square
    const cellSize = Math.max(window.innerWidth / (gridCols * 14), window.innerHeight / (gridRows * 14));
    const gridWidth = cellSize * gridCols;
    const gridHeight = cellSize * gridRows;
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 });
    const lines: THREE.Line[] = [];

    // Create animated grid with wavy/jittered lines for VHS effect
    const horizontalPoints: THREE.Vector3[][] = [];
    const verticalPoints: THREE.Vector3[][] = [];
    for (let i = 0; i <= gridRows; i++) {
      const row: THREE.Vector3[] = [];
      for (let j = 0; j <= gridCols; j++) {
        const x = (j / gridCols) * gridWidth - gridWidth / 2;
        const y = (i / gridRows) * gridHeight - gridHeight / 2;
        row.push(new THREE.Vector3(x, y, 0));
      }
      horizontalPoints.push(row);
      const geometry = new THREE.BufferGeometry().setFromPoints(row);
      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);
      lines.push(line);
    }
    for (let j = 0; j <= gridCols; j++) {
      const col: THREE.Vector3[] = [];
      for (let i = 0; i <= gridRows; i++) {
        const x = (j / gridCols) * gridWidth - gridWidth / 2;
        const y = (i / gridRows) * gridHeight - gridHeight / 2;
        col.push(new THREE.Vector3(x, y, 0));
      }
      verticalPoints.push(col);
      const geometry = new THREE.BufferGeometry().setFromPoints(col);
      const line = new THREE.Line(geometry, lineMaterial);
      scene.add(line);
      lines.push(line);
    }
    // Store intersection points
    const intersectionMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.1,
      transparent: true,
      opacity: 0.5,
    });

    // Calculate intersection points (where grid lines cross)
    const intersectionPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= gridRows; i++) {
      for (let j = 0; j <= gridCols; j++) {
        const x = (j / gridCols) * gridWidth - gridWidth / 2;
        const y = (i / gridRows) * gridHeight - gridHeight / 2;
        intersectionPoints.push(new THREE.Vector3(x, y, 0));
      }
    }
    const intersectionsGeometry = new THREE.BufferGeometry().setFromPoints(intersectionPoints);
    const intersections = new THREE.Points(intersectionsGeometry, intersectionMaterial);
    scene.add(intersections);

    // Animation: animate distortion of grid lines
    const animate = () => {
      const time = performance.now() * 0.0003;
      // Animate horizontal lines
      horizontalPoints.forEach((row, i) => {
        row.forEach((point, j) => {
          point.y = (i / gridRows) * gridHeight - gridHeight / 2
            + Math.sin(j * 0.5 + i + time * 2) * 0.22
            + Math.sin(time * 3 + i * 0.3 + j * 0.2) * 0.08
            + (Math.random() - 0.5) * 0.02;
        });
        (lines[i].geometry as THREE.BufferGeometry).setFromPoints(row);
      });
      // Animate vertical lines
      verticalPoints.forEach((col, j) => {
        col.forEach((point, i) => {
          point.x = (j / gridCols) * gridWidth - gridWidth / 2
            + Math.sin(i * 0.5 + j + time * 2) * 0.22
            + Math.sin(time * 2 + j * 0.3 + i * 0.2) * 0.08
            + (Math.random() - 0.5) * 0.02;
        });
        (lines[gridRows + 1 + j].geometry as THREE.BufferGeometry).setFromPoints(col);
      });

      // Animate intersection points to follow the grid distortion
      const updatedIntersections: THREE.Vector3[] = [];
      for (let i = 0; i <= gridRows; i++) {
        for (let j = 0; j <= gridCols; j++) {
          const x = verticalPoints[j][i].x;
          const y = horizontalPoints[i][j].y;
          updatedIntersections.push(new THREE.Vector3(x, y, 0));
        }
      }
      intersectionsGeometry.setFromPoints(updatedIntersections);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / document.documentElement.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, document.documentElement.clientHeight);
    };
    window.addEventListener('resize', handleResize);



    // Clean up
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      lines.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}