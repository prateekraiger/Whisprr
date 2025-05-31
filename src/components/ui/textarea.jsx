import * as React from "react";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-lg border border-[#3E4451] bg-[#282C34] px-4 py-2 text-white placeholder-[#ABB2BF]/50 focus:outline-none focus:border-[#61AFEF] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
