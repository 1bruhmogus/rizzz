import React, { useState, useEffect } from 'react';
import { GAMES } from './constants';
import { Game, Category } from './types';
import GameCard from './components/GameCard';
import PanicScreen from './components/PanicScreen';

function App() {
  const [panicMode, setPanicMode] = useState(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Panic key: Tilde (`) or Escape
      if (e.key === '`' || e.key === '~') {
        setPanicMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredGames = GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (panicMode) {
    return <PanicScreen onExit={() => setPanicMode(false)} />;
  }

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100 overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 z-30 transition-transform duration-300 flex flex-col`}>
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg shadow-lg shadow-purple-500/30"></div>
          <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">NEBULA</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => { setSelectedCategory('All'); setIsSidebarOpen(false); setActiveGame(null); }}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'All' && !activeGame ? 'bg-slate-800 text-white shadow-inner' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
          >
            All Games
          </button>
          
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Categories</div>
          {Object.values(Category).map(cat => (
             <button 
             key={cat}
             onClick={() => { setSelectedCategory(cat); setIsSidebarOpen(false); setActiveGame(null); }}
             className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat && !activeGame ? 'bg-slate-800 text-purple-400' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
           >
             {cat}
           </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
            <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-xs text-slate-400 mb-2">Panic Button: <span className="font-mono text-purple-400">~</span></p>
                <button 
                    onClick={() => setPanicMode(true)}
                    className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold py-2 rounded border border-red-500/20 transition-colors"
                >
                    ACTIVATE PANIC MODE
                </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-4 md:px-8 z-20">
            <div className="flex items-center gap-4">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-slate-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                {!activeGame && (
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-500 group-focus-within:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search games..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-slate-950 border border-slate-800 text-slate-100 text-sm rounded-full focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 block w-48 md:w-64 pl-10 p-2 placeholder-slate-500 transition-all outline-none"
                        />
                    </div>
                )}
                {activeGame && (
                    <button 
                        onClick={() => setActiveGame(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Library
                    </button>
                )}
            </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
            {activeGame ? (
                <div className="h-full flex flex-col max-w-6xl mx-auto animate-fadeIn">
                    <div className="bg-slate-800 rounded-t-xl p-4 flex justify-between items-center border border-slate-700 border-b-0">
                        <h2 className="text-xl font-bold text-white">{activeGame.title}</h2>
                        <div className="flex gap-2">
                             <button onClick={() => {
                                const elem = document.getElementById('game-frame');
                                if (elem?.requestFullscreen) elem.requestFullscreen();
                             }} className="p-2 hover:bg-slate-700 rounded text-slate-300" title="Fullscreen">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                             </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-black rounded-b-xl overflow-hidden relative border border-slate-700 shadow-2xl">
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
                    <div className="mt-4 text-slate-400 text-sm">
                        <p>{activeGame.description}</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {searchTerm ? `Search results for "${searchTerm}"` : `${selectedCategory} Games`}
                        </h2>
                        <p className="text-slate-400">Select a game to start playing. Don't get caught!</p>
                    </div>
                    
                    {filteredGames.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredGames.map(game => (
                                <GameCard key={game.id} game={game} onClick={setActiveGame} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-slate-500">
                            <p className="text-xl">No games found.</p>
                            <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} className="mt-4 text-purple-400 hover:underline">
                                Reset filters
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
        
        {/* Floating Action Button for Panic (Mobile) */}
        <button 
            onClick={() => setPanicMode(true)}
            className="md:hidden fixed bottom-4 left-4 bg-red-500 text-white p-3 rounded-full shadow-lg z-40 active:scale-95 transition-transform"
        >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </button>

      </main>
    </div>
  );
}

export default App;