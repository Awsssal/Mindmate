import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Professional",
      content: "MindMate AI has been a game-changer for my anxiety management. The AI calls feel so natural and supportive, like talking to a real therapist.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ac?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Torres",
      role: "College Student",
      content: "The brain training exercises helped me improve my focus during exams. The sleep stories are amazing too - I actually look forward to bedtime now!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Working Parent",
      content: "As a busy mom, having 24/7 access to mental health support has been incredible. The therapeutic exercises are perfect for my 5-minute breaks.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      content: "I was skeptical about AI therapy at first, but the personalization and empathy of MindMate AI genuinely surprised me. It's helped me process work stress.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Johnson",
      role: "Healthcare Worker",
      content: "After long shifts, the relaxation features help me decompress. The progress tracking shows how much I've grown in managing my mental health.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Alex Thompson",
      role: "Freelance Designer",
      content: "The combination of chat and voice options is perfect. Sometimes I need quick text support, other times a longer voice conversation helps more.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-mindmate-text-dark mb-4">
            Loved by Thousands Worldwide
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-green-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold text-mindmate-text-dark">4.8/5</span>
          </div>
          <p className="text-lg text-mindmate-text-light">
            Based on 1,300+ reviews from verified users
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="therapy-card group hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-mindmate-green opacity-60" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-mindmate-text-light leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-mindmate-green/20"
                />
                <div>
                  <h4 className="font-semibold text-mindmate-text-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-mindmate-text-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "1,300+", label: "Happy Users" },
            { number: "50,000+", label: "Sessions Completed" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "95%", label: "User Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-mindmate-green mb-2">
                {stat.number}
              </div>
              <div className="text-mindmate-text-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;