
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Smile, Meh, Frown, CloudRain } from 'lucide-react';

interface MoodEntry {
  mood: string;
  intensity: number;
  timestamp: Date;
  notes?: string;
}

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [intensity, setIntensity] = useState<number>(5);
  const [notes, setNotes] = useState<string>('');
  const [recentEntries, setRecentEntries] = useState<MoodEntry[]>([
    { mood: 'happy', intensity: 7, timestamp: new Date(Date.now() - 86400000) },
    { mood: 'calm', intensity: 8, timestamp: new Date(Date.now() - 172800000) },
    { mood: 'anxious', intensity: 4, timestamp: new Date(Date.now() - 259200000) }
  ]);

  const moods = [
    { name: 'happy', icon: Smile, color: 'bg-yellow-500' },
    { name: 'calm', icon: Heart, color: 'bg-green-500' },
    { name: 'neutral', icon: Meh, color: 'bg-gray-500' },
    { name: 'sad', icon: Frown, color: 'bg-blue-500' },
    { name: 'anxious', icon: CloudRain, color: 'bg-purple-500' }
  ];

  const handleSubmit = () => {
    if (selectedMood) {
      const newEntry: MoodEntry = {
        mood: selectedMood,
        intensity,
        timestamp: new Date(),
        notes: notes || undefined
      };
      setRecentEntries([newEntry, ...recentEntries.slice(0, 6)]);
      setSelectedMood('');
      setIntensity(5);
      setNotes('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Mood Check-in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">How are you feeling today?</h3>
          <div className="grid grid-cols-5 gap-2">
            {moods.map((mood) => (
              <button
                key={mood.name}
                onClick={() => setSelectedMood(mood.name)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedMood === mood.name
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-8 h-8 ${mood.color} rounded-full flex items-center justify-center mx-auto mb-1`}>
                  <mood.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs capitalize">{mood.name}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedMood && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Intensity (1-10): {intensity}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Notes (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="What contributed to this mood?"
                className="w-full p-2 border rounded-md resize-none h-20"
              />
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Save Mood Entry
            </Button>
          </div>
        )}

        <div>
          <h3 className="font-medium mb-3">Recent Entries</h3>
          <div className="space-y-2">
            {recentEntries.slice(0, 3).map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="capitalize">
                    {entry.mood}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Intensity: {entry.intensity}/10
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  {entry.timestamp.toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
