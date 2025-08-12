import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi, how can I help you?', from: 'bot' },
  ]);
  const [userInput, setUserInput] = useState('');
  const chatBoxRef = useRef(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, from: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');

    try {
      const thinkingMessage = { text: 'Thinking...', from: 'bot' };
      setMessages((prev) => [...prev, thinkingMessage]);

      const res = await fetch('https://mediclinic-ai.onrender.com/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage: userInput }),
      });

      const data = await res.json();
      const botReply = { text: data.message, from: 'bot' };

      // Remove the "Thinking..." message and add the real response
      setMessages((prev) => [
        ...prev.slice(0, -1), // remove last (thinking) message
        botReply,
      ]);
    } catch (error) {
      console.error('Error talking to chatbot:', error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: 'Sorry, something went wrong. Please try again.', from: 'bot' },
      ]);
    }
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-black text-white rounded-full p-4 z-50 cursor-pointer shadow-lg"
      >
        <img src="/chat-icon.png" alt="Chat Icon" className="w-6 h-6" />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white shadow-md border rounded-lg w-80 max-h-[500px] flex flex-col">
          <div className="flex justify-between items-center p-3 border-b">
            <h2 className="text-lg font-semibold">MedicLiniAI</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-600"
            >
              ✖
            </button>
          </div>

          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto p-3 space-y-2"
            style={{ maxHeight: '400px' }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-sm ${
                    msg.from === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Ask me anything..."
              className="flex-1 border rounded px-3 py-2 text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white rounded px-4 py-2 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
