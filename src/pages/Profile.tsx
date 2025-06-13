
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Settings, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    age: '28',
    primaryGoal: 'anxiety',
    interests: ['mindfulness', 'sleep', 'stress-management'],
    dailyFocus: 'Anxiety Management',
    notes: 'Prefer morning exercises and calming voice tones.'
  });

  const goalOptions = [
    { value: 'anxiety', label: 'Reduce Anxiety' },
    { value: 'sleep', label: 'Improve Sleep' },
    { value: 'stress', label: 'Manage Stress' },
    { value: 'confidence', label: 'Build Confidence' },
    { value: 'energy', label: 'Increase Energy' },
    { value: 'focus', label: 'Improve Focus' }
  ];

  const interestOptions = [
    'mindfulness', 'meditation', 'breathing', 'sleep', 'stress-management',
    'cbt', 'self-care', 'energy', 'social-skills', 'trauma-healing'
  ];

  const handleSave = () => {
    console.log('Profile saved:', profile);
    // Add toast notification here
  };

  return (
    <div className="min-h-screen bg-mindmate-warm-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  ← Back to Dashboard
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-mindmate-text-dark">Profile Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-mindmate-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <CardTitle>{profile.name}</CardTitle>
                <p className="text-gray-600">{profile.email}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Current Program</Label>
                  <p className="text-lg font-semibold">Stress & Anxiety Management</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Member Since</Label>
                  <p>January 2024</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Streak</Label>
                  <p className="text-lg font-semibold text-mindmate-green">7 days</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Settings */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      value={profile.age}
                      onChange={(e) => setProfile({...profile, age: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Wellness Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Wellness Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="primaryGoal">Primary Goal</Label>
                  <Select value={profile.primaryGoal} onValueChange={(value) => setProfile({...profile, primaryGoal: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {goalOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="dailyFocus">Daily Focus</Label>
                  <Input
                    id="dailyFocus"
                    value={profile.dailyFocus}
                    onChange={(e) => setProfile({...profile, dailyFocus: e.target.value})}
                    placeholder="e.g., Anxiety, Sleep, Energy"
                  />
                </div>

                <div>
                  <Label>Interests</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {interestOptions.map(interest => (
                      <Badge
                        key={interest}
                        variant={profile.interests.includes(interest) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          const newInterests = profile.interests.includes(interest)
                            ? profile.interests.filter(i => i !== interest)
                            : [...profile.interests, interest];
                          setProfile({...profile, interests: newInterests});
                        }}
                      >
                        {interest.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="notes">Personal Notes</Label>
                  <Textarea
                    id="notes"
                    value={profile.notes}
                    onChange={(e) => setProfile({...profile, notes: e.target.value})}
                    placeholder="Any preferences, triggers to avoid, or helpful notes for your AI companion..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-black hover:bg-gray-800 text-white">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
