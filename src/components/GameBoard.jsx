import React from 'react';
import PlayerInfo from './PlayerInfo';
import BoardGrid from './BoardGrid';
import GameControls from './GameControls';
import PropTypes from 'prop-types';

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

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string),
  currentPlayer: PropTypes.oneOf([1, 2]).isRequired,
  winner: PropTypes.number,
  winningLine: PropTypes.arrayOf(PropTypes.number),
  player1Moves: PropTypes.arrayOf(PropTypes.number).isRequired,
  player2Moves: PropTypes.arrayOf(PropTypes.number).isRequired,
  vanishedCells: PropTypes.instanceOf(Set).isRequired,
  player1Category: PropTypes.string.isRequired,
  player2Category: PropTypes.string.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  setShowHelp: PropTypes.func.isRequired
};

export default GameBoard;