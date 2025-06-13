import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Calendar, DollarSign, Settings, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isCurrentPlan: boolean;
  isPopular: boolean;
}

const ManagePayments = () => {
  const [currentPlan] = useState('premium');
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      features: [
        '10 AI text replies/day',
        '2 min voice call/day',
        '3 min audiobook preview',
        '2 brain puzzle levels/day',
        '1 trial exercise/day'
      ],
      isCurrentPlan: false,
      isPopular: false
    },
    {
      id: 'advanced',
      name: 'Advanced Plan',
      price: '$4.99',
      period: 'month',
      features: [
        '20 AI messages/day',
        '10 min call/day',
        '10 hrs audiobook/month',
        'Unlimited brain puzzles',
        '3 exercises/day'
      ],
      isCurrentPlan: false,
      isPopular: false
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: '$11.99',
      period: 'month',
      features: [
        '60 AI texts/day',
        '30 min call/day',
        'Unlimited audiobooks',
        'Unlimited puzzles',
        '3 exercises/day'
      ],
      isCurrentPlan: false,
      isPopular: false
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$14.99',
      period: 'month',
      features: [
        'Unlimited text',
        '1 hr call/day',
        'Unlimited audiobooks',
        '8 exercises/day',
        'Priority support'
      ],
      isCurrentPlan: true,
      isPopular: true
    },
    {
      id: 'ultra',
      name: 'Ultra Plan',
      price: '$19.99',
      period: 'month',
      features: [
        'Unlimited everything',
        'Priority processing',
        'Extra AI voice options',
        'Personal wellness coach',
        '24/7 crisis support'
      ],
      isCurrentPlan: false,
      isPopular: false
    }
  ];

  const handleUpgrade = (planId: string) => {
    console.log(`Upgrading to ${planId}`);
    // Stripe checkout integration would go here
  };

  const handleDowngrade = (planId: string) => {
    console.log(`Downgrading to ${planId}`);
    // Stripe checkout integration would go here
  };

  const handleCancelSubscription = () => {
    setShowCancelConfirm(false);
    console.log('Cancelling subscription');
    // Stripe cancellation integration would go here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Manage Subscription</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Subscription */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Current Subscription</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Plan Details</h3>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">Premium Plan</Badge>
                  <span className="text-2xl font-bold">$14.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Billing Information</h3>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">Next billing: January 15, 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">•••• •••• •••• 4242</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Update Payment Method
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setShowCancelConfirm(true)}
                  >
                    Cancel Subscription
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Plans */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Plans</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.isCurrentPlan ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.isCurrentPlan && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Current Plan</Badge>
                  </div>
                )}
                {plan.isPopular && !plan.isCurrentPlan && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.isCurrentPlan ? (
                    <Button disabled className="w-full">
                      Current Plan
                    </Button>
                  ) : plan.id === 'free' ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleDowngrade(plan.id)}
                    >
                      Downgrade
                    </Button>
                  ) : (
                    <Button 
                      className="w-full"
                      onClick={() => handleUpgrade(plan.id)}
                    >
                      {parseInt(plan.price.replace('$', '')) > 14.99 ? 'Upgrade' : 'Switch Plan'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Premium Plan</div>
                  <div className="text-sm text-gray-600">December 15, 2023</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$14.99</div>
                  <Badge className="bg-green-100 text-green-800">Paid</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Premium Plan</div>
                  <div className="text-sm text-gray-600">November 15, 2023</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$14.99</div>
                  <Badge className="bg-green-100 text-green-800">Paid</Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">Premium Plan</div>
                  <div className="text-sm text-gray-600">October 15, 2023</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$14.99</div>
                  <Badge className="bg-green-100 text-green-800">Paid</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="max-w-md mx-4">
            <CardHeader>
              <CardTitle>Cancel Subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your Premium subscription? You'll lose access to premium features at the end of your billing period.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowCancelConfirm(false)}
                >
                  Keep Subscription
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleCancelSubscription}
                >
                  Cancel Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ManagePayments;