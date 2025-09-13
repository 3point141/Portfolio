import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { usePortfolioStore } from '../../store/portfolioStore';

export function LoadingScreen() {
  const { loadingProgress } = usePortfolioStore();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* 3D Background */}
      <Canvas className="absolute inset-0">
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} />
        <LoadingParticles />
      </Canvas>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-2xl">AK</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Aman Kumar</span>
          </h1>
          <p className="text-xl text-gray-400">Portfolio Loading{dots}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 mx-auto mb-8">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {Math.round(loadingProgress)}% Complete
          </p>
        </div>

        {/* Loading Tips */}
        <div className="text-sm text-gray-600 max-w-md mx-auto">
          <p>Preparing your immersive 3D experience...</p>
        </div>
      </div>
    </div>
  );
}

function LoadingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    ] as [number, number, number],
    size: Math.random() * 0.1 + 0.05,
    speed: Math.random() * 0.01 + 0.005
  }));

  return (
    <group>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color="#64748b" 
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
} 