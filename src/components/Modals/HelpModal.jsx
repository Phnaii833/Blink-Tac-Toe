import React from 'react';

const HelpModal = ({ showHelp, setShowHelp }) => {
  if (!showHelp) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-600">How to Play</h2>
          <button
            onClick={() => setShowHelp(false)}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Basic Rules</h3>
            <p>This is Tic Tac Toe with a magical twist! Instead of X's and O's, you'll play with random emojis from your chosen category.</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">The Vanishing Emoji Rule</h3>
            <p>After a short time, your placed emoji will vanish from the board! The cell becomes blocked and can't be used again.</p>
            <p className="mt-2">But don't worry - the game remembers your move, and it still counts toward winning!</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">How to Win</h3>
            <p>Get three of your emojis in a row (horizontally, vertically, or diagonally) before they vanish!</p>
            <p className="mt-2">Remember: even vanished emojis count toward your win, but you need to remember where they were!</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Strategy Tips</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pay close attention to where vanished emojis were placed</li>
              <li>Try to create multiple winning opportunities</li>
              <li>Block your opponent's potential winning moves</li>
              <li>Use the vanishing effect to your advantage by creating "invisible traps"</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowHelp(false)}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;