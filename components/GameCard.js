import { html } from 'htm/react';

const GameCard = ({ game, onClick }) => {
  return html`
    <div 
      onClick=${() => onClick(game)}
      className="group relative bg-[#1b0a2a] rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300 transform hover:-translate-y-1 border border-purple-900/50 hover:border-purple-500"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src=${game.thumbnail} 
          alt=${game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        ${game.popular && html`
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-lg border border-purple-400/30 uppercase">
                HOT
            </div>
        `}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-purple-50 group-hover:text-purple-400 transition-colors truncate">
            ${game.title}
        </h3>
        <p className="text-purple-300/60 text-sm mt-1 line-clamp-2 h-10">
            ${game.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-wider text-purple-400 bg-[#0d0216] px-2 py-1 rounded border border-purple-900/50 uppercase">
                ${game.category}
            </span>
            <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                PLAY NOW &rarr;
            </span>
        </div>
      </div>
    </div>
  `;
};

export default GameCard;