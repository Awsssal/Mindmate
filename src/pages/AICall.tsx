
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AICall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartCall = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setIsCallActive(true);
    }, 3000);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setCallDuration(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">AI Voice Call</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Call Interface */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">MindMate AI Assistant</CardTitle>
            {isCallActive && (
              <p className="text-lg text-gray-600">{formatDuration(callDuration)}</p>
            )}
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Avatar */}
            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">AI</span>
              </div>
            </div>

            {/* Status */}
            <div>
              {isConnecting && (
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">Connecting...</p>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              )}
              
              {isCallActive && (
                <div className="space-y-2">
                  <p className="text-lg text-green-600">Call Active</p>
                  <div className="flex justify-center space-x-1">
                    <div className="w-2 h-8 bg-green-500 rounded animate-pulse"></div>
                    <div className="w-2 h-6 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-10 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-4 bg-green-400 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-7 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}

              {!isCallActive && !isConnecting && (
                <p className="text-lg text-gray-600">Ready to call</p>
              )}
            </div>

            {/* Controls */}
            <div className="flex justify-center space-x-4">
              {!isCallActive && !isConnecting && (
                <Button
                  onClick={handleStartCall}
                  className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700"
                >
                  <Phone className="w-6 h-6 text-white" />
                </Button>
              )}

              {isCallActive && (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setIsMuted(!isMuted)}
                    className={`w-12 h-12 rounded-full ${isMuted ? 'bg-red-100 border-red-300' : ''}`}
                  >
                    {isMuted ? <MicOff className="w-5 h-5 text-red-600" /> : <Mic className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    onClick={handleEndCall}
                    className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700"
                  >
                    <PhoneOff className="w-6 h-6 text-white" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                    className={`w-12 h-12 rounded-full ${!isSpeakerOn ? 'bg-gray-100 border-gray-300' : ''}`}
                  >
                    {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-gray-600" />}
                  </Button>
                </>
              )}
            </div>

            {/* Tips */}
            {!isCallActive && !isConnecting && (
              <div className="text-sm text-gray-500 space-y-1">
                <p>• Speak naturally about your feelings</p>
                <p>• The AI will listen and provide support</p>
                <p>• You can end the call anytime</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AICall;
