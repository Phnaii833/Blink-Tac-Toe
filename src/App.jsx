import React, { useState } from 'react';
import GameSetup from './components/GameSetup';
import GameBoard from './components/GameBoard';
import HelpModal from './components/Modals/HelpModal';
import WinnerModal from './components/Modals/WinnerModal';
import useGameLogic from './hooks/useGameLogic';
import './styles/animations.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');
  
  const {
    board,
    currentPlayer,
    winner,
    winningLine,
    player1Moves,
    player2Moves,
    vanishedCells,
    handleCellClick,
    resetGame
  } = useGameLogic(player1Category, player2Category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center py-8 px-4">
      <div className="max-w-6xl w-full mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">Vanishing Emoji Tic Tac Toe</h1>
          <p className="text-gray-600">A magical twist on the classic game!</p>
        </header>

        {!gameStarted ? (
          <GameSetup 
            player1Category={player1Category}
            player2Category={player2Category}
            setPlayer1Category={setPlayer1Category}
            setPlayer2Category={setPlayer2Category}
            setGameStarted={setGameStarted}
            setShowHelp={setShowHelp}
          />
        ) : (
          <GameBoard
            board={board}
            currentPlayer={currentPlayer}
            winner={winner}
            winningLine={winningLine}
            player1Moves={player1Moves}
            player2Moves={player2Moves}
            vanishedCells={vanishedCells}
            player1Category={player1Category}
            player2Category={player2Category}
            handleCellClick={handleCellClick}
            resetGame={resetGame}
            setShowHelp={setShowHelp}
          />
        )}

        <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} />
        
        {winner !== null && (
          <WinnerModal
            winner={winner}
            winningLine={winningLine}
            board={board}
            player1Category={player1Category}
            player2Category={player2Category}
            resetGame={resetGame}
          />
        )}
      </div>
    </div>
  );
};

export default App;