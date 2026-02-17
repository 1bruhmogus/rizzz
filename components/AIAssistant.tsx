import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGameRecommendation } from '../services/geminiService';
import { GAMES } from '../constants';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Psst! I'm Nebula AI. Need a game recommendation? Or just want to chat while the teacher isn't looking?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const availableGameTitles = GAMES.map(g => g.title).join(", ");
    
    // Add temporary loading state
    const responseText = await getGameRecommendation([...messages, userMsg], availableGameTitles);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden max-h-[500px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="font-bold text-white">Nebula AI</h3>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">&times;</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.role === 'user' 
                ? 'bg-purple-600 text-white rounded-tr-none' 
                : 'bg-slate-700 text-slate-200 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-slate-800 border-t border-slate-700">
        <div className="flex gap-2">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Suggest a puzzle game..."
            className="flex-1 bg-slate-900 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500"
            />
            <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;