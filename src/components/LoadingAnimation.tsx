
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingAnimation = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate('/'), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo Animation */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-display font-bold text-3xl">L</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white animate-fade-in">
              Lumakara
            </h1>
            <p className="text-lg text-white/80 font-japanese animate-fade-in" style={{ animationDelay: '0.5s' }}>
              ルマカラストア
            </p>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="w-64 mx-auto space-y-4">
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-full gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-white/60 text-sm font-inter">
            Loading your experience... {progress}%
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { title: '高品質', subtitle: 'Premium Quality', delay: '1s' },
            { title: 'デザイン', subtitle: 'Modern Design', delay: '1.5s' },
            { title: '体験', subtitle: 'Unique Experience', delay: '2s' }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center space-y-1 animate-fade-in"
              style={{ animationDelay: item.delay }}
            >
              <div className="font-japanese text-white font-medium">{item.title}</div>
              <div className="text-white/60 text-sm">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-full animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
