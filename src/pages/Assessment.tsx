
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "Over the last 2 weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      question: "Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      question: "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      question: "Over the last 2 weeks, how often have you been bothered by not being able to stop or control worrying?",
      options: [
        { value: 0, label: "Not at all" },
        { value: 1, label: "Several days" },
        { value: 2, label: "More than half the days" },
        { value: 3, label: "Nearly every day" }
      ]
    },
    {
      question: "How would you rate your overall sleep quality?",
      options: [
        { value: 3, label: "Very poor" },
        { value: 2, label: "Poor" },
        { value: 1, label: "Good" },
        { value: 0, label: "Very good" }
      ]
    },
    {
      question: "How often do you feel overwhelmed by daily stress?",
      options: [
        { value: 0, label: "Never" },
        { value: 1, label: "Sometimes" },
        { value: 2, label: "Often" },
        { value: 3, label: "Always" }
      ]
    },
    {
      question: "What is your primary goal for mental wellness?",
      options: [
        { value: 0, label: "Reduce anxiety" },
        { value: 1, label: "Improve sleep" },
        { value: 2, label: "Manage stress" },
        { value: 3, label: "Build confidence" }
      ]
    }
  ];

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate results and navigate to results
        const totalScore = newAnswers.reduce((sum, answer) => sum + answer, 0);
        navigate('/assessment-results', { state: { score: totalScore, answers: newAnswers } });
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-mindmate-warm-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <CardTitle className="text-2xl text-center">Wellness Assessment</CardTitle>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup 
                value={selectedAnswer?.toString()} 
                onValueChange={(value) => setSelectedAnswer(parseInt(value))}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="text-base">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={currentQuestion === 0}
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="bg-black hover:bg-gray-800 text-white"
              >
                {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;
