import React from 'react';
import PlayerInfo from './PlayerInfo';
import BoardGrid from './BoardGrid';
import GameControls from './GameControls';

const GameBoard = ({
  board,
  currentPlayer,
  winner,
  winningLine,
  player1Moves,
  player2Moves,
  vanishedCells,
  player1Category,
  player2Category,
  handleCellClick,
  resetGame,
  setShowHelp
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <PlayerInfo 
        currentPlayer={currentPlayer}
        winner={winner}
        player1Category={player1Category}
        player2Category={player2Category}
      />
      
      <BoardGrid 
        board={board}
        winningLine={winningLine}
        vanishedCells={vanishedCells}
        handleCellClick={handleCellClick}
      />

      <GameControls 
        resetGame={resetGame}
        setShowHelp={setShowHelp}
      />
    </div>
  );
};

export default GameBoard;