
import React, { useState, useEffect } from 'react';
import { GAMES } from './constants';
import { Game } from './types';
import GameCard from './components/GameCard';
import PanicScreen from './components/PanicScreen';

function App() {
  const [panicMode, setPanicMode] = useState(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [view, setView] = useState<'games' | 'request'>('games');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        setPanicMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredGames = GAMES.filter(game => {
    return game.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => setRequestSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  if (panicMode) {
    return <PanicScreen onExit={() => setPanicMode(false)} />;
  }

  return (
    <div className="flex h-screen bg-[#0d0216] text-purple-50 overflow-hidden font-sans">
      
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-[#140424] border-r border-purple-900/50 z-30 transition-transform duration-300 flex flex-col shadow-2xl shadow-purple-900/20`}>
        <div className="p-6 border-b border-purple-900/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <svg className="w-8 h-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="url(#nebula_grad_tsx)" />
                <defs>
                  <linearGradient id="nebula_grad_tsx" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#6366F1"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-purple-50 lowercase">
              nebula<span className="text-indigo-400">vault</span>
            </h1>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="md:hidden p-1 text-purple-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => { setView('games'); setIsSidebarOpen(false); setActiveGame(null); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${view === 'games' ? 'bg-purple-900/40 text-white shadow-inner border border-purple-800/50' : 'text-purple-300/70 hover:text-white hover:bg-purple-900/20'}`}
          >
            Library
          </button>
          
          <button 
            onClick={() => { setView('request'); setIsSidebarOpen(false); setActiveGame(null); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${view === 'request' ? 'bg-purple-900/40 text-white shadow-inner border border-purple-800/50' : 'text-purple-300/70 hover:text-white hover:bg-purple-900/20'}`}
          >
            Request Games
          </button>
        </nav>

        <div className="p-4 border-t border-purple-900/50">
            <div className="bg-purple-950/50 rounded-lg p-3 border border-purple-900/30">
                <p className="text-xs text-purple-400/80 mb-2">Panic Button: <span className="font-mono text-purple-400 underline underline-offset-4 font-bold">~</span></p>
                <button 
                    onClick={() => setPanicMode(true)}
                    className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold py-2 rounded border border-red-500/20 transition-colors shadow-sm"
                >
                    ACTIVATE PANIC MODE
                </button>
            </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        <header className="h-16 border-b border-purple-900/50 bg-[#0d0216]/95 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-20">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-purple-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                {!activeGame && view === 'games' && (
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-purple-500 group-focus-within:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search games..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-[#05010a] border border-purple-900/50 text-purple-50 text-sm rounded-full focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 block w-48 md:w-64 pl-10 p-2 placeholder-purple-600/50 transition-all outline-none"
                        />
                    </div>
                )}
                {activeGame && (
                    <button 
                        onClick={() => setActiveGame(null)}
                        className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Library
                    </button>
                )}
                {view === 'request' && <h2 className="text-lg font-bold text-white">Vault Request</h2>}
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
            {activeGame ? (
                <div className="h-full flex flex-col max-w-6xl mx-auto animate-fadeIn">
                    <div className="bg-[#1b0a2a] rounded-t-xl p-4 flex justify-between items-center border border-purple-900/50 border-b-0">
                        <h2 className="text-xl font-bold text-white">{activeGame.title}</h2>
                        <div className="flex gap-2">
                             <button onClick={() => {
                                const elem = document.getElementById('game-frame');
                                if (elem?.requestFullscreen) (elem as any).requestFullscreen();
                             }} className="p-2 hover:bg-purple-900/40 rounded text-purple-300" title="Fullscreen">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                             </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-black rounded-b-xl overflow-hidden relative border border-purple-900/50 shadow-2xl">
                        <iframe 
                            id="game-frame"
                            src={activeGame.url} 
                            title={activeGame.title}
                            className="w-full h-full border-none"
                            allowFullScreen
                            allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; microphone *"
                            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads allow-storage-access-by-user-activation"
                        ></iframe>
                    </div>
                </div>
            ) : view === 'games' ? (
                <div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {searchTerm ? `Search results for "${searchTerm}"` : `Available Games`}
                        </h2>
                    </div>
                    {filteredGames.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredGames.map(game => (
                                <GameCard key={game.id} game={game} onClick={setActiveGame} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-purple-700">
                             <p className="text-xl font-semibold">No games found.</p>
                             <button onClick={() => setSearchTerm('')} className="mt-4 text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors">
                                 Reset search
                             </button>
                         </div>
                    )}
                </div>
            ) : (
                <div className="max-w-2xl mx-auto py-12 animate-fadeIn">
                    <div className="bg-[#140424] border border-purple-900/50 p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Request a Game</h2>
                        <form onSubmit={handleRequestSubmit} className="space-y-6">
                            <input required type="text" className="w-full bg-[#0d0216] border border-purple-900/50 rounded-lg p-3 text-white outline-none" placeholder="Game Name" />
                            <textarea className="w-full bg-[#0d0216] border border-purple-900/50 rounded-lg p-3 text-white outline-none h-32" placeholder="Message"></textarea>
                            <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

export default App;
