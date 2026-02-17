import React from 'react';
import { EDUCATIONAL_CONTENT } from '../constants.js';

const PanicScreen = ({ onExit }) => {
  return (
    <div className="fixed inset-0 bg-white text-black z-50 overflow-auto font-serif">
      {/* Fake Header */}
      <div className="border-b border-gray-300 p-4 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-serif font-bold text-gray-800">Wikipedia</div>
          <div className="hidden md:flex bg-gray-100 border border-gray-300 px-3 py-1 rounded w-64 text-gray-500 text-sm">Search Wikipedia</div>
        </div>
        <div className="text-sm text-blue-600 cursor-pointer underline hover:text-blue-800">Create account</div>
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-sm mt-4 min-h-screen">
        <div className="border-b pb-4 mb-4">
            <h1 className="text-3xl font-serif mb-2">Mitochondrion</h1>
            <div className="text-sm text-gray-600">From Wikipedia, the free encyclopedia</div>
        </div>
        
        <div 
            className="prose max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: EDUCATIONAL_CONTENT }} 
        />
        
        {/* Secret exit button - double click the copyright or similar */}
        <div 
          className="mt-20 text-xs text-gray-300 text-center cursor-default select-none hover:text-gray-400 transition-colors"
          onDoubleClick={onExit}
          title="Double click to return to Nebula"
        >
          Page last edited on 12 October 2023, at 14:30 (UTC).
        </div>
      </div>
    </div>
  );
};

export default PanicScreen;