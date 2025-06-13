
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Medal, Star, Target, Calendar, Zap } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
  total: number;
  unlocked: boolean;
  category: string;
  points: number;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first meditation session',
      icon: Star,
      progress: 1,
      total: 1,
      unlocked: true,
      category: 'Milestone',
      points: 10
    },
    {
      id: '2',
      title: 'Week Warrior',
      description: 'Complete 7 consecutive days of activities',
      icon: Calendar,
      progress: 7,
      total: 7,
      unlocked: true,
      category: 'Streak',
      points: 50
    },
    {
      id: '3',
      title: 'Mood Master',
      description: 'Track your mood for 30 days',
      icon: Target,
      progress: 12,
      total: 30,
      unlocked: false,
      category: 'Tracking',
      points: 100
    },
    {
      id: '4',
      title: 'Sleep Scholar',
      description: 'Listen to 10 sleep stories',
      icon: Medal,
      progress: 3,
      total: 10,
      unlocked: false,
      category: 'Sleep',
      points: 75
    },
    {
      id: '5',
      title: 'Brain Booster',
      description: 'Complete 25 brain training exercises',
      icon: Zap,
      progress: 8,
      total: 25,
      unlocked: false,
      category: 'Training',
      points: 150
    },
    {
      id: '6',
      title: 'Champion',
      description: 'Reach 1000 total points',
      icon: Trophy,
      progress: 235,
      total: 1000,
      unlocked: false,
      category: 'Points',
      points: 500
    }
  ];

  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-0">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900">
          <Trophy className="w-5 h-5 text-green-600" />
          <span>Achievements</span>
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <div>Total Points: {totalPoints}</div>
          <div>Unlocked: {unlockedCount}/{achievements.length}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {achievements.map(achievement => (
            <div key={achievement.id} className="">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-green-600' : 'bg-gray-400'}`}>
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-green-50/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-green-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-medium ${achievement.unlocked ? 'text-gray-900' : 'text-gray-600'}`}>
                      {achievement.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
                      {achievement.category}
                    </Badge>
                    {achievement.unlocked && (
                      <Badge className="bg-green-100 text-green-800 text-xs border-green-300">
                        +{achievement.points} pts
                      </Badge>
                    )}
                  </div>
                  <p className={`text-sm mb-2 ${achievement.unlocked ? 'text-gray-800' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-700">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.total}</span>
                      </div>
                      <Progress value={(achievement.progress / achievement.total) * 100} className="h-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
