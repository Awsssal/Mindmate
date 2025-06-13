
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Target, Brain, Heart } from 'lucide-react';

const AssessmentResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, answers } = location.state || { score: 0, answers: [] };

  // Calculate wellness score (lower is better, invert for display)
  const maxScore = 21; // 7 questions × 3 max points
  const wellnessScore = Math.max(0, 100 - (score / maxScore) * 100);

  const getRecommendedProgram = (score: number) => {
    if (score <= 7) {
      return {
        name: "Wellness Maintenance",
        description: "You're doing well! Focus on maintaining your mental wellness with daily practices.",
        icon: CheckCircle,
        color: "text-green-600",
        focus: ["Daily check-ins", "Mindfulness", "Sleep optimization"]
      };
    } else if (score <= 14) {
      return {
        name: "Stress & Anxiety Management", 
        description: "Let's work on managing stress and building coping strategies.",
        icon: Target,
        color: "text-yellow-600",
        focus: ["Breathing exercises", "CBT techniques", "Stress reduction"]
      };
    } else {
      return {
        name: "Intensive Support",
        description: "We recommend comprehensive support with regular check-ins and professional guidance.",
        icon: Heart,
        color: "text-red-600", 
        focus: ["Daily AI support", "Crisis resources", "Professional referrals"]
      };
    }
  };

  const recommendedProgram = getRecommendedProgram(score);

  const handleStartJourney = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-mindmate-warm-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Wellness Score */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Your Wellness Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-mindmate-green mb-4">
                {Math.round(wellnessScore)}
              </div>
              <Progress value={wellnessScore} className="w-full mb-4" />
              <p className="text-gray-600">
                {wellnessScore >= 80 ? "Excellent mental wellness!" :
                 wellnessScore >= 60 ? "Good foundation with room for growth" :
                 wellnessScore >= 40 ? "Some areas need attention" : 
                 "Let's work together to improve your wellness"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Program */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <recommendedProgram.icon className={`w-6 h-6 ${recommendedProgram.color}`} />
              <span>Recommended Program</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{recommendedProgram.name}</h3>
              <p className="text-gray-600 mb-4">{recommendedProgram.description}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Program Focus Areas:</h4>
              <ul className="space-y-2">
                {recommendedProgram.focus.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-mindmate-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-mindmate-blue" />
              <span>Key Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {score <= 3 && (
                <p className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>You show strong emotional resilience and good coping strategies.</span>
                </p>
              )}
              {score > 3 && score <= 7 && (
                <p className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <span>You have a solid foundation but could benefit from stress management techniques.</span>
                </p>
              )}
              {score > 7 && (
                <p className="flex items-start space-x-2">
                  <Heart className="w-5 h-5 text-red-600 mt-0.5" />
                  <span>You're experiencing significant stress. Daily support and coping strategies will help.</span>
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center">
          <Button 
            onClick={handleStartJourney}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Start Your Wellness Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;
