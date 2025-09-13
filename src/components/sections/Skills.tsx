import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// All Skills Data
const allSkills = [
  // Product Management Skills
  "Product Strategy", "Vision & Roadmapping", "User-Centric Design", "Go-to-Market Planning", "Experimentation Frameworks", "Market Research", "Competitive Analysis", "Feature Prioritization",
  // Technical Skills  
  "SQL", "APIs", "System Design Fundamentals", "Data Analytics", "A/B & Multivariate Testing", "Automation (n8n)", "Rapid Prototyping (Vibe Coding)", "Python", "JavaScript", "Database Design", "Cloud Architecture",
  // Leadership & Collaboration Skills
  "Stakeholder Alignment", "Cross-Functional Team Leadership", "Agile/Scrum", "Sprint Planning", "Backlog Prioritization", "Mentorship", "Project Management", "Team Building", "Conflict Resolution", "Strategic Planning"
];

// Generate sphere positions for skills
const generateSpherePositions = (radius: number) => {
  const positions: Array<{ position: [number, number, number]; skill: string; color: string }> = [];
  
  allSkills.forEach((skill, index) => {
    // Use Fibonacci spiral for even distribution
    const phi = Math.acos(-1 + (2 * index) / allSkills.length);
    const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
    
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    
    // Determine color based on skill category
    let color = "#6B7280"; // Default gray
    if (index < 8) color = "#3B82F6"; // Product Management - Blue (8 skills)
    else if (index < 18) color = "#10B981"; // Technical - Green (10 skills)
    else color = "#F59E0B"; // Leadership - Orange (10 skills)
    
    positions.push({
      position: [x, y, z],
      skill,
      color
    });
  });
  
  return positions;
};

// Skill Node Component
function SkillNode({ position, skill, color, hoveredNode, setHoveredNode }: {
  position: [number, number, number];
  skill: string;
  color: string;
  hoveredNode: string | null;
  setHoveredNode: (skill: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredNode === skill;
  
  useFrame((state) => {
    if (meshRef.current) {
      // Subtle pulsing animation while staying on sphere surface
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
      meshRef.current.scale.setScalar(pulse);
    }
    
    if (textRef.current) {
      // Make text always face the camera
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHoveredNode(skill)}
        onPointerLeave={() => setHoveredNode(null)}
        scale={isHovered ? 1.5 : 1}
      >
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={isHovered ? 0.4 : 0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Skill text positioned outside sphere */}
      <Text
        ref={textRef}
        position={[0, 0.4, 0]}
        fontSize={0.12}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.5}
        material-opacity={isHovered ? 1 : 0.8}
        renderOrder={1000}
        material-transparent={true}
        material-depthTest={false}
        material-depthWrite={false}
      >
        {skill}
      </Text>
    </group>
  );
}

// Flying Astronaut Component
function FlyingAstronaut() {
  const astronautRef = useRef<THREE.Group>(null);
  const threadRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (astronautRef.current) {
      // Gentle floating animation
      astronautRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      astronautRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
      astronautRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
    
    if (threadRef.current) {
      // Thread swaying animation
      threadRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <group position={[4, 2, -2]}>
      {/* Thread */}
      <mesh ref={threadRef} position={[0, 1, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 2, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Astronaut */}
      <group ref={astronautRef}>
        {/* Helmet */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.8}
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>
        
        {/* Visor */}
        <mesh position={[0, 0, 0.12]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color="#4A90E2" 
            transparent 
            opacity={0.6}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.2, 0.3, 0.15]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.15, -0.15, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.15, -0.15, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.06, -0.4, 0]}>
          <boxGeometry args={[0.08, 0.2, 0.08]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.06, -0.4, 0]}>
          <boxGeometry args={[0.08, 0.2, 0.08]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Backpack */}
        <mesh position={[0, -0.2, -0.1]}>
          <boxGeometry args={[0.15, 0.2, 0.08]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
    </group>
  );
}

// Rotating Sphere Component
function RotatingSphere({ hoveredNode, setHoveredNode }: {
  hoveredNode: string | null;
  setHoveredNode: (skill: string | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const skillPositions = generateSpherePositions(2.5); // Smaller radius to prevent clipping
  
  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire group horizontally from west to east (around Y axis)
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Completely Opaque Sphere */}
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#4F46E5" // Indigo color
          transparent={false}
          opacity={1.0}
          side={THREE.DoubleSide}
          depthWrite={true}
          depthTest={true}
          alphaTest={0}
        />
      </mesh>
      
      {/* Wireframe Overlay */}
      <mesh>
        <sphereGeometry args={[2.51, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff"
          transparent={true}
          opacity={0.2}
          wireframe
          wireframeLinewidth={0.5}
          depthWrite={false}
        />
      </mesh>
      
      {/* Skill Nodes - These will rotate with the sphere */}
      {skillPositions.map(({ position, skill, color }, index) => (
        <SkillNode
          key={index}
          position={position}
          skill={skill}
          color={color}
          hoveredNode={hoveredNode}
          setHoveredNode={setHoveredNode}
        />
      ))}
    </group>
  );
}

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    if (inView) {
      setCurrentSection(5);
      trackInteraction('skills_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  return (
    <section 
      ref={ref}
      id="skills" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My skill ecosystem and expertise areas.
          </p>
        </div>
        
        {/* 3D Three.js Sphere */}
        <div className="relative h-[700px] w-full max-w-6xl mx-auto">
          <Canvas
            camera={{ position: [0, 0, 6], fov: 60 }}
            style={{ background: 'transparent' }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={0.6} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
            
            {/* Flying Astronaut */}
            <FlyingAstronaut />
            
            {/* Rotating Sphere */}
            <RotatingSphere 
              hoveredNode={hoveredNode} 
              setHoveredNode={setHoveredNode} 
            />
            
            {/* Optional: Orbit Controls for manual interaction */}
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>

          {/* Category Legend */}
          <div className="absolute top-4 left-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-300">Product Management</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-300">Technical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-sm text-gray-300">Leadership</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-xs text-gray-500 mb-1">3D Skills Sphere</div>
            <div className="text-xs text-gray-600">
              Hover nodes to explore skills • Drag to rotate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 