import React from "react";

const SkewHoverButton = ({ children, onClick, className = "", disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full h-[2.3em] bg-gradient-to-r from-[#61AFEF] to-[#4D8BCF] text-white border-none rounded-[0.625em] text-base font-bold cursor-pointer overflow-hidden z-[1] group transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="absolute left-[-20%] right-[-20%] top-0 bottom-0 bg-white transform scale-x-0 skew-x-[-45deg] transition-transform duration-500 ease-in-out z-[-1] group-hover:scale-x-100"></span>
      <span className="relative z-10 group-hover:text-[#1E1E1E] flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default SkewHoverButton;
