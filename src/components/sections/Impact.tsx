import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';
import { awardsData } from '../../data/impact';

export function AwardsAndAchievements() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();

  useEffect(() => {
    if (inView) {
      setCurrentSection(5);
      trackInteraction('awards_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  const getRankColor = (rank: string) => {
    if (rank.includes('1st') || rank.includes('National Rank 1st')) return 'text-yellow-400';
    if (rank.includes('2nd') || rank.includes('National Rank 2nd')) return 'text-gray-300';
    if (rank.includes('3rd') || rank.includes('National Rank 3rd')) return 'text-amber-600';
    if (rank.includes('Finalist') || rank.includes('Semi-Finalist')) return 'text-blue-400';
    return 'text-green-400';
  };

  const getRankBadge = (rank: string) => {
    if (rank.includes('1st') || rank.includes('National Rank 1st')) return '🥇';
    if (rank.includes('2nd') || rank.includes('National Rank 2nd')) return '🥈';
    if (rank.includes('3rd') || rank.includes('National Rank 3rd')) return '🥉';
    if (rank.includes('Finalist') || rank.includes('Semi-Finalist')) return '🏆';
    return '🏅';
  };

  return (
    <section 
      ref={ref}
      id="awards" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Awards & Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognized excellence across national competitions and case study challenges.
          </p>
        </div>
        
        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rank Badge */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                {getRankBadge(award.rank)}
              </div>

              {/* Award Content */}
              <div className="space-y-4">
                {/* Title and Rank */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {award.title}
                  </h3>
                  <div className={`text-lg font-semibold ${getRankColor(award.rank)}`}>
                    {award.rank}
                  </div>
                </div>

                {/* Competition Details */}
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">
                    <span className="text-gray-500">Competition:</span> {award.competition}
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="text-gray-500">Organizer:</span> {award.organizer}
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="text-gray-500">Year:</span> {award.year}
                  </p>
                </div>

                {/* Participants */}
                <div className="pt-2 border-t border-gray-700/50">
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-500">Participants:</span> {award.participants}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {awardsData.filter(award => award.rank.includes('1st')).length}
            </div>
            <div className="text-gray-400 text-sm">1st Place Wins</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {awardsData.filter(award => award.rank.includes('Finalist')).length}
            </div>
            <div className="text-gray-400 text-sm">Finalist Positions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {awardsData.length}
            </div>
            <div className="text-gray-400 text-sm">Total Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              50K+
            </div>
            <div className="text-gray-400 text-sm">Total Competitors</div>
          </div>
        </div>
      </div>
    </section>
  );
} 