import React from 'react';

const WinnerModal = ({
  winner,
  winningLine,
  board,
  player1Category,
  player2Category,
  resetGame
}) => {
  const getWinType = () => {
    if (!winningLine) return '';
    if (winningLine.includes(0) && winningLine.includes(1) && winningLine.includes(2)) return "Horizontal Top Row Win!";
    if (winningLine.includes(3) && winningLine.includes(4) && winningLine.includes(5)) return "Horizontal Middle Row Win!";
    if (winningLine.includes(6) && winningLine.includes(7) && winningLine.includes(8)) return "Horizontal Bottom Row Win!";
    if (winningLine.includes(0) && winningLine.includes(3) && winningLine.includes(6)) return "Vertical Left Column Win!";
    if (winningLine.includes(1) && winningLine.includes(4) && winningLine.includes(7)) return "Vertical Middle Column Win!";
    if (winningLine.includes(2) && winningLine.includes(5) && winningLine.includes(8)) return "Vertical Right Column Win!";
    if (winningLine.includes(0) && winningLine.includes(4) && winningLine.includes(8)) return "Diagonal Win (Top-Left to Bottom-Right)!";
    if (winningLine.includes(2) && winningLine.includes(4) && winningLine.includes(6)) return "Diagonal Win (Top-Right to Bottom-Left)!";
    return '';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-4 mb-6">
            {winningLine?.map((index, i) => (
              <div key={i} className="text-5xl animate-bounce" style={{animationDelay: `${i * 0.2}s`}}>
                {board[index]}
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
            <h2 className="text-3xl font-bold mb-2">
              <span className={winner === 1 ? 'text-blue-600' : 'text-pink-600'}>
                Player {winner}
              </span> Wins!
            </h2>
            <p className="text-gray-600">
              Winning with {winner === 1 ? player1Category : player2Category} emojis!
            </p>
          </div>
          <div className="text-sm text-gray-500 mb-4">
            {getWinType()}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => resetGame(true)}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Play Again
          </button>
          <button
            onClick={() => resetGame(false)}
            className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-all"
          >
            Change Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinnerModal;