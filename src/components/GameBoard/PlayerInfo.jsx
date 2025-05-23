import React from 'react';

const PlayerInfo = ({
  currentPlayer,
  winner,
  player1Category,
  player2Category
}) => {
  return (
    <div className="flex justify-between mb-6">
      <div className={`flex items-center p-3 rounded-lg transition-all ${
        currentPlayer === 1 && !winner ? 'bg-blue-100 shadow-md' : ''
      }`}>
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
          P1
        </div>
        <div>
          <p className="font-semibold">Player 1</p>
          <p className="text-sm text-gray-600">{player1Category}</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="px-4 py-2 bg-gray-100 rounded-lg text-center">
          <p className="text-sm text-gray-600">Current Turn</p>
          <p className="font-bold text-lg">{winner ? 'Game Over' : `Player ${currentPlayer}`}</p>
        </div>
      </div>

      <div className={`flex items-center p-3 rounded-lg transition-all ${
        currentPlayer === 2 && !winner ? 'bg-pink-100 shadow-md' : ''
      }`}>
        <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold mr-3">
          P2
        </div>
        <div>
          <p className="font-semibold">Player 2</p>
          <p className="text-sm text-gray-600">{player2Category}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;