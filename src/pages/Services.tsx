import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, MessageCircle, Moon, Headphones, Heart, Shield } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: MessageCircle,
    title: "AI Conversation Therapy",
    description: "Engage in meaningful conversations with our AI therapist through text or voice calls. Get personalized guidance anytime you need support."
  }, {
    icon: Brain,
    title: "Brain Training Games",
    description: "Enhance cognitive function with scientifically-designed puzzles and games that improve memory, focus, and mental agility."
  }, {
    icon: Moon,
    title: "Sleep & Relaxation",
    description: "Access our library of calming audiobooks, bedtime stories, and guided meditations to improve your sleep quality."
  }, {
    icon: Headphones,
    title: "Guided Meditation",
    description: "Practice mindfulness with our extensive collection of guided meditations for stress relief, anxiety management, and emotional balance."
  }, {
    icon: Heart,
    title: "Wellness Assessment",
    description: "Take comprehensive mental health assessments to understand your current state and receive personalized program recommendations."
  }, {
    icon: Shield,
    title: "Crisis Support",
    description: "24/7 crisis detection and support with immediate access to emergency resources and professional help when needed."
  }];
  return <div className="min-h-screen bg-mindmate-warm-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-mindmate-text-dark mb-6">
              Our Mental Wellness Services
            </h1>
            <p className="text-xl text-mindmate-text-light max-w-3xl mx-auto">
              Comprehensive AI-powered mental health support designed to help you thrive. 
              Each service is backed by evidence-based therapeutic approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="therapy-card hover:scale-105 transition-transform duration-300 bg-green-600">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-mindmate-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-mindmate-text-dark font-extrabold text-zinc-950">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-mindmate-text-light text-center text-slate-50">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-16 bg-mindmate-soft-gray rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-mindmate-text-dark mb-4">
                Evidence-Based Therapeutic Approaches
              </h2>
              <p className="text-lg text-mindmate-text-light mb-8 max-w-3xl mx-auto">
                Our AI is trained on proven therapeutic methods including Cognitive Behavioral Therapy (CBT), 
                Dialectical Behavior Therapy (DBT), and Mindfulness-Based Stress Reduction (MBSR).
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-mindmate-text-dark mb-2">CBT Techniques</h3>
                  <p className="text-sm text-mindmate-text-light">Restructure negative thought patterns</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-mindmate-text-dark mb-2">DBT Skills</h3>
                  <p className="text-sm text-mindmate-text-light">Emotional regulation and distress tolerance</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-mindmate-text-dark mb-2">MBSR Practice</h3>
                  <p className="text-sm text-mindmate-text-light">Mindfulness and present-moment awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Services;