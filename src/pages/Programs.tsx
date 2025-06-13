import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, Target, Users, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  modules: number;
  completedModules: number;
  rating: number;
  participants: number;
  isActive: boolean;
  isRecommended: boolean;
}

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const programs: Program[] = [
    {
      id: '1',
      title: 'Stress & Anxiety Management',
      description: 'Learn evidence-based techniques to manage stress and reduce anxiety in daily life.',
      duration: '6 weeks',
      difficulty: 'Beginner',
      category: 'Anxiety',
      modules: 12,
      completedModules: 8,
      rating: 4.8,
      participants: 2847,
      isActive: true,
      isRecommended: false
    },
    {
      id: '2',
      title: 'Mindful Sleep Program',
      description: 'Improve your sleep quality through mindfulness and relaxation techniques.',
      duration: '4 weeks',
      difficulty: 'Beginner',
      category: 'Sleep',
      modules: 8,
      completedModules: 0,
      rating: 4.9,
      participants: 1956,
      isActive: false,
      isRecommended: true
    },
    {
      id: '3',
      title: 'Building Confidence & Self-Esteem',
      description: 'Develop a positive self-image and build lasting confidence through proven strategies.',
      duration: '8 weeks',
      difficulty: 'Intermediate',
      category: 'Confidence',
      modules: 16,
      completedModules: 0,
      rating: 4.7,
      participants: 1432,
      isActive: false,
      isRecommended: true
    },
    {
      id: '4',
      title: 'Advanced Meditation Mastery',
      description: 'Deepen your meditation practice with advanced techniques and philosophical insights.',
      duration: '12 weeks',
      difficulty: 'Advanced',
      category: 'Meditation',
      modules: 24,
      completedModules: 0,
      rating: 4.9,
      participants: 856,
      isActive: false,
      isRecommended: false
    },
    {
      id: '5',
      title: 'Energy & Motivation Boost',
      description: 'Overcome fatigue and build sustainable energy through lifestyle and mindset changes.',
      duration: '5 weeks',
      difficulty: 'Beginner',
      category: 'Energy',
      modules: 10,
      completedModules: 0,
      rating: 4.6,
      participants: 1278,
      isActive: false,
      isRecommended: false
    },
    {
      id: '6',
      title: 'Focus & Concentration Training',
      description: 'Enhance your ability to focus and maintain concentration in our distracted world.',
      duration: '6 weeks',
      difficulty: 'Intermediate',
      category: 'Focus',
      modules: 12,
      completedModules: 0,
      rating: 4.8,
      participants: 1645,
      isActive: false,
      isRecommended: true
    }
  ];

  const categories = ['All', 'Anxiety', 'Sleep', 'Confidence', 'Meditation', 'Energy', 'Focus'];

  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const activeProgram = programs.find(p => p.isActive);
  const recommendedPrograms = programs.filter(p => p.isRecommended && !p.isActive);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-green-100 text-green-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <h1 className="text-xl font-semibold text-gray-900">Wellness Programs</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Program */}
        {activeProgram && (
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Your Current Program</h2>
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{activeProgram.title}</CardTitle>
                    <p className="text-gray-600">{activeProgram.description}</p>
                  </div>
                  <Badge className="bg-green-500 text-white">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{activeProgram.duration}</span>
                      </div>
                      <Badge className={getDifficultyColor(activeProgram.difficulty)}>
                        {activeProgram.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{activeProgram.participants.toLocaleString()}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{activeProgram.completedModules}/{activeProgram.modules} modules</span>
                      </div>
                      <Progress 
                        value={(activeProgram.completedModules / activeProgram.modules) * 100} 
                        className="h-3"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Continue Program
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Recommended Programs */}
        {recommendedPrograms.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recommended for You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedPrograms.map((program) => (
                <Card key={program.id} className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <Badge className="bg-blue-500 text-white">Recommended</Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span>{program.duration}</span>
                        </div>
                        <Badge className={getDifficultyColor(program.difficulty)}>
                          {program.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-green-500" />
                          <span>{program.rating}</span>
                        </div>
                        <span>{program.modules} modules</span>
                      </div>
                      <Button className="w-full">Start Program</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Programs */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">All Programs</h2>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <div className="flex flex-col space-y-1">
                      {program.isActive && (
                        <Badge className="bg-green-500 text-white">Active</Badge>
                      )}
                      {program.isRecommended && !program.isActive && (
                        <Badge className="bg-blue-500 text-white">Recommended</Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span>{program.duration}</span>
                      </div>
                      <Badge className={getDifficultyColor(program.difficulty)}>
                        {program.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-green-500" />
                        <span>{program.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{program.participants.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {program.modules} modules
                    </div>
                    
                    {program.isActive ? (
                      <Button className="w-full" variant="outline">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    ) : (
                      <Button className="w-full">
                        Start Program
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;