export const generateRoomCode = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const codeLength = 6;
  let code = "";

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
};

export const validateRoomCode = (code) => {
  const roomCodeRegex = /^[A-Z0-9]{6}$/;
  return roomCodeRegex.test(code);
};
