# Whisprr - Secure End-to-End Encrypted Messaging Platform

![Whisprr Banner](public/banner.png)

Whisprr is a modern, secure messaging platform that prioritizes user privacy and security through end-to-end encryption. Built with React and powered by Clerk for authentication, Whisprr provides a seamless and secure communication experience.

## 🌟 Features

- **End-to-End Encryption**: Your messages are encrypted on your device and can only be read by the intended recipient
- **Real-Time Messaging**: Experience instant message delivery with typing indicators and read receipts
- **Cross-Platform Support**: Access your chats from any device, anywhere in the world
- **Modern UI/UX**: Beautiful and intuitive interface with smooth animations
- **Secure Authentication**: Powered by Clerk for robust user authentication
- **Responsive Design**: Works seamlessly across all devices and screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Clerk account for authentication

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/whisprr.git
cd whisprr
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Routing**: React Router

## 📱 Features in Detail

### End-to-End Encryption

- Messages are encrypted on the sender's device
- Encryption keys never leave the user's device
- No backdoors or access for third parties

### Real-Time Messaging

- Instant message delivery
- Typing indicators
- Read receipts
- Message status updates

### User Interface

- Modern and clean design
- Smooth animations and transitions
- Responsive layout for all devices
- Dark mode support

## 🔒 Security

Whisprr takes security seriously:

- End-to-end encryption for all messages
- Secure authentication through Clerk
- No message data stored on servers
- Regular security audits and updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
