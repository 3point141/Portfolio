import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolioStore } from '../../store/portfolioStore';

export function Scene() {
  const sceneRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { performanceMode, currentSection } = usePortfolioStore();
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll velocity
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = Math.abs(currentScrollY - lastScrollY.current);
      setScrollVelocity(velocity);
      lastScrollY.current = currentScrollY;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Reset velocity after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        setScrollVelocity(0);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  useFrame((state) => {
    if (sceneRef.current) {
      // Subtle rotation based on current section
      sceneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }

    if (particlesRef.current) {
      // Animate particles - slower when scrolling
      const baseSpeed = 0.001;
      const scrollMultiplier = scrollVelocity > 0 ? 0.3 : 1; // 70% slower when scrolling
      particlesRef.current.rotation.y += baseSpeed * scrollMultiplier;
      particlesRef.current.rotation.x += 0.0005 * scrollMultiplier;
    }
  });

  return (
    <group ref={sceneRef}>
      {/* Environment */}
      <Environment 
        preset="night" 
        background={false}
        blur={performanceMode === 'low' ? 0.5 : 0.1}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow={performanceMode !== 'low'}
        shadow-mapSize-width={performanceMode === 'high' ? 2048 : 1024}
        shadow-mapSize-height={performanceMode === 'high' ? 2048 : 1024}
      />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      {/* Floating 3D Text */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.1]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      </Float>

      {/* Floating Geometric Shapes */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[2, -1, 0]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#64748b" wireframe />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh position={[-1, -2, 1]}>
          <dodecahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#64748b" wireframe />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.4}>
        <mesh position={[1.5, 2, -1]}>
          <icosahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#64748b" wireframe />
        </mesh>
      </Float>

      {/* Particle System */}
      <ParticleSystem count={performanceMode === 'high' ? 1000 : 500} />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      
      {/* Section-specific 3D content will be added here */}
      <SectionContent />
    </group>
  );
}

// Particle System Component
function ParticleSystem({ count = 500 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll velocity for this component too
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const velocity = Math.abs(currentScrollY - lastScrollY.current);
      setScrollVelocity(velocity);
      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setScrollVelocity(0);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
  
  useFrame((state) => {
    if (particlesRef.current) {
      const baseSpeed = 0.001;
      const scrollMultiplier = scrollVelocity > 0 ? 0.3 : 1; // 70% slower when scrolling
      particlesRef.current.rotation.y += baseSpeed * scrollMultiplier;
    }
  });

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3] = Math.random() * 0.5 + 0.5; // R
    colors[i * 3 + 1] = Math.random() * 0.5 + 0.5; // G
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
      />
    </points>
  );
}

function SectionContent() {
  const { currentSection } = usePortfolioStore();

  // Render different 3D content based on current section
  switch (currentSection) {
    case 0: // Hero
      return <HeroContent />;
    case 1: // Education
      return <EducationContent />;
    case 2: // Career
      return <CareerContent />;
    case 3: // Projects
      return <ProjectsContent />;
    case 4: // Skills
      return <SkillsContent />;
    case 5: // Impact
      return <ImpactContent />;
    case 6: // Contact
      return <ContactContent />;
    default:
      return null;
  }
}

// Placeholder components for each section's 3D content
function HeroContent() {
  return (
    <group>
      {/* 3D text and floating elements will be added here */}
    </group>
  );
}

function EducationContent() {
  return (
    <group>
      {/* 3D buildings and educational elements */}
    </group>
  );
}

function CareerContent() {
  return (
    <group>
      {/* 3D office environments */}
    </group>
  );
}

function ProjectsContent() {
  return (
    <group>
      {/* 3D project workspaces */}
    </group>
  );
}

function SkillsContent() {
  return (
    <group>
      {/* 3D skill constellation */}
    </group>
  );
}

function ImpactContent() {
  return (
    <group>
      {/* 3D metrics and charts */}
    </group>
  );
}

function ContactContent() {
  return (
    <group>
      {/* 3D contact portal */}
    </group>
  );
} 