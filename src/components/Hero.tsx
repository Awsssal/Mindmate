import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Phone, Moon, User } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 mindmate-gradient-soft"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in bg-zinc-50/0">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your AI Companion for{' '}
                <span className="text-gradient">Mental Wellness</span>
              </h1>
              <p className="text-xl text-mindmate-text-light leading-relaxed">
                Transform your mental health journey with personalized AI conversations, 
                therapeutic exercises, brain training, and sleep aids — all designed to support your wellbeing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="mindmate-button text-lg px-8 py-4 group text-zinc-50 bg-green-700 hover:bg-green-600">
                  Start Free Now
                  <Heart className="w-5 h-5 ml-2 group-hover:animate-gentle-bounce" />
                </Button>
              </Link>
              <Button variant="outline" className="mindmate-button-outline text-lg px-8 py-4 text-zinc-50 rounded-xl bg-gray-950 hover:bg-gray-800">
                Learn More
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-8 h-8 rounded-full bg-mindmate-green flex items-center justify-center border-2 border-white">
                      <User className="w-4 h-4 text-white" />
                    </div>)}
                </div>
                <span className="text-sm text-mindmate-text-light font-medium">1,300+ happy users</span>
              </div>
              <div className="flex items-center space-x-1 bg-[#000a00]/0">
                {[...Array(5)].map((_, i) => <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 text-white fill-current bg-[#0cd00c]/[0.96]">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>)}
                <span className="text-sm text-mindmate-text-light font-medium ml-1">4.8/5</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Preview */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 therapeutic-shadow border border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-mindmate-text-dark">Your Daily Wellness Hub</h3>
                  
                  {/* Feature Icons */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-mindmate-soft-gray rounded-xl">
                      <div className="w-10 h-10 bg-mindmate-green rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-mindmate-text-dark">AI Chat</p>
                        <p className="text-sm text-mindmate-text-light">24/7 Support</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-mindmate-soft-gray rounded-xl">
                      <div className="w-10 h-10 bg-mindmate-blue rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-mindmate-text-dark">AI Calls</p>
                        <p className="text-sm text-mindmate-text-light">Voice Support</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-mindmate-soft-gray rounded-xl">
                      <div className="w-10 h-10 bg-mindmate-green rounded-full flex items-center justify-center">
                        <Moon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-mindmate-text-dark">Sleep Aid</p>
                        <p className="text-sm text-mindmate-text-light">Rest Better</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 bg-mindmate-soft-gray rounded-xl">
                      <div className="w-10 h-10 bg-mindmate-blue rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-mindmate-text-dark">Therapy</p>
                        <p className="text-sm text-mindmate-text-light">Guided Exercises</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="bg-mindmate-soft-gray rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-mindmate-text-dark">Today's Progress</span>
                      <span className="text-sm text-mindmate-green font-medium">3/5 completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-mindmate-green h-2 rounded-full transition-all duration-300" style={{
                      width: '60%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-mindmate-blue rounded-full flex items-center justify-center animate-gentle-bounce">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-mindmate-green rounded-full flex items-center justify-center animate-pulse-soft">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;