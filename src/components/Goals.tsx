import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Target, Calendar, Clock, Plus, CheckCircle, Circle } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'monthly';
  progress: number;
  total: number;
  completed: boolean;
  dueDate: Date;
}

const Goals = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Complete morning meditation',
      description: 'Start the day with 10 minutes of mindfulness',
      type: 'daily',
      progress: 1,
      total: 1,
      completed: true,
      dueDate: new Date()
    },
    {
      id: '2',
      title: 'Track mood 3 times',
      description: 'Check in with your emotions regularly',
      type: 'daily',
      progress: 2,
      total: 3,
      completed: false,
      dueDate: new Date()
    },
    {
      id: '3',
      title: 'Complete 5 brain training sessions',
      description: 'Keep your mind sharp with cognitive exercises',
      type: 'weekly',
      progress: 2,
      total: 5,
      completed: false,
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: '4',
      title: 'Listen to 3 sleep stories',
      description: 'Improve your sleep quality',
      type: 'weekly',
      progress: 1,
      total: 3,
      completed: false,
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    },
    {
      id: '5',
      title: 'Achieve 7-day streak',
      description: 'Maintain consistency in your wellness journey',
      type: 'monthly',
      progress: 7,
      total: 7,
      completed: true,
      dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000)
    },
    {
      id: '6',
      title: 'Complete wellness assessment',
      description: 'Track your progress with monthly evaluation',
      type: 'monthly',
      progress: 0,
      total: 1,
      completed: false,
      dueDate: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000)
    }
  ]);

  const filteredGoals = goals.filter(goal => goal.type === activeTab);

  const toggleGoalComplete = (goalId: string) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, completed: !goal.completed, progress: goal.completed ? 0 : goal.total }
        : goal
    ));
  };

  const addNewGoal = () => {
    if (newGoalTitle.trim()) {
      const newGoal: Goal = {
        id: Date.now().toString(),
        title: newGoalTitle,
        description: 'Custom goal',
        type: activeTab,
        progress: 0,
        total: 1,
        completed: false,
        dueDate: new Date(Date.now() + (activeTab === 'daily' ? 1 : activeTab === 'weekly' ? 7 : 30) * 24 * 60 * 60 * 1000)
      };
      setGoals([...goals, newGoal]);
      setNewGoalTitle('');
      setShowAddForm(false);
    }
  };

  const getTabIcon = (type: string) => {
    switch (type) {
      case 'daily': return Clock;
      case 'weekly': return Calendar;
      case 'monthly': return Target;
      default: return Target;
    }
  };

  const getProgressColor = (progress: number, total: number) => {
    const percentage = (progress / total) * 100;
    if (percentage === 100) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-green-500';
    return 'bg-gray-400';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="w-5 h-5" />
          <span>Goals</span>
        </CardTitle>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {(['daily', 'weekly', 'monthly'] as const).map((tab) => {
            const Icon = getTabIcon(tab);
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="capitalize">{tab}</span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Add Goal Form */}
        {showAddForm ? (
          <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="flex space-x-2">
              <Input
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
                placeholder={`Enter ${activeTab} goal...`}
                onKeyPress={(e) => e.key === 'Enter' && addNewGoal()}
              />
              <Button onClick={addNewGoal} size="sm">Add</Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)} size="sm">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={() => setShowAddForm(true)}
            className="w-full border-dashed"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add {activeTab} goal
          </Button>
        )}

        {/* Goals List */}
        <div className="space-y-3">
          {filteredGoals.map((goal) => (
            <div
              key={goal.id}
              className={`p-4 rounded-lg border-2 transition-all ${
                goal.completed
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <button
                  onClick={() => toggleGoalComplete(goal.id)}
                  className="mt-1"
                >
                  {goal.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-medium ${
                      goal.completed ? 'text-gray-600 line-through' : 'text-gray-900'
                    }`}>
                      {goal.title}
                    </h3>
                    <Badge variant="outline" className="text-xs capitalize">
                      {goal.type}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                  
                  {!goal.completed && goal.total > 1 && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Progress</span>
                        <span>{goal.progress}/{goal.total}</span>
                      </div>
                      <Progress 
                        value={(goal.progress / goal.total) * 100} 
                        className="h-2"
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                    <span>Due: {goal.dueDate.toLocaleDateString()}</span>
                    {goal.completed && (
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGoals.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <Target className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>No {activeTab} goals yet</p>
            <p className="text-sm">Add your first goal to get started!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Goals;