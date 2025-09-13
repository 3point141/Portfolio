import { usePortfolioStore } from '../../store/portfolioStore';

const sections = [
  { id: 'hero', name: 'Home' },
  { id: 'education', name: 'Education' },
  { id: 'career', name: 'Career' },
  { id: 'internship-experiences', name: 'Internship Experiences' },
  { id: 'projects', name: 'Featured Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'awards', name: 'Awards and Achievements' },
  { id: 'recommendations', name: 'Recommendations' },
  { id: 'contact', name: 'Contact' }
];

export function RightNavigation() {
  const { currentSection } = usePortfolioStore();

  const scrollToSection = (sectionIndex: number) => {
    const section = document.getElementById(sections[sectionIndex].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-end space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            title={section.name}
          >
            {/* Section name - always visible with same opacity as line */}
            <span className={`text-sm font-medium whitespace-nowrap transition-all duration-500 ${
              currentSection === index 
                ? 'text-white' 
                : 'text-white/30 group-hover:text-white/50'
            }`}>
              {section.name}
            </span>
            
            {/* Horizontal line indicator */}
            <div className="relative">
              <div 
                className={`transition-all duration-500 ease-out ${
                  currentSection === index 
                    ? 'w-12 bg-white' 
                    : 'w-6 bg-white/30 group-hover:bg-white/50'
                }`}
                style={{
                  height: '2px',
                  borderRadius: '1px'
                }}
              />
              
              {/* Glow effect for active line */}
              {currentSection === index && (
                <div 
                  className="absolute inset-0 bg-white opacity-50 blur-sm"
                  style={{
                    height: '2px',
                    borderRadius: '1px'
                  }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
