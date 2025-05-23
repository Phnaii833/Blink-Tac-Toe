import React from 'react';

const BoardGrid = ({
  board,
  winningLine,
  vanishedCells,
  handleCellClick
}) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="grid grid-cols-3 gap-3 aspect-square">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className={`
              game-cell
              bg-gray-50 rounded-lg flex items-center justify-center text-4xl
              transition-all duration-300 cursor-pointer relative
              ${!cell && !vanishedCells.has(index) && !winningLine ? 'hover:bg-gray-100 hover:shadow-md' : ''}
              ${winningLine?.includes(index) ? 'winning-cell' : ''}
              ${vanishedCells.has(index) ? 'vanished-cell' : ''}
            `}
          >
            {cell && !vanishedCells.has(index) && (
              <span className="emoji-content bounce-in">
                {cell}
              </span>
            )}
            {vanishedCells.has(index) && (
              <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 bg-gray-100 bg-opacity-90 rounded-lg">
                vanished
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardGrid;