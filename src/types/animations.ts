export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
  stagger?: number;
}

export interface ScrollTriggerConfig {
  trigger: string;
  start: string;
  end: string;
  scrub?: boolean;
  pin?: boolean;
  markers?: boolean;
}

export interface ThreeAnimationConfig {
  duration: number;
  easing: (t: number) => number;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
}

export interface CameraAnimation {
  position: [number, number, number];
  target: [number, number, number];
  duration: number;
  ease: string;
}

export interface ParticleConfig {
  count: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  spread: number;
}

export interface MaterialAnimation {
  property: string;
  from: any;
  to: any;
  duration: number;
  ease: string;
}

export interface SectionAnimation {
  id: string;
  elements: string[];
  animations: {
    enter: AnimationConfig;
    exit?: AnimationConfig;
    scroll?: ScrollTriggerConfig;
  };
}

export interface PerformanceMode {
  level: 'high' | 'medium' | 'low';
  features: {
    shadows: boolean;
    particles: boolean;
    postProcessing: boolean;
    highPolyModels: boolean;
    realTimeReflections: boolean;
  };
  quality: {
    textureResolution: number;
    modelLOD: number;
    shadowResolution: number;
  };
} 