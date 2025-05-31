import React from "react";

const GridBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1E1E1E]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2C313A_1px,transparent_1px),linear-gradient(to_bottom,#2C313A_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Content */}
      <div className="relative w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;
