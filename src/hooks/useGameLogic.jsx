import { useState } from 'react';
import { emojiCategories, winningCombinations } from '../components/gameData.js';


const useGameLogic = (player1Category, player2Category) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [vanishedCells, setVanishedCells] = useState(new Set());

  const getRandomEmoji = (category) => {
    const emojis = emojiCategories[category];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const handleCellClick = (index) => {
    if (board[index] !== null || winner !== null || vanishedCells.has(index)) {
      const cell = document.querySelectorAll('.game-cell')[index];
      cell?.classList.add('shake-animation');
      setTimeout(() => {
        cell?.classList.remove('shake-animation');
      }, 500);
      return;
    }

    const currentMoves = currentPlayer === 1 ? player1Moves : player2Moves;
    
    if (currentMoves.length === 3) {
      const oldestMoveIndex = currentMoves[0];
      setVanishedCells(prev => {
        const newSet = new Set(prev);
        newSet.add(oldestMoveIndex);
        return newSet;
      });
    }

    const newBoard = [...board];
    const emoji = getRandomEmoji(currentPlayer === 1 ? player1Category : player2Category);
    newBoard[index] = emoji;

    if (currentPlayer === 1) {
      const newMoves = [...player1Moves, index];
      if (newMoves.length > 3) {
        const oldestMoveIndex = newMoves.shift();
        newBoard[oldestMoveIndex] = null;
      }
      setPlayer1Moves(newMoves);
    } else {
      const newMoves = [...player2Moves, index];
      if (newMoves.length > 3) {
        const oldestMoveIndex = newMoves.shift();
        newBoard[oldestMoveIndex] = null;
      }
      setPlayer2Moves(newMoves);
    }

    setBoard(newBoard);
    const hasWon = checkWinner(newBoard);
    if (!hasWon) {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  const checkWinner = (currentBoard) => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      const currentPlayerMoves = currentPlayer === 1 ? player1Moves : player2Moves;
      const currentCategory = currentPlayer === 1 ? player1Category : player2Category;
      const categoryEmojis = emojiCategories[currentCategory];

      if (
        currentPlayerMoves.includes(a) &&
        currentPlayerMoves.includes(b) &&
        currentPlayerMoves.includes(c)
      ) {
        const emojiA = currentBoard[a];
        const emojiB = currentBoard[b];
        const emojiC = currentBoard[c];

        const isValidWin = [emojiA, emojiB, emojiC].every(emoji => 
          emoji === null || categoryEmojis.includes(emoji)
        );

        if (isValidWin) {
          setWinner(currentPlayer);
          setWinningLine(combo);
          return true;
        }
      }
    }
    return false;
  };

  const resetGame = (keepCategories = false) => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine(null);
    setCurrentPlayer(1);
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setVanishedCells(new Set());
    return keepCategories;
  };

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    player1Moves,
    player2Moves,
    vanishedCells,
    handleCellClick,
    resetGame
  };
};

export default useGameLogic;