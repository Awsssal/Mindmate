import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Gamepad2, Target, Zap, ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import WordScramble from '@/components/WordScramble';

interface Game {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Memory' | 'Focus' | 'Logic' | 'Language';
  icon: typeof Brain;
}

const BrainTraining = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const games: Game[] = [
    {
      id: 'word-scramble',
      title: 'Word Scramble',
      description: 'Unscramble words related to mental wellness and mindfulness.',
      difficulty: 'Easy',
      category: 'Language',
      icon: Brain
    },
    {
      id: 'memory-cards',
      title: 'Memory Cards',
      description: 'Match pairs of cards to improve your memory and concentration.',
      difficulty: 'Medium',
      category: 'Memory',
      icon: Target
    },
    {
      id: 'pattern-match',
      title: 'Pattern Recognition',
      description: 'Identify patterns and sequences to enhance cognitive function.',
      difficulty: 'Hard',
      category: 'Logic',
      icon: Zap
    },
    {
      id: 'focus-challenge',
      title: 'Focus Challenge',
      description: 'Sustained attention exercises to improve concentration.',
      difficulty: 'Medium',
      category: 'Focus',
      icon: Target
    }
  ];

  const categories = ['All', 'Memory', 'Focus', 'Logic', 'Language'];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-green-100 text-green-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'word-scramble':
        return <WordScramble />;
      default:
        return (
          <Card className="max-w-md mx-auto">
            <CardContent className="text-center py-12">
              <p className="text-gray-600">This game is coming soon!</p>
              <Button 
                onClick={() => setSelectedGame(null)} 
                className="mt-4"
              >
                Back to Games
              </Button>
            </CardContent>
          </Card>
        );
    }
  };

  if (selectedGame) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedGame(null)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Games
                </Button>
                <h1 className="text-xl font-semibold text-gray-900">Brain Training</h1>
              </div>
            </div>
          </div>
        </header>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderGame()}
        </div>
      </div>
    );
  }

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
              <h1 className="text-xl font-semibold text-gray-900">Brain Training</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Game Categories</h2>
          <div className="flex flex-wrap gap-2">
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

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => {
            const IconComponent = game.icon;
            
            return (
              <Card key={game.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{game.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getDifficultyColor(game.difficulty)}>
                            {game.difficulty}
                          </Badge>
                          <Badge variant="outline">{game.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  
                  <Button
                    className="w-full"
                    onClick={() => setSelectedGame(game.id)}
                  >
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Play Game
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-green-500" />
              <span>Your Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">7</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-gray-600">Achievements</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BrainTraining;