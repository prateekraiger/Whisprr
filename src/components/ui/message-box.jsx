import React from "react";
import { Send } from "lucide-react";

const MessageBox = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Message...",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center justify-center h-10 px-4 rounded-[10px] border border-[#3E4451] bg-[#1E1E1E] focus-within:border-[#61AFEF] w-full group transition-all duration-200">
        {/* Message Input */}
        <input
          required
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
          className="flex-1 h-full bg-transparent outline-none border-none pl-2 text-white placeholder-[#ABB2BF]/50"
        />

        {/* Send Button */}
        <button
          type="submit"
          className="flex items-center justify-center h-full bg-transparent outline-none border-none cursor-pointer transition-all"
        >
          <Send className="h-[18px] text-[#ABB2BF] transition-all group-hover:text-[#61AFEF]" />
        </button>
      </div>
    </form>
  );
};

export default MessageBox;
