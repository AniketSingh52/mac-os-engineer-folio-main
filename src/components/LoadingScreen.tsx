import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* macOS-style Apple logo */}
        <div className=" w-32 h-32 mx-auto">
          <div className="w-full h-full rounded-2xl flex items-center justify-center floating-animation">
            <span className="text-5xl font-bold text-primary-foreground rounded-full overflow-hidden">
            <img 
              src="/Logo.png" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </span>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gradient">Loading Portfolio</h2>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-primary rounded-full loading-dot"></div>
            <div className="w-3 h-3 bg-primary rounded-full loading-dot"></div>
            <div className="w-3 h-3 bg-primary rounded-full loading-dot"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-muted/30 rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300 ease-out glow"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-muted-foreground text-sm mt-2">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;