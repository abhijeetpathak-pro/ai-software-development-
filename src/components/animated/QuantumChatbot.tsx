// src/components/animated/QuantumChatbot.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, RefreshCw } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
}

const presetPrompts = [
  'What is your primary AI stack?',
  'Tell me about your flagship projects',
  'How do we initiate a collaboration?',
  'What is your typical project timeline?',
];

export default function QuantumChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Greetings! I'm Quantum AI, an autonomous intelligence agent. Ask me anything about engineering capabilities, architecture case studies, or collaboration availability!",
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleOpen = () => {
    soundFx.playWhoosh();
    setIsOpen(!isOpen);
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    soundFx.playClick();
    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // AI Simulated Knowledge Engine Response
    setTimeout(() => {
      soundFx.playBot();
      let reply = "That's a great question! Witqualis specializes in full-lifecycle AI engineering and cloud architecture. Let's schedule a deep dive call to discuss your roadmap.";
      const lower = text.toLowerCase();

      if (lower.includes('stack') || lower.includes('technology') || lower.includes('ai stack')) {
        reply = "Our core stack comprises Next.js 15, TypeScript, Python (PyTorch, LangChain, FastAPI), Go, PostgreSQL, Docker, and Three.js/WebGL for interactive visual shaders.";
      } else if (lower.includes('project') || lower.includes('flagship') || lower.includes('portfolio')) {
        reply = "Key projects include DocsInsight AI (enterprise multi-modal RAG), TerraFlow IoT (precision agricultural telemetry with Go), and Quantum Agentic Orchestrator for automated reasoning loops.";
      } else if (lower.includes('collaborat') || lower.includes('hire') || lower.includes('contact') || lower.includes('reach')) {
        reply = "You can initiate collaboration directly via the Contact Section below or by emailing hello@witqualis.com. We respond within 24 hours!";
      } else if (lower.includes('timeline') || lower.includes('time') || lower.includes('cost')) {
        reply = "We offer a trial sprint before a longer engagement begins. Project timelines depend on scope — contact us for a specific estimate.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: 'ai',
          text: reply,
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Corner Launcher Button */}
      <div className="fixed bottom-10 right-6 sm:bottom-12 sm:right-8 z-[9990]">
        <motion.button
          onClick={toggleOpen}
          onMouseEnter={() => soundFx.playHover()}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-4 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 text-white shadow-2xl shadow-sky-500/30 flex items-center justify-center cursor-pointer"
          aria-label="Toggle Quantum AI Assistant"
        >
          {/* Animated Neon Pulse Ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-70 blur-md group-hover:opacity-100 transition-opacity animate-pulse" />
          <div className="relative flex items-center justify-center">
            {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          </div>
        </motion.button>
      </div>

      {/* Expandable Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-28 right-4 sm:bottom-32 sm:right-8 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] rounded-3xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-2xl z-[9990] flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative p-2 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-900" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Quantum AI
                    <Sparkles className="w-3 h-3 text-amber-400" />
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400">Autonomous Assistant • v2.6</span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setMessages([
                    {
                      id: 'welcome',
                      sender: 'ai',
                      text: "Greetings! I'm Quantum AI. How can I assist your engineering evaluation today?",
                    },
                  ]);
                }}
                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs font-sans">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5 border border-sky-500/30">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-sky-500 text-white rounded-br-none shadow-md shadow-sky-500/20 font-medium'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5 border border-zinc-700">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-sky-500/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-900 flex gap-2 overflow-x-auto no-scrollbar">
              {presetPrompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(p)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[10px] text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Message Input Box */}
            <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Quantum AI anything..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-sky-500 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim()}
                className="p-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white transition-all cursor-pointer shadow-md shadow-sky-500/20"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
