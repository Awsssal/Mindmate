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
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced blurred overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40 backdrop-blur-md"></div>
      
      <div className="relative z-10">
        {/* Header with enhanced contrast */}
        <header className="bg-white/95 backdrop-blur-lg border-b border-white/20 shadow-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="text-gray-900 hover:bg-white/80">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </Link>
                <h1 className="text-xl font-semibold text-gray-900">AI Voice Call</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Call Interface with enhanced styling */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="text-center bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 font-bold">MindMate AI Assistant</CardTitle>
              {isCallActive && (
                <p className="text-lg text-gray-700 font-semibold">{formatDuration(callDuration)}</p>
              )}
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Avatar with enhanced styling */}
              <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">AI</span>
                </div>
              </div>

              {/* Status with enhanced visibility */}
              <div>
                {isConnecting && (
                  <div className="space-y-4">
                    <p className="text-lg text-gray-800 font-semibold">Connecting...</p>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}
                
                {isCallActive && (
                  <div className="space-y-4">
                    <p className="text-lg text-green-700 font-bold">Call Active</p>
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 h-8 bg-green-500 rounded animate-pulse shadow-md"></div>
                      <div className="w-2 h-6 bg-green-400 rounded animate-pulse shadow-md" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-10 bg-green-500 rounded animate-pulse shadow-md" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-4 bg-green-400 rounded animate-pulse shadow-md" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-2 h-7 bg-green-500 rounded animate-pulse shadow-md" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}

                {!isCallActive && !isConnecting && (
                  <p className="text-lg text-gray-800 font-semibold">Ready to call</p>
                )}
              </div>

              {/* Controls with enhanced styling */}
              <div className="flex justify-center space-x-4">
                {!isCallActive && !isConnecting && (
                  <Button
                    onClick={handleStartCall}
                    className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl hover:scale-110 transition-all duration-300"
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </Button>
                )}

                {isCallActive && (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => setIsMuted(!isMuted)}
                      className={`w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isMuted ? 'bg-red-100 border-red-300 text-red-600' : 'bg-white/90 border-gray-300 text-gray-700'}`}
                    >
                      {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                    
                    <Button
                      onClick={handleEndCall}
                      className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl hover:scale-110 transition-all duration-300"
                    >
                      <PhoneOff className="w-6 h-6 text-white" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                      className={`w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${!isSpeakerOn ? 'bg-gray-100 border-gray-300 text-gray-600' : 'bg-white/90 border-gray-300 text-gray-700'}`}
                    >
                      {isSpeakerOn ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </Button>
                  </>
                )}
              </div>

              {/* Tips with enhanced readability */}
              {!isCallActive && !isConnecting && (
                <div className="text-sm text-gray-700 space-y-1 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <p className="font-medium">• Speak naturally about your feelings</p>
                  <p className="font-medium">• The AI will listen and provide support</p>
                  <p className="font-medium">• You can end the call anytime</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AICall;