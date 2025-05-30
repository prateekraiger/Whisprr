import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const { user } = useUser();
  const [rooms, setRooms] = useState({});
  const [participants, setParticipants] = useState({});

  const createRoom = (roomId) => {
    setRooms((prev) => ({
      ...prev,
      [roomId]: {
        messages: [],
        createdAt: Date.now(),
      },
    }));
    setParticipants((prev) => ({
      ...prev,
      [roomId]: [],
    }));
  };

  const joinRoom = (roomId) => {
    if (!rooms[roomId]) {
      createRoom(roomId);
    }

    if (user) {
      setParticipants((prev) => ({
        ...prev,
        [roomId]: [
          ...(prev[roomId] || []),
          {
            userId: user.id,
            name: user.firstName || "Anonymous",
            joinedAt: Date.now(),
          },
        ],
      }));
    }
  };

  const leaveRoom = (roomId) => {
    if (user) {
      setParticipants((prev) => ({
        ...prev,
        [roomId]: (prev[roomId] || []).filter((p) => p.userId !== user.id),
      }));
    }
  };

  const sendMessage = (roomId, content) => {
    if (!user) return;

    const newMessage = {
      id: Date.now().toString(),
      content,
      userId: user.id,
      userName: user.firstName || "Anonymous",
      timestamp: Date.now(),
    };

    setRooms((prev) => ({
      ...prev,
      [roomId]: {
        ...prev[roomId],
        messages: [...(prev[roomId]?.messages || []), newMessage],
      },
    }));
  };

  const getRoomMessages = (roomId) => {
    return rooms[roomId]?.messages || [];
  };

  const getRoomParticipants = (roomId) => {
    return participants[roomId] || [];
  };

  return (
    <ChatContext.Provider
      value={{
        createRoom,
        joinRoom,
        leaveRoom,
        sendMessage,
        getRoomMessages,
        getRoomParticipants,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
