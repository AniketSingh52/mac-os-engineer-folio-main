import { ReactNode } from "react";

interface MacOSWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const MacOSWindow = ({ title, children, className = "" }: MacOSWindowProps) => {
  return (
    <div className={`macos-window ${className}`}>
      {/* Window controls */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:brightness-110 cursor-pointer"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full hover:brightness-110 cursor-pointer"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:brightness-110 cursor-pointer"></div>
        </div>
        {title && (
          <h2 className="text-sm font-medium text-muted-foreground flex-1 text-center">
            {title}
          </h2>
        )}
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      {/* Window content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default MacOSWindow;