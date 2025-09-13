import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface PortfolioState {
  // Current section tracking
  currentSection: number;
  isScrolling: boolean;
  scrollProgress: number;
  
  // Loading states
  isLoading: boolean;
  assetsLoaded: number;
  totalAssets: number;
  loadingProgress: number;
  
  // User interactions
  userInteractions: Record<string, boolean>;
  hasInteracted: boolean;
  
  // Performance and settings
  performanceMode: 'high' | 'medium' | 'low';
  isMobile: boolean;
  prefersReducedMotion: boolean;
  
  // 3D scene states
  cameraPosition: [number, number, number];
  sceneReady: boolean;
  animationsEnabled: boolean;
  
  // Actions
  setCurrentSection: (section: number) => void;
  setScrollProgress: (progress: number) => void;
  setIsScrolling: (scrolling: boolean) => void;
  
  updateLoadingProgress: (loaded: number, total: number) => void;
  setLoading: (loading: boolean) => void;
  
  trackInteraction: (interaction: string) => void;
  setHasInteracted: (interacted: boolean) => void;
  
  setPerformanceMode: (mode: 'high' | 'medium' | 'low') => void;
  setMobile: (mobile: boolean) => void;
  setPrefersReducedMotion: (reduced: boolean) => void;
  
  setCameraPosition: (position: [number, number, number]) => void;
  setSceneReady: (ready: boolean) => void;
  setAnimationsEnabled: (enabled: boolean) => void;
  
  // Utility actions
  reset: () => void;
}

const initialState = {
  currentSection: 0,
  isScrolling: false,
  scrollProgress: 0,
  isLoading: true,
  assetsLoaded: 0,
  totalAssets: 100,
  loadingProgress: 0,
  userInteractions: {},
  hasInteracted: false,
  performanceMode: 'high' as const,
  isMobile: false,
  prefersReducedMotion: false,
  cameraPosition: [0, 0, 5] as [number, number, number],
  sceneReady: false,
  animationsEnabled: true,
};

export const usePortfolioStore = create<PortfolioState>()(
  devtools(
    (set, get) => ({
      ...initialState,
      
      setCurrentSection: (section: number) => 
        set({ currentSection: section }),
      
      setScrollProgress: (progress: number) => 
        set({ scrollProgress: progress }),
      
      setIsScrolling: (scrolling: boolean) => 
        set({ isScrolling: scrolling }),
      
      updateLoadingProgress: (loaded: number, total: number) => 
        set({ 
          assetsLoaded: loaded, 
          totalAssets: total, 
          loadingProgress: (loaded / total) * 100 
        }),
      
      setLoading: (loading: boolean) => 
        set({ isLoading: loading }),
      
      trackInteraction: (interaction: string) => 
        set((state) => ({
          userInteractions: {
            ...state.userInteractions,
            [interaction]: true
          }
        })),
      
      setHasInteracted: (interacted: boolean) => 
        set({ hasInteracted: interacted }),
      
      setPerformanceMode: (mode: 'high' | 'medium' | 'low') => 
        set({ performanceMode: mode }),
      
      setMobile: (mobile: boolean) => 
        set({ isMobile: mobile }),
      
      setPrefersReducedMotion: (reduced: boolean) => 
        set({ prefersReducedMotion: reduced }),
      
      setCameraPosition: (position: [number, number, number]) => 
        set({ cameraPosition: position }),
      
      setSceneReady: (ready: boolean) => 
        set({ sceneReady: ready }),
      
      setAnimationsEnabled: (enabled: boolean) => 
        set({ animationsEnabled: enabled }),
      
      reset: () => set(initialState),
    }),
    {
      name: 'portfolio-store',
    }
  )
); 