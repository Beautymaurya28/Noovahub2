// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Loader = () => {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercent((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 30);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
//       {/* BACKGROUND TEXT */}
//       <div className="absolute text-[10vw] font-bold opacity-10 text-center animate-pulse select-none whitespace-nowrap z-0">
//         CREATIVE · DEVELOPER · DESIGNER
//       </div>

//       {/* LOADER BOX */}
//       <motion.div
//         className="z-10 bg-black bg-opacity-40 backdrop-blur-lg border border-purple-500 rounded-2xl shadow-xl p-8 w-72 flex flex-col items-center"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <p className="text-white font-semibold text-xl mb-4 tracking-wider">
//           LOADING {percent}%
//         </p>

//         {/* PROGRESS BAR */}
//         <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
//             style={{ width: `${percent}%` }}
//           ></div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Loader;

import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';
import "./components/Loader.css";


const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('Initializing');

  const phases = [
    { text: 'Initializing', icon: Zap },
    { text: 'Loading Assets', icon: Code },
    { text: 'Preparing Interface', icon: Palette },
    { text: 'Finalizing', icon: Sparkles }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 3 + 0.5, 100);
        
        // Update phase based on progress
        if (newProgress < 25) setCurrentPhase('Initializing');
        else if (newProgress < 50) setCurrentPhase('Loading Assets');
        else if (newProgress < 75) setCurrentPhase('Preparing Interface');
        else setCurrentPhase('Finalizing');

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete && onComplete(), 800);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentIcon = phases.find(phase => phase.text === currentPhase)?.icon || Sparkles;
  const IconComponent = currentIcon;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large rotating circle */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-blue-100 rounded-full animate-rotate-slow opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-gray-200 rounded-full animate-rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-800 to-black rounded-full animate-float-elegant opacity-20`}
            style={{
              left: `${15 + i * 7}%`,
              top: `${20 + (i * 6) % 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i % 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Premium Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-black rounded-xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-black tracking-tight">Portfolio</span>
        </div>
      </div>

      {/* Elegant Status Indicators */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-8 rounded-full transition-all duration-500 ${
                  progress > i * 25 
                    ? 'bg-gradient-to-t from-blue-800 to-black animate-pulse-premium' 
                    : 'bg-gray-200'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
          <div className="ml-3 text-sm font-medium text-gray-600">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-100 opacity-30 whitespace-nowrap select-none">
          <div className="animate-slide-text">
            CREATIVE • DEVELOPER • DESIGNER • INNOVATOR
          </div>
        </div>
      </div>

      {/* Main Loader Container */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="animate-slide-in-up">
          {/* Glow Effect Container */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-800/20 via-black/20 to-blue-800/20 rounded-3xl blur-2xl animate-gradient-shift"></div>
            
            {/* Main Card */}
            <div className="relative glass-morphism rounded-2xl p-8 shadow-premium animate-glow-border">
              <div className="backdrop-blur-xl bg-white/90 rounded-xl p-8 border border-gray-200">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-800 to-black rounded-2xl mb-4 shadow-glow-blue animate-scale-breath">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-black mb-2 tracking-tight">
                    Loading Experience
                  </h2>
                  
                  <p className="text-gray-600 font-medium">
                    {currentPhase}
                  </p>
                </div>

                {/* Progress Section */}
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-800 via-blue-900 to-black rounded-full transition-all duration-500 ease-out relative animate-progress-glow"
                        style={{ width: `${progress}%` }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-premium"></div>
                        
                        {/* Progress Indicator */}
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-blue-800 transition-all duration-500"
                          style={{ left: `calc(${Math.max(progress - 2, 0)}% + 0px)` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Progress Labels */}
                    <div className="flex justify-between mt-3 text-xs font-medium text-gray-400">
                      <span>0%</span>
                      <span className="text-gray-700 font-semibold">
                        {Math.round(progress)}%
                      </span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Phase Indicators */}
                  <div className="grid grid-cols-4 gap-2">
                    {phases.map((phase, index) => {
                      const PhaseIcon = phase.icon;
                      const isActive = currentPhase === phase.text;
                      const isCompleted = progress > (index + 1) * 25;
                      
                      return (
                        <div
                          key={phase.text}
                          className={`flex flex-col items-center p-3 rounded-xl transition-all duration-500 ${
                            isActive 
                              ? 'bg-blue-50 border border-blue-200' 
                              : isCompleted
                              ? 'bg-gray-50 border border-gray-300'
                              : 'bg-gray-50 border border-gray-200'
                          }`}
                        >
                          <PhaseIcon 
                            className={`w-4 h-4 mb-1 transition-colors duration-300 ${
                              isActive 
                                ? 'text-blue-800' 
                                : isCompleted
                                ? 'text-black'
                                : 'text-gray-400'
                            }`} 
                          />
                          <span className={`text-xs font-medium text-center leading-tight ${
                            isActive 
                              ? 'text-blue-800' 
                              : isCompleted
                              ? 'text-black'
                              : 'text-gray-500'
                          }`}>
                            {phase.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-blue-800 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">Crafting your experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;