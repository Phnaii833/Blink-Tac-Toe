import React from 'react';
import { emojiCategories } from './gameData';
import PropTypes from 'prop-types';

const GameSetup = ({
  player1Category,
  player2Category,
  setPlayer1Category,
  setPlayer2Category,
  setGameStarted,
  setShowHelp
}) => {
  const selectCategory = (player, category) => {
    if (player === 1) {
      setPlayer1Category(category);
    } else {
      setPlayer2Category(category);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Choose Your Emoji Categories</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Player 1 Selection */}
        <div className="flex-1 border-2 border-blue-400 rounded-xl p-4 transition-all hover:shadow-md">
          <div className="bg-blue-100 rounded-lg p-3 mb-4">
            <h3 className="text-xl font-semibold text-blue-700">Player 1</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={`p1-${category}`}
                onClick={() => selectCategory(1, category)}
                className={`p-3 rounded-lg border-2 transition-all cursor-pointer whitespace-nowrap ${
                  player1Category === category
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {player1Category && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <div className="flex flex-wrap gap-2">
                {emojiCategories[player1Category]
                  .slice(0, 5)
                  .map((emoji, i) => (
                    <span key={i} className="text-2xl">{emoji}</span>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Player 2 Selection */}
        <div className="flex-1 border-2 border-pink-400 rounded-xl p-4 transition-all hover:shadow-md">
          <div className="bg-pink-100 rounded-lg p-3 mb-4">
            <h3 className="text-xl font-semibold text-pink-700">Player 2</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            {Object.keys(emojiCategories).map((category) => (
              <button
                key={`p2-${category}`}
                onClick={() => selectCategory(2, category)}
                className={`p-3 rounded-lg border-2 transition-all cursor-pointer whitespace-nowrap ${
                  player2Category === category
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-pink-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {player2Category && (
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <div className="flex flex-wrap gap-2">
                {emojiCategories[player2Category]
                  .slice(0, 5)
                  .map((emoji, i) => (
                    <span key={i} className="text-2xl">{emoji}</span>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setGameStarted(true)}
          disabled={!player1Category || !player2Category}
          className={`px-8 py-3 text-lg font-semibold rounded-full transition-all ${
            player1Category && player2Category
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Start Game
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => setShowHelp(true)}
          className="text-purple-600 hover:text-purple-800 underline cursor-pointer"
        >
          How to Play
        </button>
      </div>
    </div>
  );
};

GameSetup.propTypes = {
  player1Category: PropTypes.string,
  player2Category: PropTypes.string,
  setPlayer1Category: PropTypes.func.isRequired,
  setPlayer2Category: PropTypes.func.isRequired,
  setGameStarted: PropTypes.func.isRequired,
  setShowHelp: PropTypes.func.isRequired
};

export default GameSetup;