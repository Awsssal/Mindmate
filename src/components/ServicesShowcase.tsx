
import React from 'react';
import { MessageCircle, Phone, Moon, Brain, Heart, BarChart } from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "AI Chat Therapy",
      description: "24/7 conversational support with empathetic AI trained in therapeutic techniques",
      features: ["CBT & DBT approaches", "Mood tracking", "Crisis detection"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      icon: Phone,
      title: "AI Voice Calls",
      description: "Human-like conversations with real-time speech processing and therapeutic guidance",
      features: ["Natural voice interaction", "Low-latency responses", "Personalized sessions"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop"
    },
    {
      icon: Moon,
      title: "Sleep & Relaxation",
      description: "Curated audio library with meditations, bedtime stories, and calming soundscapes",
      features: ["Guided meditations", "Sleep stories", "Ambient soundscapes"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
    },
    {
      icon: Brain,
      title: "Brain Training",
      description: "Cognitive exercises and puzzles designed to improve focus, memory, and mental agility",
      features: ["Progressive difficulty", "Performance tracking", "Daily challenges"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Therapeutic Exercises",
      description: "Evidence-based activities for anxiety, depression, trauma, and personal growth",
      features: ["Breathing exercises", "Mindfulness practices", "CBT worksheets"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Comprehensive insights into your mental health journey with detailed analytics",
      features: ["Mood charts", "Activity history", "Goal tracking"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&h=800&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Comprehensive Mental Wellness Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto drop-shadow-sm">
            Everything you need to support your mental health journey, powered by advanced AI 
            and evidence-based therapeutic approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-0 group hover:scale-105 transition-all duration-300">
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-gray-900 mb-1 font-bold text-lg">
                Ready to start your wellness journey?
              </h3>
              <p className="text-gray-700 text-sm">
                Join thousands of users finding peace and growth with MindMate AI
              </p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
