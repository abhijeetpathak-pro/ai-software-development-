// src/components/animated/InteractiveTerminal.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal as TerminalIcon, Play, RefreshCw, Sparkles, Check, Copy, Code2, CornerDownLeft, Trash2 } from 'lucide-react';
import { soundFx } from '@/lib/AudioEngine';

const pythonLines = [
  { text: '# =========================================================', type: 'comment' },
  { text: '# WitQualis AI Consultation & Engineering Dispatch Engine', type: 'comment' },
  { text: '# =========================================================', type: 'comment' },
  { text: '', type: 'blank' },
  { text: 'class WitQualisSupport:', type: 'keyword' },
  { text: '    def __init__(self):', type: 'func' },
  { text: '        self.company = "WitQualis Technologies"', type: 'attr' },
  { text: '        self.status = "ONLINE & AVAILABLE 24/7"', type: 'attr' },
  { text: '        self.expertise = [', type: 'attr' },
  { text: '            "Enterprise Generative AI & RAG Pipelines",', type: 'item' },
  { text: '            "Full-Stack Web & Mobile App Engineering",', type: 'item' },
  { text: '            "Pre-Vetted Dedicated Developer Squads",', type: 'item' },
  { text: '            "Cloud DevOps & Kubernetes SRE Topologies"', type: 'item' },
  { text: '        ]', type: 'attr' },
  { text: '', type: 'blank' },
  { text: '    def assist_client(self, query="consultation"):', type: 'func' },
  { text: '        greeting = "How can I help you?"', type: 'str' },
  { text: '        assurance = "WitQualis team is always available for your help!"', type: 'str' },
  { text: '        return {', type: 'keyword' },
  { text: '            "status": "ACTIVE_CONNECTION (200 OK)",', type: 'item' },
  { text: '            "response": f"{greeting} {assurance}",', type: 'item' },
  { text: '            "email": "sales@witqualis.com",', type: 'item' },
  { text: '            "trial": "Trial sprint available before full engagement"', type: 'item' },
  { text: '        }', type: 'keyword' },
  { text: '', type: 'blank' },
  { text: '# Initializing support daemon...', type: 'comment' },
  { text: 'agent = WitQualisSupport()', type: 'code' },
  { text: 'print(agent.assist_client()["response"])', type: 'code' },
  { text: '>>> "How can I help you? WitQualis team is always available for your help!"', type: 'output' },
];

export default function InteractiveTerminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasCopied, setHasCopied] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [cliOutput, setCliOutput] = useState<string[]>([
    '$ python witqualis_support_daemon.py',
    '>>> "How can I help you? WitQualis team is always available for your help!"'
  ]);
  
  const sectionRef = useRef<HTMLElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const cliContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Reset or Start typing when scrolled into view
  useEffect(() => {
    if (isInView && currentLineIndex === 0 && currentCharIndex === 0) {
      setIsPlaying(true);
    }
  }, [isInView]);

  // Typewriter Loop
  useEffect(() => {
    if (!isPlaying) return;

    if (currentLineIndex < pythonLines.length) {
      const currentFullLine = pythonLines[currentLineIndex].text;

      if (currentCharIndex < currentFullLine.length) {
        const speed = pythonLines[currentLineIndex].type === 'comment' ? 18 : 26;
        const timer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Line complete, move to next line
        const delayBetweenLines = currentFullLine === '' ? 40 : 100;
        const timer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, delayBetweenLines);
        return () => clearTimeout(timer);
      }
    } else {
      setIsPlaying(false);
    }
  }, [isPlaying, currentLineIndex, currentCharIndex]);

  // Auto-scroll inside terminal code area as typing progresses
  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
    }
  }, [currentLineIndex, currentCharIndex]);

  // Auto-scroll CLI output container to bottom on every new message
  useEffect(() => {
    if (cliContainerRef.current) {
      cliContainerRef.current.scrollTop = cliContainerRef.current.scrollHeight;
    }
  }, [cliOutput]);

  const handleReplay = () => {
    soundFx.playClick();
    setIsPlaying(false);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = 0;
    }
    setTimeout(() => {
      setIsPlaying(true);
    }, 60);
  };

  const handleCopyCode = () => {
    soundFx.playChirp();
    const fullCode = pythonLines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(fullCode);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };

  const executeCommand = (cmd: string) => {
    const trimmed = (cmd || 'run').trim().toLowerCase();
    soundFx.playClick();

    let responseText = '';

    if (trimmed === 'help' || trimmed === '?') {
      responseText = `AVAILABLE COMMANDS:
  help       - Show available CLI commands
  run        - Execute WitQualis Python daemon & replay code
  services   - List WitQualis enterprise engineering capabilities
  hire       - Information about hiring dedicated developers
  contact    - Get direct communication channels & office HQ
  status     - Show daemon & system health status
  about      - Background on WitQualis architecture
  clear      - Clear CLI history`;
    } else if (trimmed === 'run' || trimmed === 'python' || trimmed.includes('daemon') || trimmed === 'start') {
      responseText = `[EXEC] Running witqualis_support_daemon.py...
>>> STATUS: ACTIVE_CONNECTION (200 OK)
>>> "How can I help you? WitQualis team is always available for your help!"
>>> Evaluation: Trial Sprint Active
>>> Support Channel: sales@witqualis.com`;
      // Trigger code replay animation
      handleReplay();
    } else if (trimmed === 'services' || trimmed === 'capabilities' || trimmed === 'skills') {
      responseText = `WITQUALIS CORE SERVICES:
  1. Generative AI, Custom LLM Fine-Tuning & Multi-Modal RAG Systems
  2. Full-Stack Web Applications (Next.js 15, React, TypeScript, Tailwind)
  3. High-Concurrency Backend APIs (Python, FastAPI, Go, Node.js, PostgreSQL)
  4. Cross-Platform Mobile Applications (React Native, Flutter, iOS, Android)
  5. Cloud DevOps & SRE (AWS, GCP, Kubernetes, CI/CD Automation)`;
    } else if (trimmed === 'hire' || trimmed === 'team' || trimmed === 'developers') {
      responseText = `HIRE PRE-VETTED DEVELOPERS:
  • Trial sprint available on developer squads
  • Pre-vetted senior software engineers
  • Fast onboarding directly into your sprint
  • Email sales@witqualis.com to request candidate profiles`;
    } else if (trimmed === 'contact' || trimmed === 'email' || trimmed === 'sales') {
      responseText = `CONTACT WITQUALIS:
  Email:    sales@witqualis.com
  Web:      https://www.witqualis.com
  Offices:  Delhi (HQ), Dubai (UAE), Sydney (AU), New York (USA), Toronto (CA)`;
    } else if (trimmed === 'status' || trimmed === 'health' || trimmed === 'ping') {
      responseText = `SYSTEM TELEMETRY:
  Daemon:     witqualis_support_daemon (PID: 4096)
  State:      ONLINE (200 OK)
  Latency:    14ms
  Trial:      7-day sprint available
  Cluster:    Global Edge Nodes Active`;
    } else if (trimmed === 'about' || trimmed === 'whoami' || trimmed === 'witqualis') {
      responseText = `WITQUALIS TECHNOLOGIES:
  Engineering partner delivering mission-critical digital products,
  custom AI architectures, and dedicated elite development squads globally.`;
    } else if (trimmed === 'clear' || trimmed === 'cls') {
      setCliOutput([]);
      setInputVal('');
      return;
    } else {
      responseText = `Command not recognized: "${trimmed}". Type "help" to see available commands or click quick action buttons below.`;
    }

    setCliOutput((prev) => [...prev, `$ ${trimmed}`, responseText]);
    setInputVal('');
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal || 'run');
  };

  // Helper to render Python syntax highlighted line
  const renderSyntaxLine = (lineText: string, type: string) => {
    if (type === 'comment') {
      return <span className="text-zinc-500 italic">{lineText}</span>;
    }
    if (type === 'output') {
      return (
        <span className="text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
          {lineText}
        </span>
      );
    }
    if (type === 'str') {
      return <span className="text-emerald-300">{lineText}</span>;
    }
    if (type === 'item') {
      return <span className="text-amber-300/90">{lineText}</span>;
    }
    if (type === 'func') {
      return <span className="text-sky-300 font-semibold">{lineText}</span>;
    }
    if (type === 'keyword') {
      return <span className="text-purple-400 font-semibold">{lineText}</span>;
    }
    return <span className="text-zinc-200">{lineText}</span>;
  };

  return (
    <section
      ref={sectionRef}
      id="terminal-section"
      className="relative py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full selection:bg-primary/20"
    >
      {/* Section Header with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-3 mb-12"
      >
        <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
          VOLUME IV: LIVE PYTHON CODE ENGINE &amp; SUPPORT RUNTIME
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
          Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">Python Telemetry</span>
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground font-mono">
          // WITQUALIS TEAM IS ALWAYS AVAILABLE TO ACCELERATE YOUR TECHNICAL VISION
        </p>
      </motion.div>

      {/* Main Terminal Window with Slide-Up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
      >
        {/* Terminal Header Bar */}
        <div className="bg-zinc-900/90 px-5 py-3.5 border-b border-zinc-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
            <span className="ml-3 text-xs font-mono font-bold text-zinc-400 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>witqualis_support_daemon.py</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCode}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              {hasCopied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-zinc-400" />
                  <span className="text-[11px]">Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleReplay}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${isPlaying ? 'animate-spin' : ''}`} />
              <span className="text-[11px]">Replay</span>
            </button>
          </div>
        </div>

        {/* Python Code Display Area with Live Typewriter */}
        <div
          ref={codeContainerRef}
          className="p-6 sm:p-8 font-mono text-xs sm:text-sm bg-zinc-950/80 h-[380px] sm:h-[420px] overflow-y-auto leading-relaxed border-b border-zinc-800/80"
        >
          {pythonLines.map((line, index) => {
            if (index > currentLineIndex) return null;

            const isCurrentLine = index === currentLineIndex;
            const textToRender = isCurrentLine
              ? line.text.slice(0, currentCharIndex)
              : line.text;

            return (
              <div key={index} className="flex items-start gap-4 min-h-[1.5rem]">
                {/* Line numbers */}
                <span className="w-6 text-right text-zinc-600 select-none text-xs">
                  {index + 1}
                </span>

                {/* Line text */}
                <div className="flex-1 whitespace-pre-wrap">
                  {renderSyntaxLine(textToRender, line.type)}
                  {isCurrentLine && isPlaying && (
                    <span className="inline-block w-2 h-4 ml-0.5 bg-cyan-400 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive CLI Prompt & History */}
        <div className="p-4 sm:p-6 bg-zinc-900/70 flex flex-col gap-3">
          {/* Quick Command Suggestions Chips */}
          <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono select-none">
            <span className="text-zinc-500 text-xs mr-1">Quick Run:</span>
            {[
              { label: '⚡ run daemon', cmd: 'run' },
              { label: 'help', cmd: 'help' },
              { label: 'services', cmd: 'services' },
              { label: 'hire squad', cmd: 'hire' },
              { label: 'contact', cmd: 'contact' },
              { label: 'status', cmd: 'status' },
              { label: 'clear', cmd: 'clear' },
            ].map((item) => (
              <button
                key={item.cmd}
                type="button"
                onClick={() => executeCommand(item.cmd)}
                onMouseEnter={() => soundFx.playHover()}
                className="px-2.5 py-1 rounded-lg bg-zinc-800/90 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-zinc-700/60 text-zinc-300 hover:text-cyan-300 transition-all cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CLI Output Logs with auto-scroll */}
          {cliOutput.length > 0 && (
            <div
              ref={cliContainerRef}
              className="space-y-2 max-h-48 overflow-y-auto font-mono text-xs text-zinc-300 bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/80 leading-relaxed pr-2"
            >
              {cliOutput.map((out, i) => (
                <pre
                  key={i}
                  className={`whitespace-pre-wrap ${
                    out.startsWith('$') ? 'text-cyan-400 font-bold' : 'text-zinc-300'
                  }`}
                >
                  {out}
                </pre>
              ))}
            </div>
          )}

          {/* Command Input Form */}
          <form onSubmit={handleCliSubmit} className="flex items-center gap-3">
            <span className="text-cyan-400 font-mono text-xs font-bold shrink-0">witqualis@cli:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help', 'run', 'services', 'hire', 'contact' or click quick actions above..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-mono text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            <button
              type="submit"
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold transition-all cursor-pointer shrink-0"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

