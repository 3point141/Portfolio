import { useEffect, useState } from 'react';
import { usePortfolioStore } from '../../store/portfolioStore';
import linkedinPhoto from '../../assets/LinkeinPhoto.png';

const sections = [
  { id: 'hero', name: 'Home', number: '01' },
  { id: 'education', name: 'Education', number: '02' },
  { id: 'career', name: 'Career', number: '03' },
  { id: 'projects', name: 'Projects', number: '04' },
  { id: 'skills', name: 'Skills', number: '05' },
  { id: 'impact', name: 'Impact', number: '06' },
  { id: 'contact', name: 'Contact', number: '07' }
];

export function Navigation() {
  const { currentSection } = usePortfolioStore();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionIndex: number) => {
    const section = document.getElementById(sections[sectionIndex].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="container-max px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Branding */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={linkedinPhoto} 
                  alt="Aman Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Aman Kumar</h1>
                <p className="text-xs text-gray-400">Product Manager</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Progress Bar */}
              <div className="flex items-center space-x-3">
                <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out"
                    style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 font-mono">
                  {currentSection + 1}/{sections.length}
                </span>
              </div>

              {/* Section Navigation */}
              <div className="flex items-center space-x-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                      currentSection === index
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    title={section.name}
                  >
                    {section.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden backdrop-blur-xl bg-black/80 border-t border-white/10">
        <div className="container-max px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out"
                  style={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 font-mono">
                {currentSection + 1}/{sections.length}
              </span>
            </div>
            
            <div className="flex items-center space-x-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    currentSection === index
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                  }`}
                  title={section.name}
                >
                  {section.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 