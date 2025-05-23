import React from 'react';

const GameControls = ({
  resetGame,
  setShowHelp
}) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={() => resetGame(true)}
        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-all"
      >
        <i className="fas fa-redo mr-2"></i>
        Restart
      </button>
      <button
        onClick={() => setShowHelp(true)}
        className="px-6 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full font-medium transition-all"
      >
        <i className="fas fa-question-circle mr-2"></i>
        Help
      </button>
    </div>
  );
};

export default GameControls;