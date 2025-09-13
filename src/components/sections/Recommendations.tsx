import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';

export function Recommendations() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();

  useEffect(() => {
    if (inView) {
      setCurrentSection(6);
      trackInteraction('recommendations_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  return (
    <section 
      ref={ref}
      id="recommendations" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What colleagues and mentors say about my work and character.
          </p>
        </div>
        
        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Recommendation Card 1 */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
              "
            </div>

            {/* Recommendation Content */}
            <div className="space-y-6">
              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                "Aman is an energetic, passionate and a proactive professional with a can-do attitude. During the entire internship, Aman was upbeat and excited about launching Dazzme's web product. He has came up with brilliant wireframe, user journeys and tech assessment with conducting a fit-gap analysis. He can take initiatives, take responsibility all with a smile on his face and gelling well with the team."
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  NK
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Nanda Kamble</h4>
                  <p className="text-gray-400 text-sm">Building Dazzme</p>
                  <p className="text-gray-500 text-xs">Direct Manager (July 2022)</p>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Recommendation Card 2 */}
          <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
              "
            </div>

            {/* Recommendation Content */}
            <div className="space-y-6">
              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                "Aman is a curious learner. His ability to grasp things quickly gives him an edge in his field of focus. He has always worked hard towards achieving quality results. With his sharp analytical skills, he brings clarity towards his work and hence has provided timely deliverables. I would highly recommend Aman as he is a valuable asset to any team."
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  HS
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Harshit Sheth</h4>
                  <p className="text-gray-400 text-sm">Cross-functional Collaborator</p>
                  <p className="text-gray-500 text-xs">Oracle India (July 2021)</p>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more recommendations or connect with my network?
          </p>
          <a
            href="https://www.linkedin.com/in/aman95kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>View on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
