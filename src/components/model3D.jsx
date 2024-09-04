import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Model3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Escena
    const scene = new THREE.Scene();

    // Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.95, window.innerHeight * 0.95);
    renderer.setClearColor(0x000000, 0); // Color de fondo transparente
    mountRef.current.appendChild(renderer.domElement);

    // Geometría del cubo
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);

    // Geometría de los bordes
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);

    // Añadir el cubo y los bordes a la escena
    scene.add(cube);
    scene.add(wireframe);

    // Animación
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      wireframe.rotation.x += 0.01;
      wireframe.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Limpiar el renderizador al desmontar el componente
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
}

export default Model3D;
