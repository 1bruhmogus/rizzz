import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 hover:border-purple-500"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        {game.popular && (
            <div className="absolute top-2 right-2 bg-yellow-500 text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-lg">
                HOT
            </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-400 transition-colors truncate">
            {game.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1 line-clamp-2 h-10">
            {game.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                {game.category}
            </span>
            <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                PLAY NOW &rarr;
            </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;