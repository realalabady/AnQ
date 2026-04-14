"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points[];
    animationId: number;
    count: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    camera.position.set(0, 355, 1220);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    containerRef.current.appendChild(renderer.domElement);

    // Create canvas textures for "0" and "1"
    function createDigitTexture(digit: string, color = "#ffffff") {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, 64, 64);
      ctx.fillStyle = color;
      ctx.font = "bold 48px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(digit, 32, 32);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }

    const tex0 = createDigitTexture("0", "#ffffff");
    const tex1 = createDigitTexture("1", "#22c55e");

    // All particles share the same positions
    const totalParticles = AMOUNTX * AMOUNTY;
    const positions: number[] = [];
    // Each particle gets a random phase offset so they flip independently
    const phaseOffsets = new Float32Array(totalParticles);

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        // Pseudo-random phase per particle (0 to 2π)
        phaseOffsets[ix * AMOUNTY + iy] =
          ((ix * 137 + iy * 251 + ix * iy * 31) % 1000) / 1000 * Math.PI * 2;
      }
    }

    // Custom shader material for layer "0" — visible when sin(time + phase) > 0
    const vertexShader = `
      attribute float phase;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        float cycle = sin(uTime * 1.5 + phase);
        vAlpha = smoothstep(0.0, 0.3, cycle) * 0.9;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 30.0 * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader0 = `
      uniform sampler2D uTexture;
      varying float vAlpha;
      void main() {
        vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
        vec4 tex = texture2D(uTexture, uv);
        if (tex.a < 0.01 || vAlpha < 0.01) discard;
        gl_FragColor = vec4(tex.rgb, tex.a * vAlpha);
      }
    `;

    // Layer "1" — visible when sin(time + phase) < 0 (inverted)
    const vertexShader1 = `
      attribute float phase;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        float cycle = sin(uTime * 1.5 + phase);
        vAlpha = smoothstep(0.0, 0.3, -cycle) * 0.9;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 30.0 * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const geometry0 = new THREE.BufferGeometry();
    geometry0.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Float32Array(positions), 3),
    );
    geometry0.setAttribute(
      "phase",
      new THREE.Float32BufferAttribute(new Float32Array(phaseOffsets), 1),
    );

    const geometry1 = new THREE.BufferGeometry();
    geometry1.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(new Float32Array(positions), 3),
    );
    geometry1.setAttribute(
      "phase",
      new THREE.Float32BufferAttribute(new Float32Array(phaseOffsets), 1),
    );

    const shaderMat0 = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: tex0 },
      },
      vertexShader,
      fragmentShader: fragmentShader0,
      transparent: true,
      depthWrite: false,
    });

    const shaderMat1 = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: tex1 },
      },
      vertexShader: vertexShader1,
      fragmentShader: fragmentShader0,
      transparent: true,
      depthWrite: false,
    });

    const points0 = new THREE.Points(geometry0, shaderMat0);
    const points1 = new THREE.Points(geometry1, shaderMat1);
    scene.add(points0);
    scene.add(points1);

    const clock = new THREE.Clock();
    let animationId: number | undefined;

    // Animation function
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Update shader time uniform
      shaderMat0.uniforms.uTime.value = time;
      shaderMat1.uniforms.uTime.value = time;

      // Animate Y positions (wave motion)
      const pos0 = geometry0.attributes.position.array as Float32Array;
      const pos1 = geometry1.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const index = i * 3;
          const y =
            Math.sin((ix + time * 2) * 0.3) * 50 +
            Math.sin((iy + time * 2) * 0.5) * 50;
          pos0[index + 1] = y;
          pos1[index + 1] = y;
          i++;
        }
      }
      geometry0.attributes.position.needsUpdate = true;
      geometry1.attributes.position.needsUpdate = true;

      points0.rotation.y = time * 0.1;
      points1.rotation.y = time * 0.1;
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles: [points0, points1],
      animationId: animationId ?? 0,
      count: 0,
    };

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      if (sceneRef.current) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }

        // Clean up Three.js objects
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Points) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => {
                if ((mat as THREE.PointsMaterial).map)
                  (mat as THREE.PointsMaterial).map!.dispose();
                mat.dispose();
              });
            } else {
              if ((object.material as THREE.PointsMaterial).map)
                (object.material as THREE.PointsMaterial).map!.dispose();
              object.material.dispose();
            }
          }
        });

        sceneRef.current.renderer.dispose();

        if (containerRef.current && sceneRef.current.renderer.domElement) {
          containerRef.current.removeChild(
            sceneRef.current.renderer.domElement,
          );
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-1 overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}
