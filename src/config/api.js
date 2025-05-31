export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const socketConfig = {
  path: "/socket.io",
  transports: ["websocket"],
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
};
