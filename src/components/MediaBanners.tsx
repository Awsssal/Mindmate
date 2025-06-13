
import React from 'react';

const MediaBanners = () => {
  const mediaLogos = [
    {
      name: "BBC",
      logo: "BBC",
      bgColor: "bg-red-600",
      textColor: "text-white"
    },
    {
      name: "CNBC",
      logo: "CNBC",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      name: "Forbes",
      logo: "FORBES",
      bgColor: "bg-gray-800",
      textColor: "text-white"
    },
    {
      name: "TechCrunch",
      logo: "TechCrunch",
      bgColor: "bg-green-600",
      textColor: "text-white"
    }
  ];

  const achievements = [
    "Featured in Forbes Health 2024",
    "CNBC's Top Mental Health Apps",
    "BBC Future's Wellness Innovation",
    "TechCrunch Startup Spotlight"
  ];

  return (
    <section className="py-12 bg-mindmate-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg font-medium text-mindmate-text-light mb-6">
            As featured in leading publications
          </p>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {mediaLogos.map((media, index) => (
            <div 
              key={index}
              className={`${media.bgColor} ${media.textColor} px-6 py-3 rounded-lg font-bold text-lg tracking-wide hover:scale-105 transition-transform duration-300 shadow-md`}
            >
              {media.logo}
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl gentle-shadow border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-mindmate-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium text-mindmate-text-dark">
                {achievement}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 gentle-shadow">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-mindmate-text-dark">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-mindmate-text-dark">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-mindmate-text-dark">Evidence-Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBanners;
