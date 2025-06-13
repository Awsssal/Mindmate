import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MessageCircle, Phone, BookOpen, Brain, Moon, Target, Calendar, TrendingUp, User, Settings, LogOut, CreditCard, Trophy, Bookmark } from 'lucide-react';
import MoodTracker from '@/components/MoodTracker';
import Achievements from '@/components/Achievements';
import Goals from '@/components/Goals';
import PageTransition from '@/components/PageTransition';

const Dashboard = () => {
  const navigate = useNavigate();
  const todayProgress = 60;
  const weeklyStreak = 7;
  const currentMood = "Calm";

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  const quickActions = [
    {
      title: "AI Chat",
      icon: MessageCircle,
      href: "/ai-chat",
      color: "bg-blue-600"
    },
    {
      title: "AI Call",
      icon: Phone,
      href: "/ai-call",
      color: "bg-green-600"
    },
    {
      title: "Exercises",
      icon: Target,
      href: "/exercises",
      color: "bg-purple-600"
    },
    {
      title: "Brain Training",
      icon: Brain,
      href: "/brain-training",
      color: "bg-orange-600"
    },
    {
      title: "Sleep Stories",
      icon: Moon,
      href: "/sleep-stories",
      color: "bg-indigo-600"
    },
    {
      title: "Audiobooks",
      icon: BookOpen,
      href: "/audiobooks",
      color: "bg-red-600"
    }
  ];

  return (
    <PageTransition>
      <div 
        className="min-h-screen relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced blurred overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-indigo-900/30 backdrop-blur-md"></div>
        
        <div className="relative z-10">
          {/* Header with enhanced contrast */}
          <header className="bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <h1 className="text-2xl font-bold text-gray-900 drop-shadow-sm">Good morning, Sarah!</h1>
                <div className="flex items-center space-x-4">
                  <Link to="/programs">
                    <Button variant="outline" size="sm" className="bg-white/90 text-gray-900 border-gray-300 hover:bg-white shadow-md">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Programs
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="bg-white/90 text-gray-900 border-gray-300 hover:bg-white shadow-md">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                  </Link>
                  <Link to="/manage-payments">
                    <Button variant="outline" size="sm" className="bg-white/90 text-gray-900 border-gray-300 hover:bg-white shadow-md">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Billing
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="bg-white/90 text-gray-900 border-gray-300 hover:bg-white shadow-md">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 shadow-md">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Overview with enhanced contrast */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900">Today's Progress</CardTitle>
                  <Calendar className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{todayProgress}%</div>
                  <Progress value={todayProgress} className="mt-2" />
                  <p className="text-xs text-gray-700 mt-2">3 of 5 activities completed</p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900">Weekly Streak</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{weeklyStreak} days</div>
                  <p className="text-xs text-gray-700 mt-2">Keep up the great work!</p>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900">Current Mood</CardTitle>
                  <Target className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{currentMood}</div>
                  <p className="text-xs text-gray-700 mt-2">Logged 2 hours ago</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions with enhanced styling */}
            <Card className="mb-8 bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
              <CardHeader>
                <CardTitle className="text-gray-900 text-xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.href}>
                      <div className="flex flex-col items-center p-4 rounded-xl hover:bg-white/80 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:shadow-lg">
                        <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-900 drop-shadow-sm">{action.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Content Grid with enhanced styling */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl border-0 ring-1 ring-white/20">
                <MoodTracker />
              </div>
              <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl border-0 ring-1 ring-white/20">
                <Goals />
              </div>
            </div>

            {/* Achievements with enhanced styling */}
            <div className="mb-8 bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl border-0 ring-1 ring-white/20">
              <Achievements />
            </div>

            {/* Today's Recommendations with enhanced styling */}
            <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold text-2xl">Recommended for You Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-green-50/90 to-blue-50/90 backdrop-blur-sm border border-white/30">
                    <div>
                      <h3 className="text-gray-900 font-bold">Morning Breathing Exercise</h3>
                      <p className="text-sm text-gray-700">5 minutes • Reduce anxiety</p>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-md">Start</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-purple-50/90 to-pink-50/90 backdrop-blur-sm border border-white/30">
                    <div>
                      <h3 className="text-gray-900 font-semibold">Mindful Check-in</h3>
                      <p className="text-sm text-gray-700">10 minutes • Emotional awareness</p>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-md">Start</Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-indigo-50/90 to-blue-50/90 backdrop-blur-sm border border-white/30">
                    <div>
                      <h3 className="text-gray-900 font-bold">Sleep Meditation</h3>
                      <p className="text-sm text-gray-700">15 minutes • Better sleep</p>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white shadow-md">Start</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;