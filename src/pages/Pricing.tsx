
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "10 AI text replies/day",
        "2 min voice call/day", 
        "3 min audiobook preview",
        "2 brain puzzle levels/day",
        "1 trial exercise/day"
      ],
      isPopular: false
    },
    {
      name: "Advanced Plan", 
      price: "$4.99",
      period: "month",
      description: "Great for regular users",
      features: [
        "20 AI messages/day",
        "10 min call/day",
        "10 hrs audiobook/month", 
        "Unlimited brain puzzles",
        "3 exercises/day"
      ],
      isPopular: false
    },
    {
      name: "Pro Plan",
      price: "$11.99", 
      period: "month",
      description: "Advanced wellness features",
      features: [
        "60 AI texts/day",
        "30 min call/day",
        "Unlimited audiobooks",
        "Unlimited puzzles",
        "3 exercises/day"
      ],
      isPopular: false
    },
    {
      name: "Premium Plan",
      price: "$14.99",
      period: "month", 
      description: "Most popular choice",
      features: [
        "Unlimited text",
        "1 hr call/day",
        "Unlimited audiobooks",
        "8 exercises/day",
        "Priority support"
      ],
      isPopular: true
    },
    {
      name: "Ultra Plan",
      price: "$19.99",
      period: "month",
      description: "Complete wellness solution", 
      features: [
        "Unlimited everything",
        "Priority processing",
        "Extra AI voice options",
        "Personal wellness coach",
        "24/7 crisis support"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-mindmate-warm-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-mindmate-text-dark mb-6">
              Choose Your Wellness Plan
            </h1>
            <p className="text-xl text-mindmate-text-light max-w-3xl mx-auto">
              Start your mental wellness journey with a plan that fits your needs. 
              Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.isPopular ? 'ring-2 ring-mindmate-green' : ''}`}>
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-mindmate-green text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-mindmate-text-dark">{plan.price}</span>
                    <span className="text-mindmate-text-light">/{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-mindmate-green" />
                        <span className="text-sm text-mindmate-text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    {plan.name === "Free Plan" ? "Get Started" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
